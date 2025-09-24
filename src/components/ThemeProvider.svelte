<script lang="ts">
	import type { Theme } from '../theme';
	import { defaultTheme, themeToCssVars } from '../theme';

	export let theme: Theme = defaultTheme;

	const vars = themeToCssVars(theme);
</script>

<div style={Object.entries(vars).map(([k,v]) => `${k}: ${v}`).join('; ')}>
	<style>
		:global(:root) {
			font-family: var(--ui-font-family);
		}
	</style>
	<slot />
</div>
