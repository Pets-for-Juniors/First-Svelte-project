<script lang="ts">
	import FilterSection from '$lib/components/FilterSection.svelte';
	import Header from '$lib/components/Header.svelte';
	import InfoSection from '$lib/components/InfoSection.svelte';
	import Main from '$lib/components/Main.svelte';
	import Promo from '$lib/components/Promo.svelte';
</script>

<Header />

<Main>
	<Promo />
	<FilterSection />
	<InfoSection />
</Main>

<style lang="scss"></style>
