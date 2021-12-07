<script lang="ts">
    export let variant: "primary" | "secondary" | "accent" = "primary";
    export let onClick: () => void = () => {};
    export let disabled = false;
    export let size: "sm" | "md" = "md";
    
</script>

<button
    class="btn btn-circle border-none"
    class:btn-sm={size === 'sm'}
    class:btn-primary={variant === 'primary'}
    class:btn-secondary={variant === 'secondary'}
    class:btn-accent={variant === 'accent'}
    class:btn-disabled={disabled}
    disabled={disabled}
    on:click={() => onClick()}>
        <div class:opacity-50={disabled}>
            <slot />
        </div>
</button>
<style lang="scss">
    .btn-disabled {
        @apply shadow-none;
        &.btn-primary {
            @apply bg-primary-disabled text-dove;
        }
        &.btn-secondary {
            @apply bg-secondary-disabled text-ox;
        }
        &.btn-accent {
            @apply bg-accent-disabled text-ox;
        }
    }
</style>
