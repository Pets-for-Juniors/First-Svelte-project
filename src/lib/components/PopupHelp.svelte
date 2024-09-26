<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { scale } from 'svelte/transition';
	import Overlay from './Overlay.svelte';

	export let isPopupHelpOpen: boolean;
	export let onClose: () => void;
</script>

{#if isPopupHelpOpen}
	<Overlay {onClose}>
		<div class="popup" transition:scale={{ duration: 300 }} on:click|stopPropagation>
			<p class="text">Спасибо за <span>интерес</span> к <span>нашему проекту!</span></p>
			<img class="img" src={logo} alt="Логотип приюта Петс" />
		</div>
	</Overlay>
{/if}

<style lang="scss">
	.popup {
		width: 100%;
		max-width: 1319px;
		max-height: 702px;
		margin: 100px auto;
		display: flex;
		flex-direction: column;
		position: relative;
		align-items: center;
		background: var(--white);
		border-radius: var(--border-radius-section);
		overflow: clip;
	}

	.text {
		width: 61%;
		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--extra-large-text);
		letter-spacing: var(--extra-large-text-letter-spacing);
		text-align: left;
		color: var(--amber);

		span:first-of-type {
			color: var(--turquoise);
		}

		span:last-of-type {
			color: var(--red);
		}
	}

	.img {
		width: 66%;
		height: 62%;
	}
</style>
