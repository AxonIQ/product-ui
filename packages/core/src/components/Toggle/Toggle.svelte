<script lang="ts">
    export let value = false;
    export let disabled = false;
</script>
<div>
    <label class="cursor-pointer label">
        <slot name="off-label"></slot>
        <input
            type="checkbox"
            class="toggle toggle-sm border-2 border-opacity-100 bg-ox" 
            class:toggle-disabled={disabled}
            {disabled}
            bind:checked={value}
        />
        <slot name="on-label"></slot>
    </label>
</div>

<style lang="scss">
    .label {
        @apply justify-start inline-flex gap-2;
    }
</style>