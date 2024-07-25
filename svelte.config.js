import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			scss: {
				includePaths: ['src/styles']
			}
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$api: 'src/api',
			$assets: 'src/assets',
			$constants: 'src/constants',
			$types: 'src/types',
			$utils: 'src/utils',
			$ui: 'src/ui'
		}
	}
};

export default config;
