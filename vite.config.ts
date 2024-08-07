import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// base: process.env.NODE_ENV === 'production' ? '/First-Svelte-project/' : '/'
	base: '/First-Svelte-project/'
});
