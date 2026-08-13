import RootDocument from '@/app/_components/RootDocument'
import type { Metadata } from 'next'
import '../fonts.css'
import '../globals.css'
import '../zeroing.css'

export const metadata: Metadata = {
	title: 'Вёрстка сайтов по макетам Figma — HTML, CSS, React | Imrasts',
	description:
		'Адаптивная frontend-разработка лендингов и бизнес-сайтов.',
	metadataBase: new URL('https://imrasts.ru'),
	robots: { index: true, follow: true },
	alternates: {
		canonical: '/',
		languages: { ru: '/', en: '/en' },
	},
	openGraph: {
		url: '/',
		type: 'website',
		siteName: 'Imrasts',
		locale: 'ru_RU',
		alternateLocale: ['en_US'],
		images: [
			{
				url: '/og-image.webp',
				width: 1200,
				height: 630,
				type: 'image/webp',
				alt: 'Imrasts — адаптивная вёрстка сайтов по макетам Figma',
			},
		],
	},
	icons: { icon: '/favicon.svg' },
}

export default function RussianLayout({ children }: { children: React.ReactNode }) {
	return <RootDocument locale='ru'>{children}</RootDocument>
}
