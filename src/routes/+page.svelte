<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import PopupHelp from '$lib/components/PopupHelp.svelte';
	import Promo from '$lib/components/Promo.svelte';
</script>

<Header />

<Main>
	<Promo />

	<PopupHelp isOpen={true} onClose={() => {}} />
</Main>
