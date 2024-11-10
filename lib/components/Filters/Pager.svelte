<script lang="ts">
  import { INLINE_CLASS } from '$slib/utils';

  interface Props {
    page?: number;
    showNext?: boolean;
  }

  let { page = 1, showNext = true }: Props = $props();
</script>

<div id="pagination">
  {#if page > 1}
    <div class="wrapper">
      <a class={INLINE_CLASS} href={`?page=${page - 1}`}>
        <div>Previous</div>
      </a>
    </div>
  {/if}
  {#if showNext}
    <div class="wrapper">
      <a class={INLINE_CLASS} href={`?page=${page + 1}`}>
        <div>Next</div>
      </a>
    </div>
  {/if}
</div>

<style scoped>
  #pagination {
    display: flex;
  }

  .wrapper {
    flex: 1;
    text-align: center;
  }
</style>
