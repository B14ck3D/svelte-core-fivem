<script lang="ts">
  import { toasts, remove, type Snack } from '../stores/snackbar';
  export let position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
</script>

<div class={`ui-snackbar ${position}`}>
  {#each $toasts as s (s.id)}
    <div class={`snack ${s.type}`}>
      <span>{s.message}</span>
      <button class="close" on:click={() => remove(s.id)}>×</button>
    </div>
  {/each}
</div>

<style>
  .ui-snackbar { position: fixed; z-index: 1100; display: grid; gap: 8px; }
  .ui-snackbar.top-right { top: 16px; right: 16px; }
  .ui-snackbar.top-left { top: 16px; left: 16px; }
  .ui-snackbar.bottom-right { bottom: 16px; right: 16px; }
  .ui-snackbar.bottom-left { bottom: 16px; left: 16px; }
  .snack { display: inline-flex; gap: 8px; align-items: center; padding: 10px 12px; border-radius: var(--ui-radius); background: var(--ui-color-surface); color: var(--ui-color-on-surface); border: 1px solid var(--ui-color-border); box-shadow: 0 6px 24px rgba(0,0,0,0.25); }
  .snack.success { border-color: var(--ui-color-success); }
  .snack.warning { border-color: var(--ui-color-warning); }
  .snack.error { border-color: var(--ui-color-error); }
  .snack.info { border-color: var(--ui-color-primary); }
  .close { background: transparent; border: 0; color: inherit; font-size: 16px; cursor: pointer; opacity: 0.8; }
</style>


