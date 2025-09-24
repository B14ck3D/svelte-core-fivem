import { describe, it, expect } from 'vitest';
import List from '../components/List.svelte';
import TextInput from '../components/TextInput.svelte';
import Snackbar from '../components/Snackbar.svelte';
import { push, clear, toasts } from '../stores/snackbar';
import { render, fireEvent } from '@testing-library/svelte';

describe('Components', () => {
	it('List selects item on click', async () => {
		const items = [
			{ id: 1, label: 'One' },
			{ id: 2, label: 'Two' }
		];
		const { container } = render(List, { props: { items } });
		const rows = container.querySelectorAll('.row');
		await fireEvent.click(rows[1] as Element);
		expect(rows[1].classList.contains('selected')).toBe(true);
	});

	it('TextInput updates value and fires onEnter', async () => {
		const onEnter = vi.fn();
		const { getByRole, component } = render(TextInput, { props: { label: 'Name', onEnter } });
		const input = getByRole('textbox') as HTMLInputElement;
		await fireEvent.input(input, { target: { value: 'john' } });
		expect(input.value).toBe('john');
		await fireEvent.keyDown(input, { key: 'Enter' });
		expect(onEnter).toHaveBeenCalledWith('john');
	});

	it('Snackbar shows and auto-removes toasts', async () => {
		render(Snackbar);
		clear();
		push('Hello', { timeout: 10 });
		let list!: any[];
		toasts.subscribe((v) => (list = v));
		expect(list.length).toBe(1);
		await new Promise((r) => setTimeout(r, 15));
		expect(list.length).toBe(0);
	});
});


