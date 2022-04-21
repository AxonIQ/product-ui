<script lang="ts">
    export let value = false;
    export let disabled = false;
</script>
<div class="flex items-center">
    <slot name="off-label"></slot>
    <label class="flex mx-2">
        <input
            class="toggle__input"
            type="checkbox"
            bind:checked={value}
            {disabled}
        >
        <span class="toggle__slider"></span>
    </label>
    <slot name="on-label"></slot>
</div>

<style lang="scss">
    /* Hide default HTML checkbox */
    .toggle__input {
        @apply opacity-0 w-0 h-0 m-0;
    }
    .toggle__input:focus-visible + .toggle__slider {
        @apply shadow-toggle-focus;
    }
    .toggle__input:checked + .toggle__slider:before {
        @apply translate-x-3;
    }
    /* The slider */
    .toggle__slider {
        // In Figma the width is 28px, and the height is 16px, because an outline is used instead of a border.
        // The border is 2px thick, so it needs at least 4px inside an element with box-sizing: border-box
        @apply cursor-pointer flex p-[2px] items-center w-[32px] h-[20px] text-rhino border-2 border-solid border-rhino rounded-full transition;
    }
    .toggle__slider:before {
        @apply w-[12px] h-[12px] content-[""] rounded-full transition shadow-[inset_10px_10px] shadow-rhino;
    }
</style>