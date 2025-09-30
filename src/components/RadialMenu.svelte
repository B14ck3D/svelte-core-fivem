<script lang="ts">
	type RadialItem = { id: string; label: string };
	export let open: boolean = false;
	export let items: RadialItem[] = [];
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{ select: string }>();

	// Geometry notes:
	// Each item is placed evenly on a circle. For item index i in N items,
	// angle = (i / N) * 360deg. We rotate to angle, translate by radius,
	// then rotate back to keep the label upright.
	const radius = 96;
</script>

{#if open}
	<div class="ui-radial">
		{#each items as item, i}
			<button class="entry"
				on:click={() => dispatch('select', item.id)}
				style={`transform: translate(-50%, -50%) rotate(${(i/items.length)*360}deg) translate(${radius}px) rotate(-${(i/items.length)*360}deg);`}>
				{item.label}
			</button>
		{/each}
		<div class="center"></div>
	</div>
{/if}

<style>
	.ui-radial { position: fixed; inset: 0; display: grid; place-items: center; pointer-events: none; }
	.entry {
		position: absolute; left: 50%; top: 50%; pointer-events: auto;
		background: var(--ui-color-surface); color: var(--ui-color-on-surface);
		border: 1px solid var(--ui-color-border); border-radius: var(--ui-radius);
		padding: 8px 10px; white-space: nowrap;
	}
	.center { width: 8px; height: 8px; border-radius: 999px; background: var(--ui-color-primary); }
</style>
