module.exports = {
	content: ['src/**/*.{ts,tsx}'],
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
				15: 0.15
			}
		}
	},
	plugins: []
}
