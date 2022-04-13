<script lang="ts">

    export let disabled = false;
    export let variant: "primary" | "secondary" = "primary";
    export let onClick: () => void = () => {};
    
</script>

<button
    class="btn shadow"
    class:btn-primary={variant === "primary"}
    class:btn-secondary={variant === "secondary"}
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
    .btn {
        @apply h-[36px] rounded-full normal-case text-base px-7 disabled:pointer-events-none disabled:opacity-50;

        &.btn-primary {
            @apply bg-peacock text-dove hover:opacity-75 active:opacity-50;
        }
        &.btn-secondary {
            @apply bg-dove text-ox;
        }
    }
</style>