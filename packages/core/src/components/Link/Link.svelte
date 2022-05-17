<script lang="ts">
    export let href = '';
    export let target = '';
    export let variant: "primary" | "secondary" = "primary";
</script>

<a
    class:link-primary={variant === 'primary'}
    class:link-secondary={variant === 'secondary'}
    {href}
    {target}>
        <slot />
</a>
<style lang="scss">
    .link-primary {
        @apply text-peacock hover:opacity-80
    }
    .link-secondary {
        @apply text-rhino hover:decoration-elephant hover:underline hover:decoration-1 hover:underline-offset-4 visited:text-inherit gdark:text-dove
    }
</style>