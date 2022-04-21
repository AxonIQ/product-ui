<script lang="ts">
    export let placeholder = '';
    export let value = '';
    export let disabled = false;
</script>
<input
    class="input"
    disabled={disabled}
    placeholder={placeholder}
    bind:value={value}
/>
<style lang="scss">
    @use "../../../stylesheets/colors.scss";

    .input {
        @apply border border-solid border-elephant py-1 px-2 focus:outline-none text-sm w-full;
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
    }
</style>