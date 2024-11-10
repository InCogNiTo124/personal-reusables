<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Cookies from 'js-cookie';
  import { BLANK, LIGHT, COOKIE_KEY_THEME } from '$slib/utils';
  import { theme } from '$slib/stores/theme_store';

  interface Props {
    url?: string;
    urlTarget?: string;
    title: string;
    body?: import('svelte').Snippet;
  }

  let {
    url = '',
    urlTarget = BLANK,
    title,
    body
  }: Props = $props();

  let themeValue = $state(LIGHT);

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
      <a href={url} target={urlTarget} data-sveltekit-prefetch>
        <div>{title}</div>
      </a>
    {:else}
      <div>{title}</div>
    {/if}
  </h3>
  {@render body?.()}
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
    border-bottom: 1px solid var(--text-color);
  }

  .dark-theme h3 div {
    border-bottom: 1px solid var(--text-color);
  }

  .section h3 div:hover {
    border-color: var(--main-red);
  }

  .section div {
    padding-left: 5px;
  }
</style>
