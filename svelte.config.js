import adapter from '@sveltejs/adapter-static';
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
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		}),
		alias: {
			$lib: path.resolve('src/lib'),
			$routes: path.resolve('src/routes'),
			$styles: path.resolve('src/styles'),
			$api: path.resolve('src/api')
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/First-Svelte-project' : ''
		},
		prerender: {
			handleMissingId: 'ignore' // Опции: 'ignore' или 'throw'
		}
	}
};

export default config;
