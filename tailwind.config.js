const { kd_ui } = require('./src/lib/tailwindPlugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{ts,tsx}'],
	plugins: [kd_ui()]
}
