<script lang="ts">
	import { onMount } from 'svelte';

	let dark = $state(false);

	onMount(() => {
		dark = document.documentElement.classList.contains('dark');
	});

	function toggle() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		try {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		} catch {
			// depolama kapalıysa tercih sadece bu oturumda geçerli
		}
	}
</script>

<button
	type="button"
	onclick={toggle}
	aria-pressed={dark}
	class="pop min-h-11 cursor-pointer rounded-full bg-card px-4 font-bold text-fg"
>
	<span class="sr-only">Dark mode</span>
	<span aria-hidden="true">{dark ? 'lights on' : 'lights off'}</span>
</button>
