<script lang="ts">
	export let hp: number = 100;
	export let hunger: number = 100;
	export let stamina: number = 100;

	function clamp(n: number) { return Math.max(0, Math.min(100, n)); }
</script>

<div class="ui-statusbar">
	<div class="seg">
		<span class="name">HP</span>
		<div class="track"><div class="bar" style={`width:${clamp(hp)}%; background:#e74c3c`}></div></div>
	</div>
	<div class="seg">
		<span class="name">Hunger</span>
		<div class="track"><div class="bar" style={`width:${clamp(hunger)}%; background:#f39c12`}></div></div>
	</div>
	<div class="seg">
		<span class="name">Stamina</span>
		<div class="track"><div class="bar" style={`width:${clamp(stamina)}%; background:#4CC9F0`}></div></div>
	</div>
</div>

<style>
	.ui-statusbar { display: grid; gap: 8px; width: 260px; }
	.seg { display: grid; gap: 4px; }
	.name { font-size: 11px; opacity: 0.8; }
	.track { height: 8px; border-radius: var(--ui-radius); background: rgba(255,255,255,0.08); border: 1px solid var(--ui-color-border); overflow: hidden; }
	.bar { height: 100%; transition: width 120ms ease-out; }
</style>
