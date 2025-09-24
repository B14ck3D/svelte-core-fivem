<script lang="ts">
	export let type: 'info' | 'success' | 'warning' | 'error' = 'info';
	export let message: string = '';
	export let icon: string | null = null;
</script>

<div class={`ui-notification ${type}`}>
	{#if icon}
		<span class="icon" aria-hidden="true">{icon}</span>
	{/if}
	<span class="text">{message}<slot /></span>
</div>

<style>
	.ui-notification {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 12px;
		border-radius: var(--ui-radius);
		background: var(--ui-color-surface);
		color: var(--ui-color-on-surface);
		border: 1px solid var(--ui-color-border);
		box-shadow: 0 6px 24px rgba(0,0,0,0.25);
		max-width: 90vw;
	}
	.ui-notification.success { border-color: var(--ui-color-success); }
	.ui-notification.warning { border-color: var(--ui-color-warning); }
	.ui-notification.error { border-color: var(--ui-color-error); }
	.ui-notification.info { border-color: var(--ui-color-primary); }

	.icon { opacity: 0.9; }
	.text { line-height: 1.2; }
</style>
