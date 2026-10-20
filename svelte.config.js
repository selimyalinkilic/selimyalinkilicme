import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Site tamamen statik; çıktı build/ klasörüne yazılır (Cloudflare ve Vercel ikisi de sunar)
		adapter: adapter()
	}
};

export default config;
