<script lang="ts">
    import Typography from "../Typography/Typography.svelte";
    
        export let href = '';
        export let target = '';
        export let size: 's' | 'm' | 'l' | 'xl' = 'm';
        export let text: string;
    </script>
    
    <a
        class="link"
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
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                text-decoration-color: colors.$elephant;
                text-decoration-thickness: 1px;
                text-underline-offset: 7px;
            }
        }
    </style>