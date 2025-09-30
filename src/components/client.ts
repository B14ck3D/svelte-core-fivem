import { onEvent, onceEvent, offEvent, sendEvent } from './nui';

// High-level NUI client with:
// - request timeout protection
// - retry with exponential backoff
// - optional structured logger
// - convenience JSON parsing

export type LogLevel = 'debug' | 'warn' | 'error';

export type Logger = (level: LogLevel, message: string, meta?: unknown) => void;

export type NuiClientOptions = {
	timeoutMs?: number;
	retries?: number;
	backoffMs?: number;
	logger?: Logger;
	transport?: (eventName: string, data?: unknown) => Promise<Response>;
};

export type SendOptions = {
	timeoutMs?: number;
	retries?: number;
	backoffMs?: number;
};

export type NuiClient = {
	send: (eventName: string, data?: unknown, options?: SendOptions) => Promise<Response>;
	sendJson: <T = unknown>(eventName: string, data?: unknown, options?: SendOptions) => Promise<T>;
	on: typeof onEvent;
	once: typeof onceEvent;
	off: typeof offEvent;
};

// Utility: pause execution for given milliseconds (used for backoff between retries)
function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Thrown when a request exceeded the configured timeout
class TimeoutError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'TimeoutError';
	}
}

// Wrap a promise with a timeout; rejects with TimeoutError after ms
async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
	let timeoutHandle: ReturnType<typeof setTimeout> | null = null;
	const timeoutPromise = new Promise<never>((_, reject) => {
		timeoutHandle = setTimeout(() => reject(new TimeoutError(`sendEvent timed out after ${ms}ms`)), ms);
	});
	try {
		const result = await Promise.race([promise, timeoutPromise]);
		return result as T;
	} finally {
		if (timeoutHandle) clearTimeout(timeoutHandle);
	}
}

export function createNuiClient(options: NuiClientOptions = {}): NuiClient {
	const baseTimeout = options.timeoutMs ?? 5000;
	const baseRetries = options.retries ?? 2;
	const baseBackoff = options.backoffMs ?? 300;
	const log: Logger = options.logger ?? (() => {});
	// Transport can be swapped for tests; by default use sendEvent to call Lua
	const transport = options.transport ?? ((name, data) => sendEvent(name, data));

	// Core sender with retry and exponential backoff
	async function sendCore(eventName: string, data?: unknown, opts?: SendOptions): Promise<Response> {
		const timeoutMs = opts?.timeoutMs ?? baseTimeout;
		const retries = opts?.retries ?? baseRetries;
		const backoffMs = opts?.backoffMs ?? baseBackoff;

		// Attach a lightweight request id to help trace logs and avoid duplicate processing server-side
		const requestId = Math.random().toString(36).slice(2);
		const payload = (data && typeof data === 'object') ? { ...(data as Record<string, unknown>), _rid: requestId } : data;

		let attempt = 0;
		let lastError: unknown;
		while (attempt <= retries) {
			try {
				log('debug', 'nui.send.attempt', { eventName, attempt, requestId });
				const response = await withTimeout(transport(eventName, payload), timeoutMs);
				if (!response.ok) {
					throw new Error(`HTTP ${response.status}`);
				}
				return response;
			} catch (err) {
				lastError = err;
				if (attempt === retries) break;
				// exponential backoff: 0 -> backoffMs, 1 -> 2x, 2 -> 4x, ...
				const delay = backoffMs * Math.pow(2, attempt);
				log('warn', 'nui.send.retry', { eventName, attempt, delay, error: String(err) });
				await sleep(delay);
				attempt += 1;
			}
		}
		log('error', 'nui.send.failed', { eventName, error: String(lastError) });
		throw lastError instanceof Error ? lastError : new Error(String(lastError));
	}

	// Convenience: send and attempt to parse JSON response
	async function sendJson<T = unknown>(eventName: string, data?: unknown, opts?: SendOptions): Promise<T> {
		const res = await sendCore(eventName, data, opts);
		// Best-effort JSON parse; returns undefined as T if response has no JSON
		try {
			return (await res.json()) as T;
		} catch (_) {
			return undefined as unknown as T;
		}
	}

	return {
		send: sendCore,
		sendJson,
		on: onEvent,
		once: onceEvent,
		off: offEvent
	};
}

export { TimeoutError };


