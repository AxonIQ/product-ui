<script lang="ts">
  export let value: string;
</script>

<select bind:value class="shadow min-h-[42px] bg-dove w-full cursor-pointer border border-solid border-elephant py-2 px-2 focus:outline-none text-sm">
  <slot />
</select>
