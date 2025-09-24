export type Theme = {
	colors: {
		primary: string;
		success: string;
		warning: string;
		error: string;
		surface: string;
		onSurface: string;
		border: string;
	};
	radius: string;
	fontFamily: string;
};

export const defaultTheme: Theme = {
	colors: {
		primary: '#4CC9F0',
		success: '#2ecc71',
		warning: '#f39c12',
		error: '#e74c3c',
		surface: '#161616',
		onSurface: '#ffffff',
		border: '#2a2a2a'
	},
	radius: '10px',
	fontFamily: 'Inter, system-ui, sans-serif'
};

export function themeToCssVars(theme: Theme = defaultTheme): Record<string, string> {
	return {
		'--ui-color-primary': theme.colors.primary,
		'--ui-color-success': theme.colors.success,
		'--ui-color-warning': theme.colors.warning,
		'--ui-color-error': theme.colors.error,
		'--ui-color-surface': theme.colors.surface,
		'--ui-color-on-surface': theme.colors.onSurface,
		'--ui-color-border': theme.colors.border,
		'--ui-radius': theme.radius,
		'--ui-font-family': theme.fontFamily
	};
}
