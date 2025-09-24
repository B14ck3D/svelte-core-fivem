<script lang="ts">
  type ListItem = { id: string | number; label: string; description?: string };
  export let items: ListItem[] = [];
  export let selectedId: string | number | null = null;
  export let onSelect: ((id: string | number) => void) | null = null;

  function handleClick(id: string | number) {
    selectedId = id;
    onSelect?.(id);
  }
</script>

<ul class="ui-list" role="listbox" aria-activedescendant={selectedId ? `item-${selectedId}` : undefined} tabindex="0" on:keydown={(e) => { if (e.key === 'Enter' && selectedId != null) onSelect?.(selectedId); }}>
  {#each items as item}
    <li id={`item-${item.id}`} class={`row ${selectedId === item.id ? 'selected' : ''}`} role="option" aria-selected={selectedId === item.id} on:click={() => handleClick(item.id)} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(item.id); }} tabindex="0">
      <div class="label">{item.label}</div>
      {#if item.description}
        <div class="desc">{item.description}</div>
      {/if}
    </li>
  {/each}
  <slot />
  </ul>

<style>
  .ui-list { display: grid; gap: 6px; padding: 0; margin: 0; list-style: none; }
  .row { padding: 10px 12px; border-radius: var(--ui-radius); border: 1px solid var(--ui-color-border); background: var(--ui-color-surface); color: var(--ui-color-on-surface); cursor: pointer; }
  .row.selected { outline: 2px solid var(--ui-color-primary); }
  .label { font-weight: 600; }
  .desc { opacity: 0.8; font-size: 12px; margin-top: 2px; }
  </style>


