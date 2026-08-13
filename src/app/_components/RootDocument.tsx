import type { Locale } from '@/content/site'

const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'WebSite',
			'@id': 'https://imrasts.ru/#website',
			url: 'https://imrasts.ru/',
			name: 'Imrasts',
		},
		{
			'@type': 'ProfilePage',
			'@id': 'https://imrasts.ru/#profile',
			url: 'https://imrasts.ru/',
			name: 'Imrasts — Frontend Developer',
			mainEntity: {
				'@id': 'https://imrasts.ru/#person',
			},
		},
		{
			'@type': 'Person',
			'@id': 'https://imrasts.ru/#person',
			name: 'Imrasts',
			url: 'https://imrasts.ru/',
			jobTitle: 'Frontend Developer',
		},
	],
}

export default function RootDocument({
	children,
	locale,
}: {
	children: React.ReactNode
	locale: Locale
}) {
	return (
		<html lang={locale}>
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
