// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module 'svelte/elements' {
	export interface HTMLInputAttributes {
		'on:accept'?: Function;

		'on:complete'?: Function;
	}

	export interface HTMLTextareaAttributes {
		'on:accept'?: Function;

		'on:complete'?: Function;
	}
}

export {};
