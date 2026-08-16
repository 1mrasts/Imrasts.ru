'use client'

import type { Locale, SiteCopy } from '@/content/site'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header({
	locale,
	copy,
}: {
	locale: Locale
	copy: SiteCopy['header']
}) {
	const pathname = usePathname()
	const localizedHome = locale === 'ru' ? '/' : '/en'
	const servicePath = pathname.startsWith('/en') ? pathname.slice(3) || '/' : pathname
	const russianPath = servicePath
	const englishPath = servicePath === '/' ? '/en' : `/en${servicePath}`
	const routeSlug = servicePath.split('/').filter(Boolean)[0]
	const isServicePage = [
		'figma-to-html',
		'responsive',
		'react-development',
		'fix-site',
	].includes(routeSlug)
	const navigation = isServicePage
		? locale === 'ru'
			? [
					{ label: 'Услуга', href: '#service' },
					{ label: 'Что входит', href: '#scope' },
					{ label: 'Процесс', href: '#process' },
					{ label: 'Контакты', href: '#contacts' },
				]
			: [
					{ label: 'Service', href: '#service' },
					{ label: 'Scope', href: '#scope' },
					{ label: 'Process', href: '#process' },
					{ label: 'Contacts', href: '#contacts' },
				]
		: [
				{ label: copy.about, href: `${localizedHome}#about` },
				{ label: copy.stack, href: `${localizedHome}#stack` },
				{ label: copy.portfolio, href: `${localizedHome}#portfolio` },
				{ label: copy.contacts, href: `${localizedHome}#contacts` },
			]

	return (
		<header>
			<div className='container header'>
				<Link className={styles['header__logo']} href={locale === 'ru' ? '/' : '/en'}>
					imr<span>а́</span>sts
				</Link>

				<nav aria-label={locale === 'ru' ? 'Основная навигация' : 'Primary navigation'}>
					<ul>
						{navigation.map(item => (
							<li key={item.href}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					<div
						className={styles['header__button']}
						role='group'
						aria-label={copy.languageLabel}
					>
						<span
							className={styles['header__button-background']}
							data-position={locale === 'ru' ? 'first' : 'second'}
							aria-hidden='true'
						/>
						<Link
							href={russianPath}
							hrefLang='ru'
							className={styles['header__button-side']}
							data-active={locale === 'ru'}
							aria-current={locale === 'ru' ? 'page' : undefined}
						>
							RU
						</Link>
						<Link
							href={englishPath}
							hrefLang='en'
							className={styles['header__button-side']}
							data-active={locale === 'en'}
							aria-current={locale === 'en' ? 'page' : undefined}
						>
							EN
						</Link>
					</div>
				</nav>
			</div>
			<hr className='hr' />
		</header>
	)
}
