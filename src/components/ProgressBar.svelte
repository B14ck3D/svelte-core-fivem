<script lang="ts">
	export let value: number = 0;
	export let max: number = 100;
	export let color: string | null = null;
	const pct = () => Math.max(0, Math.min(100, (value / (max || 1)) * 100));
</script>

<div class="ui-progress">
	<div class="ui-progress__track">
		<div class="ui-progress__bar" style={`width:${pct()}%; ${color ? `background:${color}` : ''}`}></div>
	</div>
	<div class="ui-progress__label"><slot>{Math.round(pct())}%</slot></div>
</div>

<style>
	.ui-progress { display: grid; gap: 6px; }
	.ui-progress__track {
		height: 10px; background: rgba(255,255,255,0.08);
		border-radius: var(--ui-radius); overflow: hidden; border: 1px solid var(--ui-color-border);
	}
	.ui-progress__bar { height: 100%; background: var(--ui-color-primary); transition: width 120ms ease-out; }
	.ui-progress__label { font-size: 12px; opacity: 0.85; }
</style>
