<script lang="ts">
  import { fade } from 'svelte/transition';
  import { cubicInOut as cubic } from 'svelte/easing';
  import Section from './Section.svelte';
  import Loader from '$slib/components/Loader.svelte';

  export let sections = [];
</script>

<div>
  {#each sections as section, i}
    <div in:fade={{ easing: cubic, duration: 700, delay: i * 75 }}>
      <Section {...section} />
    </div>
  {:else}
    <Loader />
  {/each}
</div>
