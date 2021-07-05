<script lang="ts">
    import IconButton from "../IconButton/IconButton.svelte";

    export let open: boolean;
    export let onClose: () => void;
</script>

<svelte:window on:keydown={(event) => {
    if (!open) {
        return;
    }

    if (event.key === 'Escape') {
        onClose();
    }
}} />

{#if open}
    <div
        class="dialog__overlay"
        on:click={onClose}
    >
        <div
            class="dialog"
            on:click={(event) => event.stopPropagation()}
        >
            <div class="dialog__title">
                <slot name="title" />
                
                <div class="dialog__close-button">
                    <IconButton
                        color="seal"
                        size="s"
                        onClick={() => onClose()}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.42093 4.25L8.76468 1.90625C9.06937 1.625 9.06937 1.15625 8.76468 0.875L8.24905 0.359375C7.9678 0.0546875 7.49905 0.0546875 7.2178 0.359375L4.87405 2.70312L2.50687 0.359375C2.22562 0.0546875 1.75687 0.0546875 1.47562 0.359375L0.959992 0.875C0.655305 1.15625 0.655305 1.625 0.959992 1.90625L3.30374 4.25L0.959992 6.61719C0.655305 6.89844 0.655305 7.36719 0.959992 7.64844L1.47562 8.16406C1.75687 8.46875 2.22562 8.46875 2.50687 8.16406L4.87405 5.82031L7.2178 8.16406C7.49905 8.46875 7.9678 8.46875 8.24905 8.16406L8.76468 7.64844C9.06937 7.36719 9.06937 6.89844 8.76468 6.61719L6.42093 4.25Z" fill="#434A56"/>
                        </svg>
                    </IconButton>
                </div>
            </div>

            <slot />
        </div>
    </div>
{/if}

<style lang="scss">
    @use '../../../stylesheets/colors.scss';

    .dialog__title {
        display: flex;
        align-items: center; 
        margin-bottom: 24px;
    }
    .dialog__close-button {
        margin-left: auto;
        margin-right: -18px;
        margin-top: -18px;
    }
    .dialog__overlay {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;

        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog {
        width: 730px;
        border: 0;
        padding: 32px;
        background-color: colors.$seal;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4), 0px 5px 4px rgba(0, 0, 0, 0.1);
    }
</style>
