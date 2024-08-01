<script lang="ts">
	import logo from '$lib/assets/Header_animation_logo.svg';
	import MainButton from './_ui/MainButton.svelte';

	function handleButtonClick() {
		alert('Button clicked!');
	}
</script>

<header class="header">
	<img class="logo" src={logo} alt="pets logo" />
	<MainButton text="Помогаю!" onClick={handleButtonClick} />
</header>

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		background-color: inherit;
	}

	.logo {
		width: 127px;
		height: 75px;
		transition:
			width 0.3s ease,
			height 0.3s ease;
	}

	.logo:hover {
		width: 145px;
		height: 83.65px;
	}
</style>
