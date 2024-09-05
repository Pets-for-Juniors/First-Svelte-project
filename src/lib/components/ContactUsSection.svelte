<script lang="ts">
	import PopupContact from './PopupContact.svelte';

	let isPopupContactOpen = false;

	function handleButtonClick() {
		isPopupContactOpen = true;
	}

	function closePopupContact() {
		isPopupContactOpen = false;
	}
</script>

<section class="contactUs">
	<div class="wrapper">
		<h2 class="title">По всем вопросам - связывайтесь с нами:</h2>
		<button class="button" type="button" on:click={handleButtonClick}
			>Перейти к заполнению формы</button
		>
	</div>
	<PopupContact {isPopupContactOpen} onClose={closePopupContact} />
</section>

<style lang="scss">
	.contactUs {
		display: flex;
		flex-direction: column;

		align-items: center;

		width: 100%;
		height: 100%;

		padding: 45px 0 150px 0;

		background-color: var(--red);
	}

	.wrapper {
		display: flex;
		flex-direction: column;

		width: 100%;
		max-width: var(--section-max-width);

		align-items: center;
	}

	.title {
		width: 100%;
		max-width: 893px;

		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--extra-large-text);
		letter-spacing: var(--extra-large-text-letter-spacing);
		color: var(--amber);

		text-align: center;

		text-shadow: 4px 8px 4px rgb(0, 0, 0, 0.5);
	}

	.button {
		margin-top: 93px;
		padding: 12px 34px;

		font-family: RubikMonoOne-Regular, sans-serif;
		font-size: var(--small-text);
		letter-spacing: var(--small-text-letter-spacing);
		color: var(--white);

		border: none;
		border-radius: var(--border-radius-button);

		background-color: var(--turquoise);

		&:hover {
			cursor: pointer;
		}
	}
</style>
