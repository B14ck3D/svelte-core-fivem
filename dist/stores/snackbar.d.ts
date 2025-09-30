import { Writable } from 'svelte/store';

export type Snack = {
    id: number;
    type?: 'info' | 'success' | 'warning' | 'error';
    message: string;
    timeout?: number;
};
export declare const toasts: Writable<Snack[]>;
export declare function push(message: string, opts?: Partial<Omit<Snack, 'id' | 'message'>>): number;
export declare function remove(id: number): void;
export declare function clear(): void;
//# sourceMappingURL=snackbar.d.ts.map