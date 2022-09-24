<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import Cookies from 'js-cookie';
  import { BLANK, LIGHT, COOKIE_KEY_THEME } from '$slib/utils';
  import { theme } from '$slib/stores/theme_store';

  export let url = '';
  export let urlTarget: string = BLANK;
  export let title: string;

  let themeValue = LIGHT;

  onMount(() => {
    if (browser) {
      theme.subscribe((newval) => {
        themeValue = newval;
      });

      themeValue = Cookies.get(COOKIE_KEY_THEME) || LIGHT;
    }
  });
</script>

<div class="section {themeValue}">
  <h3>
    {#if url}
      <a href={url} target={urlTarget} sveltekit:prefetch>
        <div>{title}</div>
      </a>
    {:else}
      <div>{title}</div>
    {/if}
  </h3>
  <slot name="body" />
</div>

<style scoped lang="css">
  .section {
    padding: 20px 0;
    margin: 10px 0;
    padding: 10px 5px;
    padding-left: 15px;
    opacity: 1;
  }

  .section h3 {
    width: max-content;
  }

  .section h3 div {
    padding: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--text-color-light);
  }

  .dark-theme h3 div {
    border-bottom: 1px solid var(--text-color-dark);
  }

  .section h3 div:hover {
    border-color: var(--main-red);
  }

  .section div {
    padding-left: 5px;
  }
</style>
