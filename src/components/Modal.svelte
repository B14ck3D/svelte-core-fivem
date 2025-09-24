<script lang="ts">
	export let open: boolean = false;
	export let title: string = '';

	function onBackdropClick(e: MouseEvent) {
		if ((e.target as HTMLElement)?.dataset?.backdrop === '1') {
			open = false;
		}
	}
</script>

{#if open}
	<div class="ui-modal-backdrop" data-backdrop="1" role="presentation" on:click={onBackdropClick}>
		<div class="ui-modal" role="dialog" aria-modal="true" aria-label={title}>
			{#if title}
				<header class="ui-modal__header">{title}</header>
			{/if}
			<section class="ui-modal__content"><slot /></section>
			<footer class="ui-modal__actions"><slot name="actions" /></footer>
		</div>
	</div>
{/if}

<style>
	.ui-modal-backdrop {
		position: fixed; inset: 0; background: rgba(0,0,0,0.5);
		display: grid; place-items: center;
		z-index: 1000;
	}
	.ui-modal {
		min-width: 320px;
		max-width: 90vw;
		background: var(--ui-color-surface);
		color: var(--ui-color-on-surface);
		border: 1px solid var(--ui-color-border);
		border-radius: var(--ui-radius);
		box-shadow: 0 20px 60px rgba(0,0,0,0.4);
		overflow: hidden;
	}
	.ui-modal__header { padding: 12px 16px; border-bottom: 1px solid var(--ui-color-border); font-weight: 600; }
	.ui-modal__content { padding: 16px; }
	.ui-modal__actions { padding: 12px 16px; border-top: 1px solid var(--ui-color-border); display: flex; gap: 8px; justify-content: flex-end; }
</style>
