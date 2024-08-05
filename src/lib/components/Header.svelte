<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { createEventDispatcher } from 'svelte';
	import MainButton from './_ui/MainButton.svelte';
	import HeaderNav from './HeaderNav.svelte';

	const dispatch = createEventDispatcher();

	function handleButtonClick() {
		dispatch('openPopupHelp');
	}
</script>

<header class="header">
	<div class="logoContainer">
		<img class="logo" src={logo} alt="Логотип приюта Петс" />
	</div>
	<MainButton text="Помогаю!" on:click={handleButtonClick} />
	<HeaderNav />
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

	.logoContainer {
		width: 145px;
		height: 83.65px;
		position: relative;
		overflow: hidden;
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
