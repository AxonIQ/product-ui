<script lang="ts">
    export let variant: "primary" | "secondary" | "accent" = "primary";
    export let onClick: () => void = () => {};
    export let disabled = false;
    export let size: "sm" | "md" = "md";
    
</script>

<button
    class="rounded-full flex items-center justify-center border-none hover:opacity-75 disabled:opacity-100"
    class:btn-md={size === 'md'}
    class:btn-sm={size === 'sm'}
    class:btn-primary={variant === 'primary'}
    class:btn-secondary={variant === 'secondary'}
    class:btn-accent={variant === 'accent'}
    disabled={disabled}
    on:click={() => onClick()}>
        <div class:opacity-50={disabled}>
            <slot />
        </div>
</button>
<style lang="scss">
    .btn-md {
        @apply w-12 h-12;
    }
    .btn-sm {
        @apply w-9 h-9;
    }
    .btn-accent {
        @apply bg-fox text-dove;
    }
    .btn-primary {
        @apply bg-peacock text-dove
    }
    .btn-secondary {
        @apply bg-dove text-ox
    }
</style>
