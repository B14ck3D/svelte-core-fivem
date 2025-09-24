export type EventCallback<T = unknown> = (data: T) => void;
export declare function onEvent<T = unknown>(eventName: string, callback: EventCallback<T>): () => void;
export declare function onceEvent<T = unknown>(eventName: string, callback: EventCallback<T>): () => void;
export declare function offEvent<T = unknown>(eventName: string, callback: EventCallback<T>): void;
export declare function sendEvent<T = unknown>(eventName: string, data?: T): Promise<Response | void>;
//# sourceMappingURL=nui.d.ts.map