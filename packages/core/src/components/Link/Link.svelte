<script lang="ts">
    import Typography from "../Typography/Typography.svelte";
    
        export let href = '';
        export let target = '';
    </script>
    
    <a
        class="link"
        {href}
        {target}>
        <Typography
            center
            color="rhino"
            size="s">
                <slot />
        </Typography>
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