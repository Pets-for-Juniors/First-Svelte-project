<script lang="ts">
	import AboutTeamSection from '$lib/components/AboutTeamSection.svelte';
	import ContactUsSection from '$lib/components/ContactUsSection.svelte';
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
	<AboutTeamSection />
	<ContactUsSection />
</Main>

<style lang="scss"></style>
