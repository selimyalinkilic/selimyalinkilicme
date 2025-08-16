<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Selim Yalınkılıç - Frontend Developer Portfolio</title>
	<meta
		name="description"
		content="Professional Frontend Developer portfolio showcasing modern web development skills with React, Vue, Svelte, and TypeScript. Based in Istanbul, Turkey."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}
