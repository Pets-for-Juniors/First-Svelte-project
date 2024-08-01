<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let text: string;
	export let onClick: () => void;

	const dispatch = createEventDispatcher();

	function handleClick() {
		if (onClick) {
			onClick();
		}
		dispatch('click');
	}
</script>

<button class="button" on:click={handleClick}>
	<div class="text-container">
		{#each text.split('') as letter, index}
			<span class="letter" style="animation-delay: {index * 0.1}s">{letter}</span>
		{/each}
	</div>
</button>

<style lang="scss">
	.button {
		width: fit-content;
		padding: 22px 44px;
		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--medium-text);
		text-shadow: 0 4px 4px var(--shadow);
		color: var(--white);
		background-color: var(--green);
		border: none;
		border-radius: 15px;
		cursor: pointer;
		overflow: hidden;
		position: relative;
		transition: transform 0.1s ease;

		&:active {
			transform: translateY(10px);
		}

		&:focus {
			outline: none;
		}
	}

	.text-container {
		display: flex;
		flex-wrap: nowrap;
	}

	.letter {
		display: inline-block;
		margin-right: calc(var(--medium-text) * 0.08);
		transition: transform 0.3s ease;
	}

	.button:hover .letter {
		animation: bounce 0.6s ease-in-out;
	}

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
</style>
