<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value: string;
  const dispatch = createEventDispatcher();
</script>

<select
  bind:value
  on:change
  class="shadow min-h-[42px] bg-dove dark:bg-ox dark:text-dove w-full cursor-pointer border border-solid border-elephant py-2 px-2 focus:outline-none text-sm"
  >
  <slot />
</select>
