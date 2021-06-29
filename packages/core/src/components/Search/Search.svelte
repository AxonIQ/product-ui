<script lang="ts">
    export let placeholder = '';
    export let value = '';
    export let disabled = false;
</script>
<div class="search-wrapper">
    <input
        class="search"
        disabled={disabled}
        placeholder={placeholder}
        type="search"
        bind:value={value}
    />
    <button class="search__clear" on:click={() => value = ''}>
        <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42093 4.25L8.76468 1.90625C9.06937 1.625 9.06937 1.15625 8.76468 0.875L8.24905 0.359375C7.9678 0.0546875 7.49905 0.0546875 7.2178 0.359375L4.87405 2.70312L2.50687 0.359375C2.22562 0.0546875 1.75687 0.0546875 1.47562 0.359375L0.959992 0.875C0.655305 1.15625 0.655305 1.625 0.959992 1.90625L3.30374 4.25L0.959992 6.61719C0.655305 6.89844 0.655305 7.36719 0.959992 7.64844L1.47562 8.16406C1.75687 8.46875 2.22562 8.46875 2.50687 8.16406L4.87405 5.82031L7.2178 8.16406C7.49905 8.46875 7.9678 8.46875 8.24905 8.16406L8.76468 7.64844C9.06937 7.36719 9.06937 6.89844 8.76468 6.61719L6.42093 4.25Z" fill="#434A56"/>
        </svg>
    </button>
</div>
<style lang="scss">
    @use "../../../stylesheets/colors.scss";

    .search-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
    }
    .search {
        height: 26px;
        border: 1px solid colors.$elephant;
        box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
        width: 100%;
        padding-left: 7px;

        &:focus-visible {
            outline: 0;
        }

        &::-webkit-search-cancel-button {
            display: none;
        }
    }
    .search__clear {
        border: 0;
        background-color: transparent;
        padding: 0;
        width: 24px;
        height: 24px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
    }
</style>