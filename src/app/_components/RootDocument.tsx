import type { Locale } from '@/content/site'
import { inconsolata, inter } from '@/app/fonts'

const structuredData = {
	ru: {
		pageUrl: 'https://imrasts.ru/',
		pageName: 'Imrasts — Frontend-разработчик',
		pageDescription:
			'Портфолио frontend-разработчика: адаптивные лендинги и бизнес-сайты на React и TypeScript.',
		personDescription:
			'Frontend-разработчик, создающий быстрые, доступные и адаптивные интерфейсы для бизнеса.',
	},
	en: {
		pageUrl: 'https://imrasts.ru/en',
		pageName: 'Imrasts — Frontend Developer',
		pageDescription:
			'Frontend developer portfolio featuring responsive landing pages and business websites built with React and TypeScript.',
		personDescription:
			'Frontend developer building fast, accessible, and responsive interfaces for businesses.',
	},
} as const

function createJsonLd(locale: Locale) {
	const content = structuredData[locale]
	const websiteId = 'https://imrasts.ru/#website'
	const personId = 'https://imrasts.ru/#person'
	const profileId = `${content.pageUrl}#profile`

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': websiteId,
				url: 'https://imrasts.ru/',
				name: 'Imrasts',
				inLanguage: ['ru', 'en'],
			},
			{
				'@type': 'ProfilePage',
				'@id': profileId,
				url: content.pageUrl,
				name: content.pageName,
				description: content.pageDescription,
				inLanguage: locale,
				isPartOf: { '@id': websiteId },
				mainEntity: { '@id': personId },
			},
			{
				'@type': 'Person',
				'@id': personId,
				name: 'Imrasts',
				url: content.pageUrl,
				jobTitle: 'Frontend Developer',
				description: content.personDescription,
				inLanguage: locale,
				sameAs: [
					'https://github.com/1mrasts',
					'https://t.me/imrasts',
					'https://kwork.ru/user/1mrasts',
				],
			},
		],
	}
}

export default function RootDocument({
	children,
	locale,
}: {
	children: React.ReactNode
	locale: Locale
}) {
	const jsonLd = createJsonLd(locale)

	return (
		<html lang={locale} className={`${inter.variable} ${inconsolata.variable}`}>
			<body>
				{children}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</body>
		</html>
	)
}
