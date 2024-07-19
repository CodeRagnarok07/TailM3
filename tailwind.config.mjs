import starlightPlugin from '@astrojs/starlight-tailwind';






/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './TailM3/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {white: '#fafaf9'}
		},
		colors: {

			primary: {
				"DEFAULT": 'rgb(var(--md-sys-color-primary) / <alpha-value>) ',
				"on": 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
				"container": 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
				"on-container": 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
				"fixed": 'rgb(var(--md-sys-color-primary-fixed) / <alpha-value>)',
				"fixed-dim": 'rgb(var(--md-sys-color-primary-fixed-dim) / <alpha-value>)',
				"on-fixed": 'rgb(var(--md-sys-color-on-primary-fixed) / <alpha-value>)',
				"on-primary-fixed-variant": 'rgb(var(--md-sys-color-on-primary-fixed-variant) / <alpha-value>)',

				"100": 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
				"200": 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
				"300": 'rgb(var(--md-sys-color-primary-fixed) / <alpha-value>)',
				"400": 'rgb(var(--md-sys-color-primary-fixed-dim) / <alpha-value>)',
				"500": 'rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)',
				"600": 'rgb(var(--md-sys-color-on-primary-fixed-variant) / <alpha-value>)',
				"700": 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
				"800": 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
				"900": 'rgb(var(--md-sys-color-on-primary-fixed) / <alpha-value>)',
			},
			secondary: {
				"DEFAULT": 'rgb(var(--md-sys-color-secondary) / <alpha-value>) ',

				"on": 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
				"container": 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
				"on-container": 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
				"fixed": 'rgb(var(--md-sys-color-secondary-fixed) / <alpha-value>)',
				"fixed-dim": 'rgb(var(--md-sys-color-secondary-fixed-dim) / <alpha-value>)',
				"on-fixed": 'rgb(var(--md-sys-color-on-secondary-fixed) / <alpha-value>)',
				"on-secondary-fixed-variant": 'rgb(var(--md-sys-color-on-secondary-fixed-variant) / <alpha-value>)',

				"100": 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
				"200": 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
				"300": 'rgb(var(--md-sys-color-secondary-fixed) / <alpha-value>)',
				"400": 'rgb(var(--md-sys-color-secondary-fixed-dim) / <alpha-value>)',
				"500": 'rgb(var(--md-sys-color-inverse-secondary) / <alpha-value>)',
				"600": 'rgb(var(--md-sys-color-on-secondary-fixed-variant) / <alpha-value>)',
				"700": 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
				"800": 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
				"900": 'rgb(var(--md-sys-color-on-secondary-fixed) / <alpha-value>)',
			},
			tertiary: {
				"DEFAULT": 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
				"on-tertiary-container": 'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
				"tertiary-fixed-dim": 'rgb(var(--md-sys-color-tertiary-fixed-dim) / <alpha-value>)',
				"tertiary-container": 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
				"on-tertiary": 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
				"on-tertiary-fixed": 'rgb(var(--md-sys-color-on-tertiary-fixed) / <alpha-value>)',
				
				"400": 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
				"500": 'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
				"600": 'rgb(var(--md-sys-color-tertiary-fixed-dim) / <alpha-value>)',
				"700": 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
				"800": 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
				"900": 'rgb(var(--md-sys-color-on-tertiary-fixed) / <alpha-value>)',
			},
			error: {
				"DEFAULT": 'rgb(var(--md-sys-color-error) / <alpha-value>)',
				"on": 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
				"container": 'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
				"on-container": 'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)',
				
			},
			surface: {
				"DEFAULT": 'rgb(var(--md-sys-color-surface) / <alpha-value>) ',

				"inverse": 'rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)',
				"variant": 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
				"outline": 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
				"outline-variant": 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
				"on": 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
				"container": 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
				"container-low": 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',



				"100": 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
				"200": 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
				"300": 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
				"400": 'rgb(var(--md-sys-color-surface-tint) / <alpha-value>)',
				"500": 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
				"600": 'rgb(var(--md-sys-color-surface-bright) / <alpha-value>)',
				"700": 'rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)',
				"800": 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
				"900": 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
			},

		}
	},
	plugins: [starlightPlugin()],
}
