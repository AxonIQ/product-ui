<script lang="ts">

    export let size: 'sm' | 'md' = 'md'
    export let disabled = false;
    export let variant: "primary" | "secondary" = "primary";
    export let text: string;
    export let onClick: () => void = () => {};
    
</script>

<button
    class="btn"
    class:btn-primary={variant === "primary"}
    class:btn-secondary={variant === "secondary"}
    class:btn-sm={size === 'sm'}
    class:btn-disabled={disabled}
    on:click={() => onClick()}>
    <div>
    {#if text}
        <div class="font-bold text-center">
            {#if disabled}
                <span class="opacity-50">{text}</span>
            {:else}
                {text}
            {/if}
        </div>
    {:else}
        <slot />    
    {/if}
</button>

<style lang="scss">
    .btn {
        @apply rounded-full min-h-0 shadow normal-case text-base;
        height: 36px;
        &.btn-sm {
            @apply text-sm;
            height: 24px;
        }
        &.btn-primary.btn-disabled {
            @apply bg-primary-disabled border-primary-disabled;
        }
        &.btn-secondary.btn-disabled {
            @apply bg-secondary-disabled border-secondary-disabled shadow-none;
        }
    }
</style>