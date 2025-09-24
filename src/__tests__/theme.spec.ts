import { describe, it, expect } from 'vitest';
import { themeToCssVars, defaultTheme, presetDark, presetLight } from '../theme';

describe('Theme', () => {
	it('converts theme to css vars', () => {
		const vars = themeToCssVars(defaultTheme);
		expect(vars['--ui-color-primary']).toBe(defaultTheme.colors.primary);
		expect(vars['--ui-radius']).toBe(defaultTheme.radius);
	});

	it('has valid light/dark presets', () => {
		expect(presetLight.colors.onSurface).not.toBe('');
		expect(presetDark.colors.surface).not.toBe('');
	});
});


