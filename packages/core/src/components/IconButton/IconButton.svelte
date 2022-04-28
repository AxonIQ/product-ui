<script lang="ts">
    export let variant: "primary" | "secondary" | "accent" = "primary";
    export let onClick: () => void = () => {};
    export let disabled = false;
    export let size: "sm" | "md" = "md";
    
</script>

<button
    class="icon-button group-hover:opacity-75"
    class:icon-button-md={size === 'md'}
    class:icon-button-sm={size === 'sm'}
    class:icon-button-primary={variant === 'primary'}
    class:icon-button-secondary={variant === 'secondary'}
    class:icon-button-accent={variant === 'accent'}
    disabled={disabled}
    on:click={() => onClick()}>
        <div class:opacity-50={disabled}>
            <slot />
        </div>
</button>
<style lang="scss">
    .icon-button {
        @apply rounded-full flex items-center justify-center border-none hover:opacity-75 disabled:bg-opacity-40 disabled:hover:opacity-100;
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
    }
    .icon-button-md {
        @apply w-12 h-12;
    }
    .icon-button-sm {
        @apply w-9 h-9;
    }
    .icon-button-accent {
        @apply bg-fox text-dove;
    }
    .icon-button-primary {
        @apply bg-peacock text-dove;
    }
    .icon-button-secondary {
        @apply bg-seal text-ox;
    }
</style>
