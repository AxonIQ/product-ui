<script lang="ts">
    export let placeholder = '';
    export let value = '';
    export let disabled = false;
    export let label: string = '';
</script>
<label class="relative">
    <input
        class="border border-solid border-elephant px-2 focus:outline-none text-sm w-full py-2 shadow"
        disabled={disabled}
        placeholder={placeholder}
        bind:value={value}
    />
    {#if label.length > 0}
        <span class="absolute -top-2 left-1 text-sm bg-dove px-1 leading-none">{label}</span>
    {/if}
</label>
