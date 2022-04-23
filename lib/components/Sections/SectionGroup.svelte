<script lang="ts">
  import { fade } from 'svelte/transition';
  import { cubicInOut as cubic } from 'svelte/easing';

  import Loader from '$slib/components/Loader.svelte';
  import Pager from '$slib/components/Filters/Pager.svelte';

  export let sections: Array<any> = [];
  export let noSections: boolean = true;
  export let lastPage: boolean = false;
  export let page: number = 1;

  export let Section: any;
</script>

<div>
  {#each sections as { id, ...section }, i (id)}
    <div in:fade={{ easing: cubic, duration: 700, delay: i * 75 }}>
      <svelte:component this={Section} {...section} />
    </div>
  {:else}
    {#if noSections}
      <div class="empty-message">
        <slot name="empty-list">No sections to display!</slot>
      </div>
    {:else}
      <Loader />
    {/if}
  {/each}

  <Pager {page} showNext={!lastPage} />
</div>

<style>
  .empty-message {
    padding-left: 1rem;
    padding-top: 2rem;
  }
</style>
