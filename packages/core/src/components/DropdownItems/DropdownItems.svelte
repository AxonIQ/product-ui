<script lang="ts">
  export let value: string;
</script>

<select bind:value class="select min-h-[42px] bg-dove w-full cursor-pointer border border-solid border-elephant py-2 px-2 focus:outline-none text-sm">
  <slot />
</select>
<style lang="scss">
  .select {
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  }
</style>