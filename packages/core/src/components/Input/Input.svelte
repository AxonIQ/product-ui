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
        height: 26px;
        border: 1px solid colors.$elephant;
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
        width: 100%;
        padding-left: 7px;

        font-size: 14px;
        font-family: 'Lato', sans-serif;
        line-height: 24px;

        &:focus-visible {
            outline: 0;
        }
    }
</style>