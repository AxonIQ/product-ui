<script>
import Logo from "src/components/Logo.svelte";
import {Button, Link} from "@axoniq-product-ui/core";

</script>
<div class="max-w-[1440px] mx-auto h-screen">
  <div class="h-full flex justify-center items-center gap-10">
    <Logo />
    <div class="flex flex-col gap-8 w-full">
      <h1 class="text-2xl font-light">Welcome to AxonIQ Cloud</h1>
      <hr class="w-full border-0 m-0 h-px bg-elephant"/>
      <div class="flex gap-4">
        <Button variant="secondary">
          <span class="font-black">Sign in with Google</span>
        </Button>
        <Button variant="secondary">
          <span class="font-black">Sign in with Github</span>
        </Button>
      </div>
      <div>
        No account yet? <Link href="#">Create account</Link>
      </div>
    </div>
  </div>
</div>