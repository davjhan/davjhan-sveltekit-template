// import theme from './tests/styles/tailwind.theme'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
	content: ['./tests/**/*.{svelte,js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			spacing: {
				'18': '4.5rem',
				'30': '7.25rem',
			},
			colors: {
				outlineColor: colors.indigo[200],
				transparent: 'transparent',
				white: colors.white,
				ink: {
					DEFAULT: colors.neutral[800],
					accent: colors.orange[600],
					secondary: colors.neutral[700],
					tertiary: colors.neutral[500],
					error: colors.rose[800],
					success: colors.lime[800],
					warning: colors.amber[800],
				},
				accent: {
					DEFAULT: colors.orange[400],
					error: colors.rose[400],
					success: colors.lime[400],
					secondary: colors.neutral[400],
				},
				shade: {
					DEFAULT: colors.neutral[100],
					accent: colors.indigo[50],
					success: colors.lime[100],
					error: colors.rose[100],
					warning: colors.amber[100],
				},
				background: {
					DEFAULT: colors.white,
				},
				divider: {
					DEFAULT: colors.neutral[300],
					accent: colors.indigo[300],
					success: colors.lime[300],
					error: colors.rose[300],
					warning: colors.amber[300],
				},
			},
			boxShadow: {
				hard: `2px 2px 0px 0px ${colors.neutral[800]}`,
			},
			borderRadius: {
				DEFAULT: '8px',
			},
			fontFamily: {
				mono: ['routes-monospace', 'SFMono-Regular'],
			},
		},
	},
} satisfies Config
