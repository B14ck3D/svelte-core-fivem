import { EventCallback } from '../nui';

export type AdapterApi = {
    on: <T = unknown>(action: string, callback: EventCallback<T>) => () => void;
    once: <T = unknown>(action: string, callback: EventCallback<T>) => () => void;
    off: <T = unknown>(action: string, callback: EventCallback<T>) => void;
    send: <T = unknown>(event: string, data?: T) => Promise<Response>;
};
export declare function createAdapter(prefix: string): AdapterApi;
export default createAdapter;
//# sourceMappingURL=createAdapter.d.ts.map