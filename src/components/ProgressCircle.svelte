<script lang="ts">
export let value: number = 0;
export let max: number = 100;
export let size: number = 48;
export let stroke: number = 6;
export let color: string | null = null;

$: radius = (size - stroke) / 2;
$: circumference = 2 * Math.PI * radius;
$: pct = Math.max(0, Math.min(1, value / (max || 1)));
$: dash = circumference * pct;
$: gap = circumference - dash;
</script>

<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} class="ui-progress-circle">
	<circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.08)" stroke-width={stroke} fill="none" />
	<circle cx={size/2} cy={size/2} r={radius}
		stroke={color || 'var(--ui-color-primary)'} stroke-width={stroke}
		stroke-dasharray={`${dash} ${gap}`} stroke-linecap="round" fill="none"
		transform={`rotate(-90 ${size/2} ${size/2})`} />
</svg>
