export type Locale = 'ru' | 'en'

export type SiteCopy = {
	header: {
		about: string
		stack: string
		portfolio: string
		contacts: string
		languageLabel: string
	}
	hero: {
		eyebrow: string
		titleStrong: string
		titleRest: string
		description: string
		primaryAction: string
		secondaryAction: string
	}
	features: {
		title: string
		description: string
		cards: Array<{ label: string; title: string; description: string }>
	}
	services: {
		title: string
		description: string
		linkLabel: string
		cards: Array<{
			number: string
			label: string
			title: string
			description: string
			href: string
		}>
	}
	technologies: {
		eyebrow: string
		title: string
	}
	portfolio: {
		title: string
		description: string
		projects: Array<{ description: string; linkLabel: string; alt: string }>
	}
	message: {
		title: string
		description: string
		label: string
		placeholder: string
		buttonLabel: string
	}
	social: {
		title: string
		emailSubject: string
	}
	footer: string
}

export const siteCopy: Record<Locale, SiteCopy> = {
	ru: {
		header: {
			about: 'Обо мне',
			stack: 'Стек',
			portfolio: 'Портфолио',
			contacts: 'Контакты',
			languageLabel: 'Выбор языка',
		},
		hero: {
			eyebrow: 'FRONTEND-РАЗРАБОТКА',
			titleStrong: 'Создаю сайты',
			titleRest: ', которыми удобно пользоваться.',
			description:
				'Я Imrasts. Проектирую и разрабатываю адаптивные интерфейсы для реальных бизнес-задач.',
			primaryAction: 'Обсудить проект ↗',
			secondaryAction: 'Смотреть работы',
		},
		features: {
			title: 'Сайт как рабочий инструмент.',
			description:
				'Сохраняю фокус на скорости, доступности и понятном пользовательском пути. Дизайн работает вместе с кодом, а не поверх него.',
			cards: [
				{
					label: 'Core',
					title: 'Веб-разработка от структуры до запуска',
					description:
						'Лендинги и бизнес-сайты, полностью адаптивный дизайн, чистая архитектура интерфейса и код, который можно развивать.',
				},
				{
					label: 'Performance',
					title: 'Быстрая загрузка и SEO-основа',
					description:
						'Оптимизация кода, ресурсов, кэширования и семантики страницы.',
				},
				{
					label: 'Interaction',
					title: 'Интерфейс с ясной обратной связью',
					description:
						'Интерактивные элементы, плавные переходы и доступные состояния управления.',
				},
			],
		},
		services: {
			title: 'Услуги.',
			description:
				'Разрабатываю современные и адаптивные веб-интерфейсы: переношу дизайн из Figma в точную вёрстку, собираю frontend на React и улучшаю уже работающие сайты.',
			linkLabel: 'Подробнее об услуге',
			cards: [
				{
					number: '01',
					label: 'FIGMA → HTML',
					title: 'Вёрстка сайта по макету Figma',
					description:
						'Точная и семантическая реализация дизайна на HTML и CSS.',
					href: '/figma-to-html',
				},
				{
					number: '02',
					label: 'RESPONSIVE',
					title: 'Адаптивная вёрстка лендинга',
					description:
						'Продуманная версия для компьютеров, планшетов и смартфонов.',
					href: '/responsive',
				},
				{
					number: '03',
					label: 'REACT / NEXT.JS',
					title: 'Frontend-разработка на React',
					description:
						'Интерактивные интерфейсы и компоненты на React, Next.js и TypeScript.',
					href: '/react-development',
				},
				{
					number: '04',
					label: 'HTML / CSS / JS',
					title: 'Доработка существующего сайта',
					description:
						'Исправление ошибок, адаптивности и поведения интерфейса без полной переработки.',
					href: '/fix-site',
				},
			],
		},
		technologies: {
			eyebrow: 'ТЕХНОЛОГИИ',
			title: 'Стек без лишнего слоя.',
		},
		portfolio: {
			title: 'Выбранные проекты.',
			description:
				'Четыре интерфейса из текущего портфолио. Каждый решает свою задачу и показывает разный уровень продуктовой сложности.',
			projects: [
				{
					description:
						'Маркетплейс с акцентом на визуальный каталог и понятный путь к коллекциям.',
					linkLabel: 'Открыть репозиторий ↗',
					alt: 'Главная страница NFT Marketplace',
				},
				{
					description:
						'Рабочий интерфейс для учёта времени и расчёта заработка с компактной информационной иерархией.',
					linkLabel: 'Открыть репозиторий ↗',
					alt: 'Главная страница Payday App со всеми открытыми функциями',
				},
				{
					description:
						'Приложение для управления задачами, где состояние, фильтрация и ежедневные действия остаются простыми.',
					linkLabel: 'Открыть репозиторий ↗',
					alt: 'Главная страница Todo App',
				},
				{
					description:
						'Маркетинговая страница с выразительной подачей продукта и адаптивной композицией.',
					linkLabel: 'Смотреть в портфолио Kwork ↗',
					alt: 'Главная страница Sertexity',
				},
			],
		},
		message: {
			title: 'Начнём с короткого сообщения.',
			description:
				'Расскажите в двух словах о задаче — обсудим детали и найдём подходящее решение.',
			label: 'Сообщение для Imrasts',
			placeholder: 'Привет, я хочу обсудить сайт...',
			buttonLabel: 'Открыть Telegram',
		},
		social: {
			title: 'Есть задача? Давайте обсудим.',
			emailSubject: 'Заказ',
		},
		footer: 'Frontend-разработка',
	},
	en: {
		header: {
			about: 'About',
			stack: 'Stack',
			portfolio: 'Portfolio',
			contacts: 'Contacts',
			languageLabel: 'Choose language',
		},
		hero: {
			eyebrow: 'FRONTEND DEVELOPMENT',
			titleStrong: 'I build websites',
			titleRest: ' that are easy to use.',
			description:
				'I’m Imrasts. I design and develop responsive interfaces for real business needs.',
			primaryAction: 'Discuss a project ↗',
			secondaryAction: 'View my work',
		},
		features: {
			title: 'A website built as a working tool.',
			description:
				'I focus on speed, accessibility, and a clear user journey. Design works together with the code, not on top of it.',
			cards: [
				{
					label: 'Core',
					title: 'Web development from structure to launch',
					description:
						'Landing pages and business websites with fully responsive design, clean interface architecture, and maintainable code.',
				},
				{
					label: 'Performance',
					title: 'Fast loading and a solid SEO foundation',
					description:
						'Optimization of code, assets, caching, and page semantics.',
				},
				{
					label: 'Interaction',
					title: 'Interfaces with clear feedback',
					description:
						'Interactive elements, smooth transitions, and accessible control states.',
				},
			],
		},
		services: {
			title: 'Services.',
			description:
				'I build modern, responsive web interfaces: turning Figma designs into precise markup, developing frontends with React, and improving existing websites.',
			linkLabel: 'Learn more about this service',
			cards: [
				{
					number: '01',
					label: 'FIGMA → HTML',
					title: 'Website development from a Figma design',
					description:
						'Precise, semantic implementation of a design with HTML and CSS.',
					href: '/en/figma-to-html',
				},
				{
					number: '02',
					label: 'RESPONSIVE',
					title: 'Responsive landing page development',
					description:
						'Carefully designed for desktops, tablets, and smartphones.',
					href: '/en/responsive',
				},
				{
					number: '03',
					label: 'REACT / NEXT.JS',
					title: 'Frontend development with React',
					description:
						'Interactive interfaces and components built with React, Next.js, and TypeScript.',
					href: '/en/react-development',
				},
				{
					number: '04',
					label: 'HTML / CSS / JS',
					title: 'Existing website improvements',
					description:
						'Fixing bugs, responsiveness, and interface behavior without a full rebuild.',
					href: '/en/fix-site',
				},
			],
		},
		technologies: {
			eyebrow: 'TECHNOLOGIES',
			title: 'A focused technology stack.',
		},
		portfolio: {
			title: 'Selected projects.',
			description:
				'Four interfaces from my current portfolio. Each solves a different problem and demonstrates a different level of product complexity.',
			projects: [
				{
					description:
						'A marketplace focused on a visual catalog and a clear path to discovering collections.',
					linkLabel: 'Open repository ↗',
					alt: 'NFT Marketplace home page',
				},
				{
					description:
						'A practical interface for tracking time and calculating earnings, with a compact information hierarchy.',
					linkLabel: 'Open repository ↗',
					alt: 'Payday App home page with all features visible',
				},
				{
					description:
						'A task management app that keeps state, filtering, and everyday actions simple.',
					linkLabel: 'Open repository ↗',
					alt: 'Todo App home page',
				},
				{
					description:
						'A marketing page with expressive product presentation and a responsive composition.',
					linkLabel: 'View on Kwork ↗',
					alt: 'Sertexity home page',
				},
			],
		},
		message: {
			title: 'Let’s start with a short message.',
			description:
				'Tell me briefly about your project — we’ll discuss the details and find the right solution.',
			label: 'Message for Imrasts',
			placeholder: 'Hi, I’d like to discuss a website...',
			buttonLabel: 'Open Telegram',
		},
		social: {
			title: 'Have a project? Let’s talk.',
			emailSubject: 'Project inquiry',
		},
		footer: 'Frontend development',
	},
}
