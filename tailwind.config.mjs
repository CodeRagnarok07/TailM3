import starlightPlugin from '@astrojs/starlight-tailwind';






/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {white: '#fafaf9'}
		},
		colors: {

			primary: {
				"base": 'var(--md-sys-color-primary)',
				"on": 'var(--md-sys-color-on-primary)',
				"container": 'var(--md-sys-color-primary-container)',
				"on-container": 'var(--md-sys-color-on-primary-container)',
				"fixed": 'var(--md-sys-color-primary-fixed)',
				"fixed-dim": 'var(--md-sys-color-primary-fixed-dim)',
				"on-fixed": 'var(--md-sys-color-on-primary-fixed)',
				"on-primary-fixed-variant": 'var(--md-sys-color-on-primary-fixed-variant)',
			},
		}
	},
	plugins: [starlightPlugin()],
}
