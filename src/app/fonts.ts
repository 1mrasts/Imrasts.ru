import { Inconsolata, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-inter',
})

export const inconsolata = Inconsolata({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inconsolata',
})

export const inconsolataRus = localFont({
	src: [
		{
			path: './fonts/InconsolataLGCmarkup.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/InconsolataLGCmarkup-Italic.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './fonts/InconsolataLGCmarkup-Bold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/InconsolataLGCmarkup-BoldItal.otf',
			weight: '700',
			style: 'italic',
		},
	],
	display: 'swap',
	variable: '--font-inconsolataRus',
})
