<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import { BLANK, LIGHT, storageTheme } from '$slib/utils';
  import { theme } from '$slib/stores/theme_store';
  export let url, title, data;

  let themeValue = LIGHT;

  onMount(() => {
    if (browser) {
      theme.subscribe((newval) => {
        themeValue = newval;
      });

      themeValue = localStorage.getItem(storageTheme) || LIGHT;
    }
  });
</script>

<div class="section {themeValue}">
  <h3>
    {#if url}
      <a href={url} target={BLANK}>
        <div>{title}</div>
      </a>
    {:else}
      <div>{title}</div>
    {/if}
  </h3>
  <div>
    {#each data as paragraph}
      <p>
        {@html paragraph}
      </p>
    {/each}
  </div>
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
    border-bottom: 1px solid black;
  }

  .dark-theme h3 div {
    border-bottom: 1px solid white;
  }

  .section h3 div:hover {
    border-color: rgba(218, 0, 0, 1);
  }

  .section div {
    padding-left: 5px;
  }
</style>
