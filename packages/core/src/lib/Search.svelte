<script lang="ts">
    export let placeholder = '';
    export let value = '';
    export let disabled = false;
</script>
<div class="relative">
    <input
        class="search border border-solid border-elephant dark:bg-ox dark:text-dove py-1 px-2 focus:outline-none text-sm w-full shadow"
        disabled={disabled}
        placeholder={placeholder}
        type="search"
        bind:value={value}
    />
    <button class="border-0 bg-transparent p-0 w-6 h-6 cursor-pointer absolute top-1/2 right-1 -translate-y-1/2 fill-dove" on:click={() => value = ''}>
        <svg
            class="fill-inherit"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42093 4.25L8.76468 1.90625C9.06937 1.625 9.06937 1.15625 8.76468 0.875L8.24905 0.359375C7.9678 0.0546875 7.49905 0.0546875 7.2178 0.359375L4.87405 2.70312L2.50687 0.359375C2.22562 0.0546875 1.75687 0.0546875 1.47562 0.359375L0.959992 0.875C0.655305 1.15625 0.655305 1.625 0.959992 1.90625L3.30374 4.25L0.959992 6.61719C0.655305 6.89844 0.655305 7.36719 0.959992 7.64844L1.47562 8.16406C1.75687 8.46875 2.22562 8.46875 2.50687 8.16406L4.87405 5.82031L7.2178 8.16406C7.49905 8.46875 7.9678 8.46875 8.24905 8.16406L8.76468 7.64844C9.06937 7.36719 9.06937 6.89844 8.76468 6.61719L6.42093 4.25Z"/>
        </svg>
    </button>
</div>
<style lang="scss">
    .search {
        &::-webkit-search-cancel-button {
            display: none;
        }
    }
</style>