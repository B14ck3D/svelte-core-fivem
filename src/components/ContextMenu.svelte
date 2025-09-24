<script lang="ts">
  type ContextItem = { id: string; label: string; disabled?: boolean };
  export let open: boolean = false;
  export let x: number = 0;
  export let y: number = 0;
  export let items: ContextItem[] = [];
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ select: string }>();
  function onClick(id: string, disabled?: boolean) {
    if (disabled) return;
    dispatch('select', id);
  }
</script>

{#if open}
  <div class="ui-context" style={`left:${x}px; top:${y}px`}>
    {#each items as it}
      <button class={`row ${it.disabled ? 'disabled' : ''}`} on:click={() => onClick(it.id, it.disabled)}>{it.label}</button>
    {/each}
  </div>
{/if}

<style>
  .ui-context { position: fixed; z-index: 1000; background: var(--ui-color-surface); color: var(--ui-color-on-surface); border: 1px solid var(--ui-color-border); border-radius: var(--ui-radius); overflow: hidden; min-width: 160px; }
  .row { display: block; width: 100%; text-align: left; padding: 8px 10px; border: 0; background: transparent; color: inherit; }
  .row:hover { background: color-mix(in oklab, var(--ui-color-primary) 12%, transparent); }
  .row.disabled { opacity: 0.6; pointer-events: none; }
</style>


