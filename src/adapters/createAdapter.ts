import { onEvent, onceEvent, offEvent, sendEvent, type EventCallback } from '../nui';

export type AdapterApi = {
	on: <T = unknown>(action: string, callback: EventCallback<T>) => () => void;
	once: <T = unknown>(action: string, callback: EventCallback<T>) => () => void;
	off: <T = unknown>(action: string, callback: EventCallback<T>) => void;
	send: <T = unknown>(event: string, data?: T) => Promise<Response>;
};

export function createAdapter(prefix: string): AdapterApi {
	const withPrefix = (name: string) => `${prefix}:${name}`;
	return {
		on: (action, callback) => onEvent(withPrefix(action), callback),
		once: (action, callback) => onceEvent(withPrefix(action), callback),
		off: (action, callback) => offEvent(withPrefix(action), callback),
		send: (event, data) => sendEvent(withPrefix(event), data)
	};
}

export default createAdapter;


