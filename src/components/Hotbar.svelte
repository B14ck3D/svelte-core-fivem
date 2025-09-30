<script lang="ts">
	type HotbarItem = { slot: number; label?: string; icon?: string };
	export let items: HotbarItem[] = [];
	export let selected: number | null = null;
</script>

<div class="ui-hotbar">
	{#each items as item}
		<div class={`slot ${selected === item.slot ? 'selected' : ''}`}>
			<span class="num">{item.slot}</span>
			{#if item.icon}<span class="icon">{item.icon}</span>{/if}
			{#if item.label}<span class="label">{item.label}</span>{/if}
		</div>
	{/each}
</div>

<style>
	.ui-hotbar { display: flex; gap: 8px; }
	.slot {
		min-width: 56px; padding: 8px; border-radius: var(--ui-radius);
		background: var(--ui-color-surface); border: 1px solid var(--ui-color-border);
		color: var(--ui-color-on-surface); display: grid; place-items: center; gap: 4px;
	}
	.slot.selected { outline: 2px solid var(--ui-color-primary); }
	.num { font-size: 12px; opacity: 0.8; }
	.label { font-size: 12px; opacity: 0.95; }
</style>
