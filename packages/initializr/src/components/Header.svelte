<script>
import IconMoon from "./IconMoon.svelte";
import IconSun from "./IconSun.svelte";
import { Toggle } from '@axoniq-product-ui/core';
import HeaderLogo from "./HeaderLogo.svelte";

let darkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

$: {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}
</script>

<div class="container max-w-screen-lg mx-auto px-4 xl:px-0 py-2 flex justify-between items-center">
    <a href="/">
        <HeaderLogo />
    </a>
    <Toggle bind:value={darkMode}>
        <span class="fill-rhino dark:fill-dove" slot="off-label">
            <IconSun />
        </span>
        <span class="fill-rhino dark:fill-dove" slot="on-label">
            <IconMoon />
        </span>
    </Toggle>
</div>
<hr class="border-0 m-0 h-px bg-elephant"/>
