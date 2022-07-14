<script lang="ts">
  export let value: string;
  export let hidden: boolean;
</script>
<option
  {hidden}
  {value}
>
  <slot />
</option>
