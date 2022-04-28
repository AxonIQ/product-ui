<script lang="ts">

    export let value: string;
    export let group: string;
    export let name: string;
</script>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="flex items-center cursor-pointer">
        <input
            type="radio"
            class="opacity-0 w-0 h-0 m-0"
            {value}
            {name}
            bind:group={group}
        />
        <span class="design"></span>
        <slot />
    </label>

<style lang="scss">
    // Styling heavily inspired by https://www.tutorialstonight.com/custom-radio-button.php
    .design {
        @apply w-[10px] h-[10px] rounded-full outline-offset-[3px] outline outline-2 outline-ox mr-3 ml-[5px];
    }
    input[type="radio"]:checked~.design {
        @apply outline-ox bg-ox;
    }
    input[type="radio"]:focus-visible~.design {
        @apply shadow-radio-focus;
    }
</style>
