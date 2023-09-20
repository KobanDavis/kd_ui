import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
const config = {
	theme: {
		extend: {
			colors: {
				theme: {
					primary: 'rgb(var(--theme-primary) / <alpha-value>)',
					'primary-light': 'var(--theme-primary-light)',
					'primary-lighter': 'var(--theme-primary-lighter)',
					secondary: 'rgb(var(--theme-secondary) / <alpha-value>)'
				}
			},
			opacity: {
				15: '0.15'
			}
		}
	}
}

export const kd_ui = () => plugin(() => {}, config)
