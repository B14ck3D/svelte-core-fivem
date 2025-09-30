type NUIEventPayload = {
	action: string;
	data?: unknown;
};

export type EventCallback<T = unknown> = (data: T) => void;

// In-memory registry mapping action names to subscribed callbacks.
// Acts as a lightweight event bus for messages coming from Lua (SendNUIMessage).
const eventNameToCallbacks: Map<string, Set<EventCallback>> = new Map();

// Detect if we run inside FiveM runtime (native injected on window)
function isFiveMEnvironment(): boolean {
	return typeof window !== 'undefined' && typeof (window as any).GetParentResourceName === 'function';
}

// Resolve resource name for POST endpoints; in dev return a stable placeholder
function getResourceName(): string {
	if (isFiveMEnvironment()) {
		return (window as any).GetParentResourceName();
	}
	return 'dev-resource';
}

// Bind a single global message listener once.
// It routes incoming window.postMessage payloads to the registered callbacks.
function ensureMessageListener(): void {
	if (typeof window === 'undefined') return;
	if ((window as any).__fivemUiCoreMessageBound) return;
	(window as any).__fivemUiCoreMessageBound = true;
	window.addEventListener('message', (event: MessageEvent<NUIEventPayload>) => {
		const payload = event?.data;
		if (!payload || typeof payload !== 'object') return;
		const { action, data } = payload as NUIEventPayload;
		if (!action) return;
		const callbacks = eventNameToCallbacks.get(action);
		if (!callbacks || callbacks.size === 0) return;
		callbacks.forEach((cb) => {
			try { cb(data); } catch (err) { console.error('[fivem-ui/core] onEvent callback error:', err); }
		});
	});
}

export function onEvent<T = unknown>(eventName: string, callback: EventCallback<T>): () => void {
	if (!eventNameToCallbacks.has(eventName)) {
		eventNameToCallbacks.set(eventName, new Set());
	}
	eventNameToCallbacks.get(eventName)!.add(callback as EventCallback);
	ensureMessageListener();
	return () => offEvent(eventName, callback);
}

export function onceEvent<T = unknown>(eventName: string, callback: EventCallback<T>): () => void {
	const off = onEvent<T>(eventName, (data) => {
		off();
		callback(data);
	});
	return off;
}

export function offEvent<T = unknown>(eventName: string, callback: EventCallback<T>): void {
	const set = eventNameToCallbacks.get(eventName);
	if (!set) return;
	set.delete(callback as EventCallback);
	if (set.size === 0) eventNameToCallbacks.delete(eventName);
}

export async function sendEvent<T = unknown>(eventName: string, data?: T): Promise<Response> {
	const resource = getResourceName();
	if (!isFiveMEnvironment()) {
		console.debug('[fivem-ui/core] sendEvent (dev):', { eventName, data });
		// Return a mock Response in dev to keep the API consistent during local UI development
		return new Response(JSON.stringify({ ok: true, dev: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
		});
	}
	const endpoint = `https://${resource}/${eventName}`;
	return fetch(endpoint, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=UTF-8' },
		body: JSON.stringify(data ?? {})
	});
}
