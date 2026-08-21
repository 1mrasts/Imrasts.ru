import { serviceSlugs } from '@/content/service-pages'
import type { MetadataRoute } from 'next'

const languages = {
	ru: 'https://imrasts.ru/',
	en: 'https://imrasts.ru/en',
	'x-default': 'https://imrasts.ru/',
}

// TODO: Сделать lastmodified с реальной датой последнего существенного обновления
export default function sitemap(): MetadataRoute.Sitemap {
	const servicePages: MetadataRoute.Sitemap = serviceSlugs.flatMap(slug => [
		{
			url: `https://imrasts.ru/${slug}`,
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					ru: `https://imrasts.ru/${slug}`,
					en: `https://imrasts.ru/en/${slug}`,
					'x-default': `https://imrasts.ru/${slug}`,
				},
			},
		},
		{
			url: `https://imrasts.ru/en/${slug}`,
			changeFrequency: 'monthly',
			priority: 0.8,
			alternates: {
				languages: {
					ru: `https://imrasts.ru/${slug}`,
					en: `https://imrasts.ru/en/${slug}`,
					'x-default': `https://imrasts.ru/${slug}`,
				},
			},
		},
	])

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
		...servicePages,
	]
}
