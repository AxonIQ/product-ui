<script lang="ts">
    import Typography from "../Typography/Typography.svelte";
    
        export let href = '';
        export let target = '';
        export let size: 's' | 'm' | 'l' | 'xl' = 'm';
        export let text: string;
    </script>
    
    <a
        class="no-underline hover:underline visited:text-inherit link"
        {href}
        {target}>
        {#if text}
            <Typography
                center
                color="rhino"
                {size}>
                    {text}
            </Typography>
        {:else}
            <slot />    
        {/if}
    </a>
    
    <style lang="scss">
        @use "../../../stylesheets/colors.scss";
    
        .link {
            &:hover {
                text-decoration-color: colors.$elephant;
                text-decoration-thickness: 1px;
                text-underline-offset: 7px;
            }
        }
    </style>