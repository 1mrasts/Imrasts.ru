import { Inconsolata, Inter } from 'next/font/google'

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
