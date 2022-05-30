/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface Locals {
		token?: string | null,
		payload?: any
	}
	// interface Platform {}
	interface Session {
		token?: string,
		userId?: string,
		externalUserId?: string,
		email?: string,
		roles?: string[],
	}
	// interface Stuff {}
}
