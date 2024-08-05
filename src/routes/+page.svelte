<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import PopupHelp from '$lib/components/PopupHelp.svelte';
	import Promo from '$lib/components/Promo.svelte';

	let isOpen = false;

	const openPopupHelp = () => {
		isOpen = true;
	};

	const closePopupHelp = () => {
		isOpen = false;
	};
</script>

<Header on:openPopupHelp={openPopupHelp} />

<Main>
	<Promo />

	<PopupHelp {isOpen} onClose={closePopupHelp} />
</Main>

<style lang="scss"></style>
