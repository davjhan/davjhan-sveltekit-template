import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html', // may differ from host to host
		}),
		alias: {
			$views: 'src/views',
			$ui: 'src/lib/components',
			$assets: 'src/lib/assets',
			$routes: 'src/routes',
		},
	},
	// Disable accessibility warnings
	onwarn: (warning, handler) => {
		if (warning.code.includes('a11y')) return
		handler(warning)
	},
}

export default config
