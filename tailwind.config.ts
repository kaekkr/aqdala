import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			'md': '648px',
			
			'lg': '1200px'
		},
		extend: {
			colors: {
				orange: {
					'50': '#fff5e6',
					'100': '#ffdfb0',
					'200': '#ffd08a',
					'300': '#ffbb54',
					'400': '#ffad33',
					'500': '#e88b00',
					'600': '#e46f1c'
				},
				neutral: {
					light: '#F4F4F4',
					dark: '#595959'
				},
				black: '#1C1C1C',
				white: '#ffffff',
				green: '#2F7535'
			}
		}
	},
	plugins: []
}
export default config
