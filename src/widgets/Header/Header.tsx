import type { Locale, SiteCopy } from '@/content/site'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header({
	locale,
	copy,
}: {
	locale: Locale
	copy: SiteCopy['header']
}) {
	return (
		<header>
			<div className='container header'>
				<Link className={styles['header__logo']} href={locale === 'ru' ? '/' : '/en'}>
					imr<span>а́</span>sts
				</Link>

				<nav aria-label={locale === 'ru' ? 'Основная навигация' : 'Primary navigation'}>
					<ul>
						<li>
							<a href='#about'>{copy.about}</a>
						</li>
						<li>
							<a href='#stack'>{copy.stack}</a>
						</li>
						<li>
							<a href='#portfolio'>{copy.portfolio}</a>
						</li>
						<li>
							<a href='#contacts'>{copy.contacts}</a>
						</li>
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
							href='/'
							hrefLang='ru'
							className={styles['header__button-side']}
							data-active={locale === 'ru'}
							aria-current={locale === 'ru' ? 'page' : undefined}
						>
							RU
						</Link>
						<Link
							href='/en'
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
