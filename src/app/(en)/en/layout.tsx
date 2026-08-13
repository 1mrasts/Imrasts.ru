import RootDocument from '@/app/_components/RootDocument'
import type { Metadata } from 'next'
import '../../fonts.css'
import '../../globals.css'
import '../../zeroing.css'

export const metadata: Metadata = {
	title: 'Frontend Development — HTML, CSS, React | Imrasts',
	description:
		'Responsive frontend development for landing pages and business websites.',
	metadataBase: new URL('https://imrasts.ru'),
	robots: { index: true, follow: true },
	alternates: {
		canonical: '/en',
		languages: { ru: '/', en: '/en' },
	},
	openGraph: {
		url: '/en',
		type: 'website',
		siteName: 'Imrasts',
		locale: 'en_US',
		alternateLocale: ['ru_RU'],
		images: [
			{
				url: '/og-image.webp',
				width: 1200,
				height: 630,
				type: 'image/webp',
				alt: 'Imrasts — responsive frontend development',
			},
		],
	},
	icons: { icon: '/favicon.svg' },
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
	return <RootDocument locale='en'>{children}</RootDocument>
}
