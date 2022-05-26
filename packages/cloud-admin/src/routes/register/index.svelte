<script>
  import Logo from "src/components/Logo.svelte";
  import {Button, Input, Link} from "@axoniq-product-ui/core";

  let form = {
    firstName: '',
    lastName: '',
    email: '',
    org: '',
    role: '',
  };
  
  </script>
  <div class="max-w-6xl px-5 mx-auto h-screen">
    <div class="h-full flex justify-center items-center gap-20">
      <Logo />
      <div class="flex flex-col gap-8 w-full">
        <h1 class="text-2xl font-light">Welcome to AxonIQ Cloud</h1>

        <hr class="w-full border-0 m-0 h-px bg-elephant"/>

        <h3 class="font-black text-2xl">Create account</h3>

        <form class="flex flex-col gap-8" on:submit|stopPropagation|preventDefault={() => console.log('submitting!', form)}>
          <Input label="First name" bind:value={form.firstName} />
          <Input label="Last name" bind:value={form.lastName} />
          <Input label="Email" bind:value={form.email} />
          <Input label="Organization" bind:value={form.org} />
          <Input label="Role in organization" bind:value={form.role} />

          <div class="flex gap-6 items-center justify-end">
            <Link href="/login">Back to sign in</Link>
            <Button type="submit" variant="secondary" onClick={() => fetch('/api/public/version')}>
              <span class="font-black flex gap-2 items-center">Confirm</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>