<script lang="ts">
  export let tags: Tag[] = [];
</script>

<div class="tag-group">
  {#each tags as tag, i}
    <a class="post-tag" href="/filter/tags/{tag.id}">
      <div class="tag-wrapper">
        {tag.tag_name}
      </div>
    </a>
  {/each}
</div>

<style scoped>
  .tag-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .tag-wrapper {
    color: white;
    background-color: var(--main-red);

    border-radius: 4px;
    padding: 0.25rem;

    margin-bottom: 0.5rem;
  }
  
  .tag-wrapper:hover {
    background-color: var(--main-red-button-hover);
  }
  
  .post-tag {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;

    margin-right: 0.375rem;
  }
</style>
