<script lang="ts">
    import { Button,Link } from '@axoniq-product-ui/core';
    import { rootUrl } from '../services/rootUrl';
    import { userSelection } from "../userSelectionStore";
    import ActionFooterShareDialog from "./ActionFooterShareDialog.svelte";
import DividerVertical from './DividerVertical.svelte';
import IconFacebook from './IconFacebook.svelte';
import IconGithub from './IconGithub.svelte';
import IconLinkedin from './IconLinkedin.svelte';
import IconTwitter from './IconTwitter.svelte';
import IconYoutube from './IconYoutube.svelte';

let shareVisible = false;

const defaultHeaders = new Headers();
defaultHeaders.append("Content-Type", "application/zip");
defaultHeaders.append("Content-Disposition", "attachment");

async function download() {
    const fileLink = document.createElement('a');
    fileLink.href = `${rootUrl}starter.zip?${new URLSearchParams($userSelection).toString()}`;
    fileLink.click();
}

</script>
    <div class="py-2 mb-8">
        <div class="max-w-screen-lg mx-auto flex items-center gap-10 px-4 xl:px-0">
            <Button
                onClick={() => download()}
            >Download</Button>
            <Button
                onClick={() => shareVisible = true}
                variant="secondary"
            >Share</Button>
        </div>
    </div>
    <div class="mb-2">
        <div class="max-w-screen-lg mx-auto flex justify-between items-center gap-4 px-4 xl:px-0">
            <div class="flex gap-6 text-sm">
                <div class="text-sm">AxonIQ © 2021</div>
                <Link href="https://docs.axoniq.io/reference-guide/" target="_blank" variant="secondary">
                    Axon Reference Guide
                </Link>
                <Link href="https://academy.axoniq.io/" target="_blank" variant="secondary">
                    AxonIQ Academy
                </Link>
                <Link href="https://discuss.axoniq.io/" target="_blank" variant="secondary">
                    AxonIQ Discuss
                </Link>
                <Link href="https://axoniqio.cdn.prismic.io/axoniqio%2Fdc52fae5-3e71-46d1-9bb5-29eb89485294_general+conditions+axoniq_1.0.1.docx-2.pdf" target="_blank" variant="secondary">
                    General Conditions
                </Link>
                <Link href="https://axoniq.io/resources/privacy" target="_blank" variant="secondary">
                    Privacy Policy
                </Link>
            </div>

            <DividerVertical />
                
            <div class="flex gap-5">

                <Link href="https://www.youtube.com/AxonIQ" target="_blank">
                    <IconYoutube />
                </Link>

                <Link href="https://www.linkedin.com/company/axoniq/" target="_blank">
                    <IconLinkedin />
                </Link>

                <Link href="https://www.facebook.com/AxonIQ.io/" target="_blank">
                    <IconFacebook />
                </Link>

                <Link href="https://twitter.com/axon_iq" target="_blank">
                    <IconTwitter />
                </Link>
                
                <Link href="https://github.com/AxonIQ" target="_blank">
                    <IconGithub />
                </Link>
            </div>
        </div>
    </div>
    
    <ActionFooterShareDialog bind:visible={shareVisible}/>
    