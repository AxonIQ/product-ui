<script lang="ts">
        export let href = '';
        export let target = '';
    </script>
    
    <a
        class="no-underline hover:underline visited:text-inherit link text-rhino"
        {href}
        {target}>
            <slot />
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