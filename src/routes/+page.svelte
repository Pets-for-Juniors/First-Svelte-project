<script lang="ts">
	import ContactUsSection from '$lib/components/ContactUsSection.svelte';
	import Header from '$lib/components/Header.svelte';
	import InfoSection from '$lib/components/InfoSection.svelte';
	import Main from '$lib/components/Main.svelte';
	import Promo from '$lib/components/Promo.svelte';
</script>

<Header />

<Main>
	<Promo />
	<ContactUsSection />
	<InfoSection />
</Main>

<style lang="scss"></style>
