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
        class="fixed left-0 top-0 z-10 w-screen h-screen bg-ox/60 flex justify-center items-center"
        on:click={onClose}
    >
        <div
            class="w-[730px] border-0 bg-dove p-8 rounded-2xl shadow-float"
            on:click={(event) => event.stopPropagation()}
        >
            <div class="flex items-center mb-6">
                <slot name="title" />
                
                <div class="ml-auto -mr-4 -mt-4">
                    <IconButton
                        variant="secondary"
                        size="sm"
                        onClick={() => onClose()}>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" class="fill-ox" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.42093 4.25L8.76468 1.90625C9.06937 1.625 9.06937 1.15625 8.76468 0.875L8.24905 0.359375C7.9678 0.0546875 7.49905 0.0546875 7.2178 0.359375L4.87405 2.70312L2.50687 0.359375C2.22562 0.0546875 1.75687 0.0546875 1.47562 0.359375L0.959992 0.875C0.655305 1.15625 0.655305 1.625 0.959992 1.90625L3.30374 4.25L0.959992 6.61719C0.655305 6.89844 0.655305 7.36719 0.959992 7.64844L1.47562 8.16406C1.75687 8.46875 2.22562 8.46875 2.50687 8.16406L4.87405 5.82031L7.2178 8.16406C7.49905 8.46875 7.9678 8.46875 8.24905 8.16406L8.76468 7.64844C9.06937 7.36719 9.06937 6.89844 8.76468 6.61719L6.42093 4.25Z"/>
                        </svg>
                    </IconButton>
                </div>
            </div>

            <slot />
        </div>
    </div>
{/if}
