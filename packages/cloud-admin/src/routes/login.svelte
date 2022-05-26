<script>
import Logo from "src/components/Logo.svelte";
import {Button, Link} from "@axoniq-product-ui/core";
import IconGoogle from "src/components/IconGoogle.svelte";
import IconGithub from "src/components/IconGithub.svelte";

</script>
<div class="max-w-6xl px-5 mx-auto h-screen">
  <div class="h-full flex justify-center items-center gap-20">
    <Logo />
    <div class="flex flex-col gap-8 w-full">
      <h1 class="text-2xl font-light">Welcome to AxonIQ Cloud</h1>
      <div class="flex gap-4">
        <Button
          variant="secondary"
          onClick={() => window.location.href = '/oauth2/authorization/google'}>
          <span class="font-black flex gap-2 items-center"><IconGoogle/> Sign in with Google</span>
        </Button>
        <Button
          variant="secondary"
          onClick={() => window.location.href = '/oauth2/authorization/github'}>
          <span class="font-black flex gap-2 items-center"><IconGithub/> Sign in with Github</span>
        </Button>
      </div>
      <hr class="w-full border-0 m-0 h-px bg-elephant"/>
      <div>
        No account yet? <Link href="/register">Create account</Link>
      </div>
    </div>
  </div>
</div>