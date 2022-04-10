<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  import dark from '$slib/images/dark.png';
  import light from '$slib/images/light.png';

  import { theme } from '$slib/stores/theme_store';
  import { LIGHT, DARK, storageTheme } from '$slib/utils';

  let val = LIGHT;
  onMount(() => {
    val = localStorage.getItem(storageTheme) || LIGHT;
  });

  function toggleTheme() {
    if (browser) {
      val = val === LIGHT ? DARK : LIGHT;
      theme.set(val);
    }
  }
</script>

<img
  on:click={toggleTheme}
  src={val === LIGHT ? dark : light}
  alt="Toggle theme"
/>

<style scoped>
  img {
    cursor: pointer;
    height: 2rem;
  }
</style>
