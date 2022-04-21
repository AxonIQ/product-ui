<script lang="ts">

    export let disabled = false;
    export let variant: "primary" | "secondary" = "primary";
    export let onClick: () => void = () => {};
    
</script>

<button
    class="button"
    class:button-primary={variant === "primary"}
    class:button-secondary={variant === "secondary"}
    {disabled}
    on:click={() => onClick()}>
        <div
            class="font-bold text-center"
            class:opacity-50={disabled}
        >
            <slot />
        </div>
</button>

<style lang="scss">
    .button {
        @apply h-[36px] w-[130px] rounded-full normal-case text-base px-4 disabled:pointer-events-none disabled:opacity-50 shadow;
    }
    .button-primary {
        @apply bg-peacock text-dove hover:opacity-75 active:opacity-50;
    }
    .button-secondary {
        @apply bg-dove text-ox;
    }
</style>