<script lang="ts">

    export let disabled = false;
    export let variant: "primary" | "secondary" = "primary";
    export let onClick: () => void = () => {};
    export let type: 'button' | 'submit' = 'button';
    
</script>

<button
    class="button"
    class:button-primary={variant === "primary"}
    class:button-secondary={variant === "secondary"}
    {type}
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
        @apply min-h-[36px] min-w-[130px] rounded-full normal-case text-base px-4 disabled:pointer-events-none disabled:opacity-50 shadow-float;
    }
    .button-primary {
        @apply bg-peacock text-dove hover:opacity-75 active:opacity-50;
    }
    .button-secondary {
        @apply bg-seal text-ox gdark:bg-ox gdark:text-dove;
    }
</style>