import type { Metadata } from 'next'
import type { Locale } from './site'

export const serviceSlugs = [
	'figma-to-html',
	'responsive',
	'react-development',
	'fix-site',
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

type ServiceItem = {
	title: string
	description: string
}

export type ServicePageCopy = {
	name: string
	label: string
	eyebrow: string
	title: string
	description: string
	tech: string[]
	scopeTitle: string
	scope: ServiceItem[]
	processTitle: string
	process: ServiceItem[]
	cta: string
	ctaLabel: string
	backLabel: string
	backAriaLabel: string
	footerLabel: string
}

type ServiceDefinition = {
	metadata: Record<Locale, { title: string; description: string }>
	copy: Record<Locale, ServicePageCopy>
}

export const servicePages: Record<ServiceSlug, ServiceDefinition> = {
	'figma-to-html': {
		metadata: {
			ru: {
				title: 'Вёрстка сайта по макету Figma | Imrasts',
				description:
					'Вёрстка сайта по макету Figma: семантический HTML, точный CSS, Pixel Perfect и подготовка адаптивного интерфейса.',
			},
			en: {
				title: 'Figma to HTML Development | Imrasts',
				description:
					'Figma to HTML development with semantic markup, precise CSS, close visual matching, and a responsive-ready interface.',
			},
		},
		copy: {
			ru: {
				name: 'Вёрстка по макету Figma',
				label: 'FIGMA → HTML',
				eyebrow: 'Вёрстка по готовому дизайну',
				title: 'Вёрстка сайта по макету Figma.',
				description:
					'Переношу дизайн в аккуратный интерфейс, который визуально соответствует макету и остаётся понятным в коде.',
				tech: ['HTML', 'CSS', 'SEMANTIC MARKUP', 'PIXEL PERFECT'],
				scopeTitle: 'Что входит в работу.',
				scope: [
					{
						title: 'Точное соответствие макету',
						description:
							'Сохраняю сетку, типографику, размеры, отступы и визуальные состояния из Figma.',
					},
					{
						title: 'Семантическая разметка',
						description:
							'Использую подходящие HTML-элементы, логичную структуру заголовков и понятные названия компонентов.',
					},
					{
						title: 'Чистый CSS',
						description:
							'Собираю предсказуемые стили без лишних зависимостей, дублирования и случайных переопределений.',
					},
					{
						title: 'Подготовка к адаптиву',
						description:
							'Закладываю гибкую сетку и поведение элементов, чтобы интерфейс корректно развивался на разных экранах.',
					},
				],
				processTitle: 'Как проходит работа.',
				process: [
					{
						title: 'Проверяю макет',
						description:
							'Изучаю компоненты, состояния, шрифты и материалы, отмечаю вопросы до начала вёрстки.',
					},
					{
						title: 'Собираю структуру',
						description:
							'Создаю семантический HTML и базовую сетку, затем переношу визуальные параметры.',
					},
					{
						title: 'Сверяю результат',
						description:
							'Проверяю ключевые размеры экрана, интерактивные состояния и расхождения с макетом.',
					},
				],
				cta: 'Есть макет в Figma? Пришлите ссылку, оценю объём и предложу план реализации.',
				ctaLabel: 'Обсудить проект',
				backLabel: 'Все услуги',
				backAriaLabel: 'Вернуться ко всем услугам',
				footerLabel: 'Frontend-разработка',
			},
			en: {
				name: 'Figma to HTML',
				label: 'FIGMA → HTML',
				eyebrow: 'Development from a finished design',
				title: 'Figma to HTML development.',
				description:
					'I turn a design into a precise interface that stays faithful to the source and remains clear in code.',
				tech: ['HTML', 'CSS', 'SEMANTIC MARKUP', 'PIXEL PERFECT'],
				scopeTitle: 'What is included.',
				scope: [
					{
						title: 'Accurate visual matching',
						description:
							'I preserve the grid, typography, sizing, spacing, and interface states defined in Figma.',
					},
					{
						title: 'Semantic markup',
						description:
							'I use appropriate HTML elements, a logical heading structure, and clear component names.',
					},
					{
						title: 'Maintainable CSS',
						description:
							'I build predictable styles without unnecessary dependencies, duplication, or accidental overrides.',
					},
					{
						title: 'Responsive foundation',
						description:
							'I establish flexible layout behavior so the interface can adapt correctly across screen sizes.',
					},
				],
				processTitle: 'How the work goes.',
				process: [
					{
						title: 'Review the design',
						description:
							'I inspect components, states, fonts, and assets, then resolve questions before development begins.',
					},
					{
						title: 'Build the structure',
						description:
							'I create semantic HTML and the core grid before transferring the visual details.',
					},
					{
						title: 'Compare the result',
						description:
							'I check key viewport sizes, interactive states, and any differences from the source design.',
					},
				],
				cta: 'Have a Figma design? Send the link and I will suggest an implementation plan.',
				ctaLabel: 'Discuss a project',
				backLabel: 'All services',
				backAriaLabel: 'Return to all services',
				footerLabel: 'Frontend development',
			},
		},
	},
	responsive: {
		metadata: {
			ru: {
				title: 'Адаптивная вёрстка лендинга | Imrasts',
				description:
					'Адаптивная вёрстка лендинга для компьютеров, планшетов и смартфонов: responsive design, мобильная версия и проверка интерфейса.',
			},
			en: {
				title: 'Responsive Landing Page Development | Imrasts',
				description:
					'Responsive landing page development for desktop, tablet, and mobile with considered layouts and interface testing.',
			},
		},
		copy: {
			ru: {
				name: 'Адаптивная вёрстка',
				label: 'RESPONSIVE',
				eyebrow: 'Адаптивная разработка',
				title: 'Адаптивная вёрстка лендинга.',
				description:
					'Проектирую поведение страницы для реальных устройств, чтобы интерфейс оставался удобным и цельным на каждом экране.',
				tech: ['DESKTOP', 'TABLET', 'MOBILE', 'RESPONSIVE DESIGN'],
				scopeTitle: 'Что входит в работу.',
				scope: [
					{
						title: 'Гибкая сетка',
						description:
							'Перестраиваю колонки, отступы и размеры элементов по смыслу, а не простым уменьшением desktop-версии.',
					},
					{
						title: 'Мобильная версия',
						description:
							'Приоритизирую контент, сохраняю удобную навигацию и проверяю кликабельные области на небольших экранах.',
					},
					{
						title: 'Работа с контентом',
						description:
							'Настраиваю переносы, изображения и длинные тексты, чтобы они не ломали композицию.',
					},
					{
						title: 'Проверка состояний',
						description:
							'Тестирую меню, кнопки, формы и интерактивные элементы на ключевых размерах экрана.',
					},
				],
				processTitle: 'Как проходит работа.',
				process: [
					{
						title: 'Определяю приоритеты',
						description:
							'Разбираю структуру страницы и решаю, что должно оставаться на первом плане на каждом устройстве.',
					},
					{
						title: 'Настраиваю адаптацию',
						description:
							'Добавляю гибкие размеры, медиазапросы и отдельные композиционные решения для узких экранов.',
					},
					{
						title: 'Проверяю крайние случаи',
						description:
							'Ищу горизонтальный скролл, переполнения, мелкие цели касания и нестабильные элементы.',
					},
				],
				cta: 'Нужен лендинг, который уверенно работает на любом экране?',
				ctaLabel: 'Обсудить проект',
				backLabel: 'Все услуги',
				backAriaLabel: 'Вернуться ко всем услугам',
				footerLabel: 'Frontend-разработка',
			},
			en: {
				name: 'Responsive development',
				label: 'RESPONSIVE',
				eyebrow: 'Responsive development',
				title: 'Responsive landing page development.',
				description:
					'I design page behavior for real devices so the interface remains coherent and easy to use on every screen.',
				tech: ['DESKTOP', 'TABLET', 'MOBILE', 'RESPONSIVE DESIGN'],
				scopeTitle: 'What is included.',
				scope: [
					{
						title: 'Flexible layout',
						description:
							'I restructure columns, spacing, and element sizes based on meaning, not by simply shrinking the desktop layout.',
					},
					{
						title: 'Mobile experience',
						description:
							'I prioritize content, retain clear navigation, and check touch targets on compact screens.',
					},
					{
						title: 'Content behavior',
						description:
							'I handle wrapping, images, and long text so real content does not break the composition.',
					},
					{
						title: 'State testing',
						description:
							'I test menus, buttons, forms, and interactive elements at key viewport sizes.',
					},
				],
				processTitle: 'How the work goes.',
				process: [
					{
						title: 'Set priorities',
						description:
							'I review the page structure and decide what must stay prominent on each device.',
					},
					{
						title: 'Build the adaptation',
						description:
							'I add fluid sizing, media queries, and deliberate compositions for narrow screens.',
					},
					{
						title: 'Test edge cases',
						description:
							'I check for horizontal scrolling, overflow, small touch targets, and unstable elements.',
					},
				],
				cta: 'Need a landing page that works confidently on every screen?',
				ctaLabel: 'Discuss a project',
				backLabel: 'All services',
				backAriaLabel: 'Return to all services',
				footerLabel: 'Frontend development',
			},
		},
	},
	'react-development': {
		metadata: {
			ru: {
				title: 'Frontend-разработка на React | Imrasts',
				description:
					'Frontend-разработка на React и Next.js: интерактивные интерфейсы, компоненты, JavaScript и TypeScript для современных веб-проектов.',
			},
			en: {
				title: 'React Frontend Development | Imrasts',
				description:
					'React and Next.js frontend development with interactive interfaces, reusable components, JavaScript, and TypeScript.',
			},
		},
		copy: {
			ru: {
				name: 'Разработка на React',
				label: 'REACT / NEXT.JS',
				eyebrow: 'Frontend-разработка',
				title: 'Frontend-разработка на React.',
				description:
					'Создаю интерактивные интерфейсы и компоненты, которые удобно поддерживать, тестировать и развивать вместе с продуктом.',
				tech: ['REACT', 'NEXT.JS', 'JAVASCRIPT', 'TYPESCRIPT'],
				scopeTitle: 'Что входит в работу.',
				scope: [
					{
						title: 'Компонентная архитектура',
						description:
							'Разделяю интерфейс на понятные и переиспользуемые части с прозрачными зонами ответственности.',
					},
					{
						title: 'Интерактивная логика',
						description:
							'Реализую формы, фильтры, состояния загрузки, навигацию и другие пользовательские сценарии.',
					},
					{
						title: 'Next.js',
						description:
							'Собираю страницы и маршруты с учётом производительности, SEO и удобной структуры проекта.',
					},
					{
						title: 'TypeScript',
						description:
							'Описываю данные и интерфейсы так, чтобы изменения были предсказуемее, а ошибки находились раньше.',
					},
				],
				processTitle: 'Как проходит работа.',
				process: [
					{
						title: 'Фиксирую сценарии',
						description:
							'Определяю страницы, состояния, данные и действия пользователя до реализации компонентов.',
					},
					{
						title: 'Собираю основу',
						description:
							'Настраиваю структуру приложения, общие компоненты и правила работы с данными.',
					},
					{
						title: 'Проверяю поведение',
						description:
							'Тестирую основные сценарии, ошибки, пустые состояния и адаптивность интерфейса.',
					},
				],
				cta: 'Нужен интерфейс на React или развитие существующего frontend-проекта?',
				ctaLabel: 'Обсудить проект',
				backLabel: 'Все услуги',
				backAriaLabel: 'Вернуться ко всем услугам',
				footerLabel: 'Frontend-разработка',
			},
			en: {
				name: 'React development',
				label: 'REACT / NEXT.JS',
				eyebrow: 'Frontend development',
				title: 'Frontend development with React.',
				description:
					'I build interactive interfaces and components that are easy to maintain, test, and evolve with the product.',
				tech: ['REACT', 'NEXT.JS', 'JAVASCRIPT', 'TYPESCRIPT'],
				scopeTitle: 'What is included.',
				scope: [
					{
						title: 'Component architecture',
						description:
							'I divide the interface into clear, reusable parts with well-defined responsibilities.',
					},
					{
						title: 'Interactive logic',
						description:
							'I implement forms, filters, loading states, navigation, and other user flows.',
					},
					{
						title: 'Next.js',
						description:
							'I build pages and routes with performance, SEO, and a clear project structure in mind.',
					},
					{
						title: 'TypeScript',
						description:
							'I describe data and interfaces so changes remain predictable and errors are found earlier.',
					},
				],
				processTitle: 'How the work goes.',
				process: [
					{
						title: 'Define the flows',
						description:
							'I map pages, states, data, and user actions before implementing components.',
					},
					{
						title: 'Build the foundation',
						description:
							'I establish the application structure, shared components, and data conventions.',
					},
					{
						title: 'Verify behavior',
						description:
							'I test core flows, errors, empty states, and responsive interface behavior.',
					},
				],
				cta: 'Need a React interface or help extending an existing frontend project?',
				ctaLabel: 'Discuss a project',
				backLabel: 'All services',
				backAriaLabel: 'Return to all services',
				footerLabel: 'Frontend development',
			},
		},
	},
	'fix-site': {
		metadata: {
			ru: {
				title: 'Доработка HTML, CSS и JavaScript | Imrasts',
				description:
					'Доработка существующих сайтов: исправление HTML, CSS и JavaScript, улучшение адаптивности, интерфейса и поведения компонентов.',
			},
			en: {
				title: 'HTML, CSS and JavaScript Improvements | Imrasts',
				description:
					'Existing website improvements: HTML, CSS, and JavaScript fixes, better responsive behavior, and interface refinements.',
			},
		},
		copy: {
			ru: {
				name: 'Доработка сайта',
				label: 'HTML / CSS / JS',
				eyebrow: 'Поддержка и улучшение',
				title: 'Доработка существующего сайта.',
				description:
					'Подключаюсь к готовому проекту, нахожу причину проблемы и улучшаю интерфейс без ненужной полной пересборки.',
				tech: ['BUG FIX', 'RESPONSIVE', 'UI', 'JAVASCRIPT'],
				scopeTitle: 'С чем можно обратиться.',
				scope: [
					{
						title: 'Ошибки HTML и CSS',
						description:
							'Исправляю сломанную разметку, конфликты стилей, переполнения и визуальные расхождения.',
					},
					{
						title: 'Проблемы на мобильных',
						description:
							'Убираю горизонтальный скролл, чиню сетки, меню, размеры элементов и цели касания.',
					},
					{
						title: 'JavaScript-поведение',
						description:
							'Исправляю события, состояния интерфейса, формы и отдельные интерактивные компоненты.',
					},
					{
						title: 'Развитие страниц',
						description:
							'Добавляю новые блоки и функции, сохраняя текущую архитектуру, стили и логику проекта.',
					},
				],
				processTitle: 'Как проходит работа.',
				process: [
					{
						title: 'Воспроизвожу проблему',
						description:
							'Проверяю текущий результат, браузеры, размеры экрана и условия, при которых появляется ошибка.',
					},
					{
						title: 'Нахожу причину',
						description:
							'Разбираю существующий код и выбираю локальное решение без лишнего влияния на другие страницы.',
					},
					{
						title: 'Исправляю и проверяю',
						description:
							'Вношу изменение, тестирую связанные сценарии и фиксирую, что именно было сделано.',
					},
				],
				cta: 'Покажите страницу и опишите проблему. Оценю, как исправить её без лишних изменений.',
				ctaLabel: 'Обсудить проект',
				backLabel: 'Все услуги',
				backAriaLabel: 'Вернуться ко всем услугам',
				footerLabel: 'Frontend-разработка',
			},
			en: {
				name: 'Website improvements',
				label: 'HTML / CSS / JS',
				eyebrow: 'Support and improvements',
				title: 'Existing website improvements.',
				description:
					'I join an existing project, find the cause of the problem, and improve the interface without an unnecessary rebuild.',
				tech: ['BUG FIX', 'RESPONSIVE', 'UI', 'JAVASCRIPT'],
				scopeTitle: 'What I can help with.',
				scope: [
					{
						title: 'HTML and CSS issues',
						description:
							'I fix broken markup, style conflicts, overflow, and visual inconsistencies.',
					},
					{
						title: 'Mobile problems',
						description:
							'I remove horizontal scrolling and fix grids, menus, element sizing, and touch targets.',
					},
					{
						title: 'JavaScript behavior',
						description:
							'I fix events, interface states, forms, and individual interactive components.',
					},
					{
						title: 'Page development',
						description:
							'I add new sections and features while preserving the project architecture, styles, and logic.',
					},
				],
				processTitle: 'How the work goes.',
				process: [
					{
						title: 'Reproduce the issue',
						description:
							'I check the current result, browsers, viewport sizes, and the conditions that trigger the problem.',
					},
					{
						title: 'Find the cause',
						description:
							'I review the existing code and choose a focused solution with minimal impact on other pages.',
					},
					{
						title: 'Fix and verify',
						description:
							'I make the change, test related flows, and document what was done.',
					},
				],
				cta: 'Show me the page and describe the issue. I will assess the smallest reliable fix.',
				ctaLabel: 'Discuss a project',
				backLabel: 'All services',
				backAriaLabel: 'Return to all services',
				footerLabel: 'Frontend development',
			},
		},
	},
}

export function getServicePage(slug: ServiceSlug, locale: Locale) {
	return servicePages[slug].copy[locale]
}

export function createServiceMetadata(locale: Locale, slug: ServiceSlug): Metadata {
	const page = servicePages[slug].metadata[locale]
	const ruPath = `/${slug}`
	const enPath = `/en/${slug}`
	const url = locale === 'ru' ? ruPath : enPath

	return {
		title: page.title,
		description: page.description,
		alternates: {
			canonical: url,
			languages: { ru: ruPath, en: enPath, 'x-default': ruPath },
		},
		openGraph: {
			title: page.title,
			description: page.description,
			url,
			type: 'website',
			locale: locale === 'ru' ? 'ru_RU' : 'en_US',
			alternateLocale: [locale === 'ru' ? 'en_US' : 'ru_RU'],
			images: ['/og-image.webp'],
		},
		twitter: {
			card: 'summary_large_image',
			title: page.title,
			description: page.description,
			images: ['/og-image.webp'],
		},
	}
}
