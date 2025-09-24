import { describe, it, expect, vi } from 'vitest';
import { esx } from '../adapters/esx';
import { qb } from '../adapters/qb';

describe('Adapters', () => {
	it('prefixes actions/events', () => {
		const cb = vi.fn();
		const off = esx.on('notify', cb);
		window.dispatchEvent(new MessageEvent('message', { data: { action: 'esx:notify', data: 1 } }));
		expect(cb).toHaveBeenCalledWith(1);
		off();
	});

	it('send prefixes event', async () => {
		const res = await qb.send('ready', { ok: true });
		expect(res.ok).toBe(true);
	});
});


