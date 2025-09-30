import { writable, type Writable } from 'svelte/store';

export type Snack = {
	id: number;
	type?: 'info' | 'success' | 'warning' | 'error';
	message: string;
	timeout?: number;
};

let nextId = 1;

export const toasts: Writable<Snack[]> = writable([]);

export function push(message: string, opts: Partial<Omit<Snack, 'id' | 'message'>> = {}): number {
	const snack: Snack = {
		id: nextId++,
		message,
		type: opts.type ?? 'info',
		timeout: opts.timeout ?? 2500
	};
	toasts.update((arr) => [...arr, snack]);
	if (snack.timeout && snack.timeout > 0) {
		setTimeout(() => remove(snack.id), snack.timeout);
	}
	return snack.id;
}

export function remove(id: number): void {
	toasts.update((arr) => arr.filter((s) => s.id !== id));
}

export function clear(): void {
	toasts.set([]);
}


