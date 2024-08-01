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
	{text}
</button>

<style lang="scss">
	.button {
		width: fit-content;
		padding: 22px 44px;

		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--medium-text);
		letter-spacing: calc(var(--medium-text) * 0.08);
		color: var(--white);
		text-shadow: 0 4px 4px var(--shadow);

		background-color: var(--green);
		border: none;
		border-radius: 15px;
		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: #0056b3;
		}

		&:active {
			background-color: #004085;
		}

		&:focus {
			outline: none;
		}
	}
</style>
