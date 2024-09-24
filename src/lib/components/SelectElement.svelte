<script lang="ts">
	export let name: string;
	export let options: any[] = [];
	export let nameField: string;
	export let selected: string | undefined;
	export let onChange: (value: string | undefined) => void = () => {};
</script>

<div class="selectWrapper">
	<select class="select" {name} bind:value={selected} on:change={() => onChange(selected)}>
		<option value={undefined}>{name}</option>
		{#each options as option}
			<option value={JSON.stringify(option)}>{option[nameField]}</option>
		{/each}
	</select>
</div>

<style lang="scss">
	.selectWrapper {
		position: relative;

		&::after {
			content: '';
			width: 18px;
			height: 16px;

			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 9px;

			background-image: url('../assets/images/arrow.png');
			background-position: center;
			background-repeat: no-repeat;
		}
	}

	.select {
		width: 236px;
		height: 100%;
		padding: 24px 0 24px 13px;

		font-family: Inter-Regular, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);

		background-color: var(--red);

		border: none;
		border-radius: var(--border-radius-button);
		appearance: none;

		&:hover {
			cursor: pointer;
		}

		&:focus {
			outline: 5px solid rgb(76, 184, 67);
		}
	}
</style>
