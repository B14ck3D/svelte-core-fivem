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

export const presetLight: Theme = {
	colors: {
		primary: '#3B82F6',
		success: '#16A34A',
		warning: '#D97706',
		error: '#DC2626',
		surface: '#ffffff',
		onSurface: '#111827',
		border: '#e5e7eb'
	},
	radius: '10px',
	fontFamily: 'Inter, system-ui, sans-serif'
};

export const presetDark: Theme = {
	colors: {
		primary: '#60A5FA',
		success: '#22C55E',
		warning: '#F59E0B',
		error: '#F87171',
		surface: '#0f1115',
		onSurface: '#e5e7eb',
		border: '#1f2430'
	},
	radius: '10px',
	fontFamily: 'Inter, system-ui, sans-serif'
};

export const serverPalettes = {
	red: {
		primary: '#ef4444',
		success: '#84cc16',
		warning: '#f59e0b',
		error: '#dc2626'
	},
	blue: {
		primary: '#3b82f6',
		success: '#22c55e',
		warning: '#f59e0b',
		error: '#ef4444'
	},
	purple: {
		primary: '#a855f7',
		success: '#10b981',
		warning: '#f59e0b',
		error: '#ef4444'
	}
} as const;