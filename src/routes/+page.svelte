<script lang="ts">
	import ThemeToggle from '$lib/ThemeToggle.svelte';

	type Commit = { type: 'feat' | 'chore' | 'init'; text: string };
	type Job = { years: string; role: string; company: string; current?: boolean; commits: Commit[] };

	// Yeni iş ya da proje eklemek için bu listelere satır eklemek yeterli
	const experience: Job[] = [
		{
			years: '2025 → now',
			role: 'Senior Frontend Developer',
			company: 'Shopier',
			current: true,
			commits: [
				{ type: 'feat', text: 'Masterpass integration — card linking, tokenisation, payments' },
				{ type: 'feat', text: 'redesigned Shopier homepage' },
				{
					type: 'feat',
					text: 'test automation — architecture, development & ownership of web (Katalon, Playwright) and native mobile (Appium) suites'
				}
			]
		},
		{
			years: '2020 → 2025',
			role: 'Frontend Developer',
			company: 'Shopier',
			commits: [
				{ type: 'feat', text: 'App Store frontend in Next.js' },
				{ type: 'feat', text: 'official Shopier blog, end to end' },
				{ type: 'feat', text: 'redesigned storefront' }
			]
		},
		{
			years: '2018 → 2020',
			role: 'Frontend Developer',
			company: 'Veveya Bilişim',
			commits: [
				{
					type: 'chore',
					text: 'Misli.com mobile, Horobox, Horopool, Raysigorta, Tonguç Akademi, Garanti Bank internal tool'
				}
			]
		},
		{
			years: '2017 → 2018',
			role: 'Intern',
			company: 'Veveya Bilişim',
			commits: [{ type: 'init', text: 'hello, world' }]
		}
	];

	const commitColor = { feat: 'text-green', chore: 'text-orange', init: 'text-pink' };

	const shadows = [
		'shadow-[3px_3px_0_var(--blue)]',
		'shadow-[3px_3px_0_var(--pink)]',
		'shadow-[3px_3px_0_var(--orange)]',
		'shadow-[3px_3px_0_var(--green)]'
	];
	const stack = [
		'react',
		'next.js',
		'svelte',
		'typescript',
		'tailwind',
		'scss',
		'pug',
		'supabase',
		'firebase',
		'git',
		'figma hand-off'
	];
	const testing = ['playwright', 'katalon', 'appium'];

	const links = [
		{ label: 'linkedin', href: 'https://www.linkedin.com/in/selimyalinkilic/' },
		{ label: 'github', href: 'https://github.com/selimyalinkilic' },
		{ label: 'instagram', href: 'https://www.instagram.com/selimyalnklc/' }
	];
</script>

<div class="mx-auto flex max-w-[1200px] flex-col gap-14 px-4 pb-14 text-[15px] sm:px-8 lg:px-12">
	<header class="flex flex-wrap items-center justify-between gap-4 py-6">
		<a href="/" class="font-display text-[22px] text-fg no-underline">
			selim<span class="text-pink">@</span>web<span class="text-blue">:~</span>
		</a>
		<nav class="flex flex-wrap items-center gap-5 text-sm" aria-label="Main">
			<a href="#log" class="text-fg hover:text-pink">experience</a>
			<a href="#stack" class="text-fg hover:text-pink">stack</a>
			<a href="#hi" class="text-fg hover:text-pink">say hi</a>
			<ThemeToggle />
		</nav>
	</header>

	<main class="flex flex-col gap-14">
		<section
			class="grid items-center gap-14"
			style="grid-template-columns: repeat(auto-fit, minmax(min(460px, 100%), 1fr))"
		>
			<div class="win flex flex-col">
				<div
					class="flex items-center gap-2 border-b-2 border-ink px-[18px] py-3.5"
					aria-hidden="true"
				>
					<span class="size-[13px] rounded-full border-2 border-ink bg-pink"></span>
					<span class="size-[13px] rounded-full border-2 border-ink bg-orange"></span>
					<span class="size-[13px] rounded-full border-2 border-ink bg-green"></span>
					<span class="ml-2.5 text-[13px] text-muted">hello.sh</span>
				</div>
				<div class="flex flex-col gap-[22px] p-6 sm:p-9">
					<p class="m-0 text-muted" aria-hidden="true">
						<span class="font-bold text-pink">➜</span> <span class="text-blue">~</span> ./hello --name
						selim
					</p>
					<h1
						class="m-0 font-display text-[clamp(46px,6.4vw,92px)] leading-[.95] tracking-[-.02em]"
					>
						Hi! I’m <span class="text-pink">Selim</span><span
							class="cursor-blink"
							aria-hidden="true"
						></span>
					</h1>
					<p class="m-0 text-[17px] leading-[1.7] text-pretty">
						Senior Frontend Developer at
						<a href="https://shopier.com" class="font-bold text-blue hover:underline">@shopier</a>.
						I turn designs into fast, accessible, slightly-too-polished interfaces — since 2017,
						from Istanbul.
					</p>
					<div class="flex flex-wrap gap-3">
						<a
							href="#hi"
							class="pop inline-flex min-h-12 items-center rounded-full bg-pink px-[22px] font-bold text-white"
						>
							say hi →
						</a>
						<a
							href="/resume.pdf"
							class="pop inline-flex min-h-12 items-center rounded-full bg-card px-[22px] font-bold text-fg"
						>
							resume.pdf ↓
						</a>
					</div>
				</div>
			</div>

			<figure class="relative m-0 w-full max-w-[420px] justify-self-center p-5">
				<img
					src="/images/profile.webp"
					alt="Illustrated portrait of Selim Yalınkılıç"
					width="600"
					height="900"
					fetchpriority="high"
					class="block aspect-[4/5] w-full rotate-[2.5deg] rounded-[28px] border-2 border-ink object-cover object-[center_20%] shadow-[10px_10px_0_var(--blue)]"
				/>
				<figcaption
					class="absolute bottom-12 left-0 -rotate-[4deg] rounded-[14px] border-2 border-ink bg-orange px-4 py-2.5 text-sm font-bold text-[#1B1300] shadow-[3px_3px_0_var(--ink)]"
				>
					// that’s me, rendered
				</figcaption>
			</figure>
		</section>

		<section id="log" class="flex scroll-mt-6 flex-col gap-5">
			<h2 class="m-0 font-display text-[clamp(32px,4vw,48px)]">
				<span class="text-pink">git</span> log
			</h2>
			<ol class="win m-0 flex list-none flex-col p-0">
				{#each experience as job, i (job.years)}
					<li
						class="flex flex-wrap gap-x-7 gap-y-2 px-7 py-6 {i < experience.length - 1
							? 'border-b-2 border-dashed border-line'
							: ''}"
					>
						<span class="flex-[0_0_140px] font-bold text-blue">{job.years}</span>
						<div class="flex min-w-0 flex-[1_1_420px] flex-col gap-2">
							<h3 class="m-0 flex flex-wrap items-center gap-2.5 text-[17px]">
								{job.role} <span class="font-normal text-muted">@ {job.company}</span>
								{#if job.current}
									<span class="rounded-full bg-green px-2.5 py-0.5 text-xs text-white">HEAD</span>
								{/if}
							</h3>
							<ul class="m-0 flex list-none flex-col p-0 leading-[1.75] text-muted">
								{#each job.commits as commit (commit.text)}
									<li>
										<span class={commitColor[commit.type]}>{commit.type}:</span>
										{commit.text}
									</li>
								{/each}
							</ul>
						</div>
					</li>
				{/each}
			</ol>
		</section>

		<section id="stack" class="flex scroll-mt-6 flex-col gap-5">
			<h2 class="m-0 font-display text-[clamp(32px,4vw,48px)]">
				<span class="text-pink">npm</span> ls
			</h2>
			<ul class="m-0 flex list-none flex-wrap gap-3 p-0 font-bold">
				{#each stack as item, i (item)}
					<li
						class="rounded-xl border-2 border-ink bg-card px-4 py-2.5 {shadows[i % shadows.length]}"
					>
						{item}
					</li>
				{/each}
				{#each testing as item, i (item)}
					<li
						class="rounded-xl border-2 border-ink bg-card px-4 py-2.5 {shadows[
							(stack.length + i) % shadows.length
						]}"
					>
						{item} <span class="font-normal text-muted">--dev</span>
					</li>
				{/each}
			</ul>
		</section>

		<section id="hi" class="win flex scroll-mt-6 flex-col gap-7 bg-blue! p-7 text-white sm:p-12">
			<h2 class="m-0 font-display text-[clamp(40px,6vw,80px)] leading-[.95]">
				Let’s build something.
			</h2>
			<a
				href="mailto:yalinkilicselim@gmail.com"
				class="text-[clamp(18px,2.2vw,26px)] font-bold break-all text-white underline underline-offset-[6px]"
			>
				yalinkilicselim@gmail.com
			</a>
			<nav aria-label="Elsewhere" class="flex flex-wrap gap-3">
				{#each links as link (link.href)}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="pop inline-flex min-h-11 items-center rounded-full bg-card px-[18px] font-bold text-fg"
					>
						{link.label} ↗
					</a>
				{/each}
			</nav>
		</section>
	</main>

	<footer class="flex flex-wrap justify-between gap-4 text-[13px] text-muted">
		<span>© {new Date().getFullYear()} · made with sveltekit &amp; too much coffee</span>
		<span>exit 0</span>
	</footer>
</div>
