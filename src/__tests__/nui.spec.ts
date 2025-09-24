import { describe, it, expect, vi } from 'vitest';
import { onEvent, onceEvent, offEvent, sendEvent } from '../nui';

describe('NUI', () => {
	it('onEvent/emit via window.postMessage delivers payload', () => {
		const cb = vi.fn();
		onEvent('test:event', cb);
		window.dispatchEvent(new MessageEvent('message', { data: { action: 'test:event', data: { a: 1 } } }));
		expect(cb).toHaveBeenCalledWith({ a: 1 });
	});

	it('onceEvent triggers only once', () => {
		const cb = vi.fn();
		onceEvent('once:event', cb);
		window.dispatchEvent(new MessageEvent('message', { data: { action: 'once:event', data: 1 } }));
		window.dispatchEvent(new MessageEvent('message', { data: { action: 'once:event', data: 2 } }));
		expect(cb).toHaveBeenCalledTimes(1);
		expect(cb).toHaveBeenCalledWith(1);
	});

	it('offEvent detaches listener', () => {
		const cb = vi.fn();
		onEvent('off:event', cb);
		offEvent('off:event', cb);
		window.postMessage({ action: 'off:event', data: 1 }, '*');
		expect(cb).not.toHaveBeenCalled();
	});

	it('sendEvent returns Response in dev', async () => {
		const res = await sendEvent('dev:event', { hello: 'world' });
		expect(res.ok).toBe(true);
		const json = await res.json();
		expect(json).toMatchObject({ ok: true, dev: true });
	});
});


