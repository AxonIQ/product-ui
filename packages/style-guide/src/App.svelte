<script lang="ts">
	import Tailwindcss from '../../../Tailwindcss.svelte';

import { Colors, Button, Typography, Radio, IconButton, Toggle, Card, Input, Dialog, Search, Link } from '@axoniq-product-ui/core';

let group1 = "";
let group2 = "Java";
let group3 = "Snapshot";

let toggle1 = true;
let toggle2 = false;

let textExample = 'Please change me'
let searchExample = 'I am a filter'

let dialogOpen = false;
</script>

<Tailwindcss />

<main class="mx-auto p-2 bg-white">
	<div class="flex flex-wrap justify-center gap-10">
		<div class="w-48 h-48 bg-ox flex items-center justify-center text-dove">
			<div class="font-bold">Ox - #21252B</div>
		</div>
		<div class="w-48 h-48 bg-rhino flex items-center justify-center text-dove">
			<div class="font-bold">Rhino - #434A56</div>
		</div>
		<div class="w-48 h-48 bg-elephant flex items-center justify-center text-dove">
			<div class="font-bold">Elephant - #A1A4AA</div>
		</div>
		<div class="w-48 h-48 bg-seal flex items-center justify-center text-rhino">
			<div class="font-bold">Seal - #F5F6F6</div>
		</div>
		<div class="w-48 h-48 bg-dove flex items-center justify-center text-rhino">
			<div class="font-bold">Dove - #FFFFFF</div>
		</div>
		<div class="w-48 h-48 bg-fox flex items-center justify-center text-dove">
			<div class="font-bold">Fox - #F35C00</div>
		</div>
		<div class="w-48 h-48 bg-peacock flex items-center justify-center text-dove">
			<div class="font-bold">Peacock - #1374CF</div>

		</div>
	</div>

	<hr class="my-10"/>

	<div class="flex flex-col items-center">
		<div class="text-sm">Hello from small typography - 14px</div>
		<div class="text-sm font-bold">Hello from small typography - 14px</div>
		<div class="text-sm italic">Hello from small typography - 14px</div>
	</div>
	<hr class="my-10"/>
	<div class="flex flex-col items-center">
		<div>Hello from base typography - 16px</div>
		<div class="font-bold">Hello from base typography - 16px</div>
		<div class="italic">Hello from base typography - 16px</div>
	</div>
	<hr class="my-10"/>
	<div class="flex flex-col items-center">
		<div class="text-lg">Hello from large typography - 18px</div>
		<div class="text-lg font-bold">Hello from large typography - 18px</div>
		<div class="text-lg italic">Hello from large typography - 18px</div>
	</div>
	<hr class="my-10"/>
	<div class="flex flex-col items-center">
		<div class="text-xl">Hello from extra large typography - 24px</div>
		<div class="text-xl font-bold">Hello from extra large typography - 24px</div>
		<div class="text-xl italic">Hello from extra large typography - 24px</div>
	</div>
	<hr class="my-10"/>
	<div class="flex flex-col items-center">
		<div class="text-2xl">Hello from extra extra large typography - 24px</div>
		<div class="text-2xl font-bold">Hello from extra extra large typography - 24px</div>
		<div class="text-2xl italic">Hello from extra extra large typography - 24px</div>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto">
		<div class="flex gap-5 justify-center mb-5">
			<Button onClick={() => alert('Hello from a primary button')}>Use cases</Button>
			<Button disabled>Use cases</Button>
		</div>
		<div class="flex gap-5 justify-center mb-5">
			<Button onClick={() => alert('Hello from a secondary button')} variant="secondary">Use cases</Button>
			<Button variant="secondary" disabled>Use cases</Button>
		</div>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto text-center">
		<div>
			<Link>
				<span class="text-sm">Hello, I am a primary link</span>
			</Link>
		</div>
		<div>
			<Link>Hello, I am a primary link</Link>
		</div>
		<div>
			<Link>
				<span class="text-lg">Hello, I am a primary link</span>
			</Link>
		</div>
		<div>
			<Link>
				<span class="text-xl">Hello, I am a primary link</span>
			</Link>
		</div>

		<div>
			<Link variant="secondary">
				<span class="text-sm">Hello, I am a secondary link</span>
			</Link>
		</div>
		<div>
			<Link variant="secondary">Hello, I am a secondary link</Link>
		</div>
		<div>
			<Link variant="secondary">
				<span class="text-lg">Hello, I am a secondary link</span>
			</Link>
		</div>
		<div>
			<Link variant="secondary">
				<span class="text-xl">Hello, I am a secondary link</span>
			</Link>
		</div>
	</div>

	<hr class="my-10"/>

	<div class="container mx-auto max-w-screen-xl grid grid-rows-2 grid-cols-3 grid-flow-col place-items-center">
		<div class="flex flex-col">
			<Radio value="Maven" bind:group={group1} name="group1">Maven</Radio>
			<Radio value="Gradle" bind:group={group1} name="group1">Gradle</Radio>
		</div>
		<div>Selected: <span class="font-bold">{group1}</span></div>

		<div class="flex flex-col">
			<Radio value="Java" bind:group={group2} name="group2">Java</Radio>
			<Radio value="Java & Kotlin" bind:group={group2} name="group2">Java & Kotlin</Radio>
		</div>
		<div>Selected: <span class="font-bold">{group2}</span></div>

		<div class="flex flex-col">
			<Radio value="Latest" bind:group={group3} name="group3">Latest</Radio>
			<Radio value="Snapshot" bind:group={group3} name="group3">Snapshot</Radio>
		</div>
		<div>Selected: <span class="font-bold">{group3}</span></div>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto w-24 place-items-center grid grid-cols-2 gap-5">
		<IconButton variant="accent" onClick={() => alert("You clicked the trash button!")}>
			<span class="icon-wrapper">
				<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="white"/>
				</svg>
			</span>
		</IconButton>
		<IconButton variant="accent" disabled onClick={() => alert("You clicked the trash button!")}>
			<span class="icon-wrapper">
				<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="white"/>
				</svg>
			</span>
		</IconButton>

		<IconButton variant="accent" size="sm" onClick={() => alert("You clicked the trash button!")}>
			<span class="icon-wrapper">
				<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="white"/>
				</svg>
			</span>
		</IconButton>
		<IconButton variant="accent" size="sm" disabled onClick={() => alert("You clicked the trash button!")}>
			<span class="icon-wrapper">
				<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="white"/>
				</svg>
			</span>
		</IconButton>

		<IconButton onClick={() => alert("You clicked the plus button!")}>
			<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.7619 6.5625H9.69942V1.5C9.69942 0.902344 9.17208 0.375 8.57442 0.375H7.44942C6.81661 0.375 6.32442 0.902344 6.32442 1.5V6.5625H1.26192C0.62911 6.5625 0.136923 7.08984 0.136923 7.6875V8.8125C0.136923 9.44531 0.62911 9.9375 1.26192 9.9375H6.32442V15C6.32442 15.6328 6.81661 16.125 7.44942 16.125H8.57442C9.17208 16.125 9.69942 15.6328 9.69942 15V9.9375H14.7619C15.3596 9.9375 15.8869 9.44531 15.8869 8.8125V7.6875C15.8869 7.08984 15.3596 6.5625 14.7619 6.5625Z" fill="white"/>
			</svg>
		</IconButton>
		<IconButton disabled onClick={() => alert("You clicked the plus button!")}>
			<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.7619 6.5625H9.69942V1.5C9.69942 0.902344 9.17208 0.375 8.57442 0.375H7.44942C6.81661 0.375 6.32442 0.902344 6.32442 1.5V6.5625H1.26192C0.62911 6.5625 0.136923 7.08984 0.136923 7.6875V8.8125C0.136923 9.44531 0.62911 9.9375 1.26192 9.9375H6.32442V15C6.32442 15.6328 6.81661 16.125 7.44942 16.125H8.57442C9.17208 16.125 9.69942 15.6328 9.69942 15V9.9375H14.7619C15.3596 9.9375 15.8869 9.44531 15.8869 8.8125V7.6875C15.8869 7.08984 15.3596 6.5625 14.7619 6.5625Z" fill="white"/>
			</svg>
		</IconButton>

		<IconButton size="sm" onClick={() => alert("You clicked the plus button!")}>
			<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.7619 6.5625H9.69942V1.5C9.69942 0.902344 9.17208 0.375 8.57442 0.375H7.44942C6.81661 0.375 6.32442 0.902344 6.32442 1.5V6.5625H1.26192C0.62911 6.5625 0.136923 7.08984 0.136923 7.6875V8.8125C0.136923 9.44531 0.62911 9.9375 1.26192 9.9375H6.32442V15C6.32442 15.6328 6.81661 16.125 7.44942 16.125H8.57442C9.17208 16.125 9.69942 15.6328 9.69942 15V9.9375H14.7619C15.3596 9.9375 15.8869 9.44531 15.8869 8.8125V7.6875C15.8869 7.08984 15.3596 6.5625 14.7619 6.5625Z" fill="white"/>
			</svg>
		</IconButton>
		<IconButton size="sm" disabled onClick={() => alert("You clicked the plus button!")}>
			<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.7619 6.5625H9.69942V1.5C9.69942 0.902344 9.17208 0.375 8.57442 0.375H7.44942C6.81661 0.375 6.32442 0.902344 6.32442 1.5V6.5625H1.26192C0.62911 6.5625 0.136923 7.08984 0.136923 7.6875V8.8125C0.136923 9.44531 0.62911 9.9375 1.26192 9.9375H6.32442V15C6.32442 15.6328 6.81661 16.125 7.44942 16.125H8.57442C9.17208 16.125 9.69942 15.6328 9.69942 15V9.9375H14.7619C15.3596 9.9375 15.8869 9.44531 15.8869 8.8125V7.6875C15.8869 7.08984 15.3596 6.5625 14.7619 6.5625Z" fill="white"/>
			</svg>
		</IconButton>

		<IconButton variant="secondary" onClick={() => alert("You clicked the grey trash button!")}>
			<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="#434A56"/>
			</svg>
		</IconButton>
		<IconButton variant="secondary" disabled onClick={() => alert("You clicked the grey trash button!")}>
			<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="#434A56"/>
			</svg>
		</IconButton>

		<IconButton size="sm" variant="secondary" onClick={() => alert("You clicked the grey trash button!")}>
			<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="#434A56"/>
			</svg>
		</IconButton>
		<IconButton size="sm" variant="secondary" disabled onClick={() => alert("You clicked the grey trash button!")}>
			<svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16.1446 1.375H11.9258L11.5743 0.742188C11.4336 0.460938 11.1524 0.25 10.836 0.25H6.79301C6.4766 0.25 6.19535 0.460938 6.05473 0.742188L5.73832 1.375H1.51957C1.20317 1.375 0.957073 1.65625 0.957073 1.9375V3.0625C0.957073 3.37891 1.20317 3.625 1.51957 3.625H16.1446C16.4258 3.625 16.7071 3.37891 16.7071 3.0625V1.9375C16.7071 1.65625 16.4258 1.375 16.1446 1.375ZM2.82035 16.668C2.85551 17.582 3.59379 18.25 4.50785 18.25H13.1211C14.0352 18.25 14.7735 17.582 14.8086 16.668L15.5821 4.75H2.08207L2.82035 16.668Z" fill="#434A56"/>
			</svg>
		</IconButton>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto place-items-center grid gap-5">

		<Toggle bind:value={toggle1}>
			<div slot="off-label" class="text-sm">Off</div>
			<div slot="on-label" class="text-sm">On</div>
		</Toggle>

		<div class="font-bold">Toggle is {toggle1 ? "on" : "off"}</div>

		<Toggle bind:value={toggle2} disabled>
			<div slot="off-label" class="text-sm">Off</div>
			<div slot="on-label" class="text-sm">On</div>
		</Toggle>
		
		<div class="font-bold">Toggle is disabled but set to {toggle2 ? "on" : "off"}</div>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto max-w-screen-md flex flex-col gap-5">
		<Card>
			<div class="font-bold mb-4">Title</div>
			<div class="text-sm">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</Card>

		<Card>
			<div class="flex justify-between">
				<div class="font-bold mb-4">Axon Framework</div>
				<button class="fill-dove disabled:bg-rhino disabled:opacity-50 bg-fox rounded-full w-6 h-6 flex items-center justify-center">
						<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
							<path d="M6.46291 5L8.80666 2.65625C9.11135 2.375 9.11135 1.90625 8.80666 1.625L8.29104 1.10938C8.00979 0.804688 7.54104 0.804688 7.25979 1.10938L4.91604 3.45312L2.54885 1.10938C2.2676 0.804688 1.79885 0.804688 1.5176 1.10938L1.00197 1.625C0.697287 1.90625 0.697287 2.375 1.00197 2.65625L3.34572 5L1.00197 7.36719C0.697287 7.64844 0.697287 8.11719 1.00197 8.39844L1.5176 8.91406C1.79885 9.21875 2.2676 9.21875 2.54885 8.91406L4.91604 6.57031L7.25979 8.91406C7.54104 9.21875 8.00979 9.21875 8.29104 8.91406L8.80666 8.39844C9.11135 8.11719 9.11135 7.64844 8.80666 7.36719L6.46291 5Z"/>
						</svg>
				</button>
			</div>
			<p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
		</Card>

		<Card>
			<div class="flex justify-between">
				<div class="font-bold mb-4">Axon Framework</div>
				<button disabled class="fill-dove disabled:bg-rhino disabled:opacity-50 bg-fox rounded-full w-6 h-6 flex items-center justify-center">
						<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
							<path d="M6.46291 5L8.80666 2.65625C9.11135 2.375 9.11135 1.90625 8.80666 1.625L8.29104 1.10938C8.00979 0.804688 7.54104 0.804688 7.25979 1.10938L4.91604 3.45312L2.54885 1.10938C2.2676 0.804688 1.79885 0.804688 1.5176 1.10938L1.00197 1.625C0.697287 1.90625 0.697287 2.375 1.00197 2.65625L3.34572 5L1.00197 7.36719C0.697287 7.64844 0.697287 8.11719 1.00197 8.39844L1.5176 8.91406C1.79885 9.21875 2.2676 9.21875 2.54885 8.91406L4.91604 6.57031L7.25979 8.91406C7.54104 9.21875 8.00979 9.21875 8.29104 8.91406L8.80666 8.39844C9.11135 8.11719 9.11135 7.64844 8.80666 7.36719L6.46291 5Z"/>
						</svg>
				</button>
			</div>
			<p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
		</Card>
		
		<Card>
			<div class="flex justify-between">
				<div class="font-bold mb-4">Axon Framework</div>
				<button class="fill-dove bg-gecko disabled:bg-rhino disabled:opacity-50 rounded-full w-6 h-6 flex items-center justify-center">

					<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
						<path d="M10.416 4.875H7.04104V1.5C7.04104 1.10156 6.68947 0.75 6.29104 0.75H5.54104C5.11916 0.75 4.79104 1.10156 4.79104 1.5V4.875H1.41604C0.994162 4.875 0.666037 5.22656 0.666037 5.625V6.375C0.666037 6.79688 0.994162 7.125 1.41604 7.125H4.79104V10.5C4.79104 10.9219 5.11916 11.25 5.54104 11.25H6.29104C6.68947 11.25 7.04104 10.9219 7.04104 10.5V7.125H10.416C10.8145 7.125 11.166 6.79688 11.166 6.375V5.625C11.166 5.22656 10.8145 4.875 10.416 4.875Z" />
					</svg>
						
				</button>
			</div>
			<p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
		</Card>

		<Card>
			<div class="flex justify-between">
				<div class="font-bold mb-4">Axon Framework</div>
				<button disabled class="fill-dove bg-gecko disabled:bg-rhino disabled:opacity-50 rounded-full w-6 h-6 flex items-center justify-center">

					<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="fill-inherit">
						<path d="M10.416 4.875H7.04104V1.5C7.04104 1.10156 6.68947 0.75 6.29104 0.75H5.54104C5.11916 0.75 4.79104 1.10156 4.79104 1.5V4.875H1.41604C0.994162 4.875 0.666037 5.22656 0.666037 5.625V6.375C0.666037 6.79688 0.994162 7.125 1.41604 7.125H4.79104V10.5C4.79104 10.9219 5.11916 11.25 5.54104 11.25H6.29104C6.68947 11.25 7.04104 10.9219 7.04104 10.5V7.125H10.416C10.8145 7.125 11.166 6.79688 11.166 6.375V5.625C11.166 5.22656 10.8145 4.875 10.416 4.875Z" />
					</svg>
						
				</button>
			</div>
			<p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
		</Card>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto max-w-screen-md flex flex-col gap-5">
		<Input placeholder="Placeholder example"/>
		<Input disabled placeholder="Disabled example"/>
		<Input placeholder="com.example" bind:value={textExample}/>
		<div class="text-lg font-bold">{textExample}</div>
	</div>
	<hr class="my-10"/>


	<div class="container mx-auto max-w-screen-md flex flex-col gap-5">
		<Search placeholder="Placeholder search example"/>
		<Search disabled placeholder="Disabled search example"/>
		<Search placeholder="com.search.example" bind:value={searchExample}/>
		<Typography size="l" weight="bold">{searchExample}</Typography>
	</div>
	<hr class="my-10"/>

	<div class="container mx-auto max-w-screen-md flex flex-col gap-5">
		<Button onClick={() => dialogOpen = true}>Open dialog</Button>
		<Dialog open={dialogOpen} onClose={() => dialogOpen = false}>
			<div slot="title" class="text-xl font-bold">Share your configuration</div>
			<div class="mb-7 text-sm">Use this link to share the current configuration. Attributes can be removed from the URL if you want to rely on our defaults.</div>
			<div class="flex items-center">
				<div style="margin-right: 10px; width: 100%">
					<Input value={'https://start.axoniq.io/#!type=maven-project&language=java&platformVersion=2.5.0.RELEASE&packaging=jar&jvmVersion=11&groupId=com.example&artifactId=demo&name=demo&description=Demo%20project%20for%20Axon&packageName=com.example.demo'} />
				</div>
				<Button>Copy</Button>
			</div>
		</Dialog>
	</div>

</main>

<style type="scss">
	@use "~@axoniq-product-ui/core/stylesheets/colors.scss";

	main {
		background-color: #e5e5e5;
	}
</style>
