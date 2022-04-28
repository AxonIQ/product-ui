<script>
import GradientDivider from "../GradientDivider/GradientDivider.svelte";
// import IconMoon from "../IconMoon/IconMoon.svelte";
// import IconSun from "../IconSun/IconSun.svelte";
// import Toggle from "../Toggle/Toggle.svelte";

let darkMode = false;
</script>

    <div class="bg-dove py-2">
        <div class="flex justify-between items-center max-w-screen-lg mx-auto">
            <a href="/">
                <img src="/assets/header-logo.png" alt="Logo" />
            </a>
            <!-- <Toggle bind:value={darkMode}>
                <IconSun slot="off-label" />
                <IconMoon slot="on-label" />
            </Toggle> -->
        </div>
    </div>
    <GradientDivider />
