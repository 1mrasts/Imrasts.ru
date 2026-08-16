import type { MetadataRoute } from 'next'

const languages = {
	ru: 'https://imrasts.ru/',
	en: 'https://imrasts.ru/en',
}

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: languages.ru,
			changeFrequency: 'monthly',
			priority: 1,
			alternates: { languages },
		},
		{
			url: languages.en,
			changeFrequency: 'monthly',
			priority: 1,
			alternates: { languages },
		},
	]
}
