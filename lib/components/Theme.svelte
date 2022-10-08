<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Cookies from 'js-cookie';

  import dark from '$slib/images/dark.png';
  import light from '$slib/images/light.png';

  import { theme } from '$slib/stores/theme_store';
  import { LIGHT, DARK, COOKIE_KEY_THEME } from '$slib/utils';

  let val = LIGHT;
  onMount(() => {
    val = Cookies.get(COOKIE_KEY_THEME) || LIGHT;
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
