import { inconsolata, inconsolataRus, inter } from '@/app/fonts'
import { siteCopy, type Locale } from '@/content/site'
import Header from '@/widgets/Header/Header'

const structuredData = {
	ru: {
		pageUrl: 'https://imrasts.ru/',
		personDescription:
			'Frontend-разработчик, создающий быстрые, доступные и адаптивные интерфейсы для бизнеса.',
	},
	en: {
		pageUrl: 'https://imrasts.ru/en',
		personDescription:
			'Frontend developer building fast, accessible, and responsive interfaces for businesses.',
	},
} as const

function createJsonLd(locale: Locale) {
	const content = structuredData[locale]
	const websiteId = 'https://imrasts.ru/#website'
	const personId = 'https://imrasts.ru/#person'

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
	const copy = siteCopy[locale]

	return (
		<html
			lang={locale}
			className={`${inter.variable} ${inconsolata.variable} ${inconsolataRus.variable}`}
		>
			<body>
				<Header locale={locale} copy={copy['header']} />
				{children}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
					}}
				/>
			</body>
		</html>
	)
}
