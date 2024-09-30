<script lang="ts">
	import { onMount } from 'svelte';

	export let onClose: () => void;

	const handleEscClose = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose();
		}
	};

	onMount(() => {
		document.addEventListener('keydown', handleEscClose);

		return () => {
			document.removeEventListener('keydown', handleEscClose);
		};
	});
</script>

<div
	class="overlay"
	on:mousedown={(e) => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	}}
>
	<slot></slot>
</div>

<style lang="scss">
	.overlay {
		position: fixed;
		z-index: 11;
		top: 0;
		left: 0;
		overflow: auto;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		width: 100%;
		height: 100vh;
		padding: 0;
		background-color: var(--shadow);
		visibility: visible;

		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
