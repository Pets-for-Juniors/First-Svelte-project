<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import PopupHelp from '$lib/components/PopupHelp.svelte';
	import MainButton from './_ui/MainButton.svelte';
	import HeaderNav from './HeaderNav.svelte';

	let isPopupHelpOpen = false;

	function handleButtonClick() {
		isPopupHelpOpen = true;
	}

	function closePopupHelp() {
		isPopupHelpOpen = false;
	}
</script>

<header class="header">
	<div class="wrapper">
		<div class="logoContainer">
			<img class="logo" src={logo} alt="Логотип приюта Петс" />
		</div>
		<MainButton text="Помогаю!" on:click={handleButtonClick} />
	</div>
	<HeaderNav />
	<PopupHelp {isPopupHelpOpen} onClose={closePopupHelp} />
</header>

<style lang="scss">
	.header {
		width: 100%;
		max-width: var(--section-max-width);
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 45px 0;

		z-index: 10;
	}

	.wrapper {
		display: flex;
	}

	.logoContainer {
		width: 145px;
		height: 83.65px;
		position: relative;
		overflow: hidden;

		margin-right: 79px;
	}

	.logo {
		width: 127px;
		height: 75px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition:
			width 0.3s ease,
			height 0.3s ease;

		&:hover {
			width: 145px;
			height: 83.65px;
		}
	}
</style>
