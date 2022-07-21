<script lang="ts">
  export let value: string;
  export let hidden = false;
</script>
<option
  {hidden}
  {value}
>
  <slot />
</option>
