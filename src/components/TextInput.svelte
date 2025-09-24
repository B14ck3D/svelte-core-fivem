<script lang="ts">
  export let value: string = '';
  export let placeholder: string = '';
  export let label: string = '';
  export let type: 'text' | 'password' | 'number' = 'text';
  export let disabled: boolean = false;
  export let name: string | null = null;
  export let id: string | null = null;
  export let onEnter: ((v: string) => void) | null = null;

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') onEnter?.(value);
  }
</script>

<label class="ui-input__wrap">
  {#if label}
    <span class="ui-input__label">{label}</span>
  {/if}
  {#if type === 'text'}
  <input
    class="ui-input"
    bind:value
    {placeholder}
    type="text"
    {disabled}
    {name}
    {id}
    on:keydown={onKeydown}
  />
  {:else if type === 'password'}
  <input
    class="ui-input"
    bind:value
    {placeholder}
    type="password"
    {disabled}
    {name}
    {id}
    on:keydown={onKeydown}
  />
  {:else}
  <input
    class="ui-input"
    bind:value
    {placeholder}
    type="number"
    {disabled}
    {name}
    {id}
    on:keydown={onKeydown}
  />
  {/if}
</label>

<style>
  .ui-input__wrap { display: grid; gap: 6px; }
  .ui-input__label { font-size: 12px; opacity: 0.85; }
  .ui-input {
    padding: 10px 12px; border-radius: var(--ui-radius);
    background: var(--ui-color-surface); color: var(--ui-color-on-surface);
    border: 1px solid var(--ui-color-border);
    outline: none;
  }
  .ui-input:focus { border-color: var(--ui-color-primary); box-shadow: 0 0 0 2px color-mix(in oklab, var(--ui-color-primary) 30%, transparent); }
</style>


