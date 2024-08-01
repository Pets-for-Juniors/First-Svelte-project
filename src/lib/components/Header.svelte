<script lang="ts">
  import logo from '$lib/assets/Header_animation_logo.svg';
  import MainButton from './_ui/MainButton.svelte';

  function handleButtonClick() {
    alert('Button clicked!');
  }
</script>


<header class="header">
  <img src={logo} alt="pets logo" />
  <MainButton text="Помогаю!" onClick={handleButtonClick}/>
</header>


<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: inherit;
  }
</style>
