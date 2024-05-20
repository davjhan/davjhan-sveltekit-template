import type { Config } from 'tailwindcss'
import * as preset from './src/styles/tailwind-preset'

export default {
	content: ['./src/**/*.{svelte,js,ts,jsx,tsx,html}'],
	presets: [preset],
	theme: {
		fontFamily: {
			serif: 'Lora',
		},
	},
} satisfies Config
