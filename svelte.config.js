import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess({
			scss: {
				includePaths: ['src/styles']
			},
			typescript: true
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: path.resolve('src/lib'),
			$routes: path.resolve('src/routes'),
			$styles: path.resolve('src/styles'),
			$api: path.resolve('src/api')
		}
	}
};

export default config;
