import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [svelte(), dts({ insertTypesEntry: true, outDir: 'dist' })],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'fivem-ui-core',
			formats: ['es', 'cjs'],
			fileName: (format) => `fivem-ui-core.${format}.js`
		},
		rollupOptions: {
			external: ['svelte']
		}
	}
});
