<script lang="ts">

    export let size: 'sm' | 'md' = 'md'
    export let disabled = false;
    export let variant: "primary" | "secondary" = "primary";
    export let onClick: () => void = () => {};
    
</script>

<button
    class="btn shadow"
    class:btn-primary={variant === "primary"}
    class:btn-secondary={variant === "secondary"}
    class:btn-sm={size === 'sm'}
    class:btn-disabled={disabled}
    {disabled}
    on:click={() => onClick()}>
        <div class="font-bold text-center">
            {#if disabled}
                <span class="opacity-50">
                    <slot />
                </span>
            {:else}
                <slot />
            {/if}
        </div>
</button>

<style lang="scss">
    .btn {
        @apply rounded-full min-h-0 normal-case text-base px-7;
        height: 36px;
        &.btn-sm {
            @apply text-sm px-3;
            height: 24px;
        }
        &.btn-primary.btn-disabled {
            @apply bg-primary-disabled border-primary-disabled shadow-none text-dove;
        }
        &.btn-secondary.btn-disabled {
            @apply bg-secondary-disabled border-secondary-disabled shadow-none text-ox;
        }
    }
</style>