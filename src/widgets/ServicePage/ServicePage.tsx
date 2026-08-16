import { getServicePage, type ServiceSlug } from '@/content/service-pages'
import type { Locale } from '@/content/site'
import Footer from '@/widgets/Footer/Footer'
import SectionReveal from '@/widgets/SectionReveal/SectionReveal'
import Link from 'next/link'
import styles from './ServicePage.module.css'

export default function ServicePage({
	locale,
	slug,
}: {
	locale: Locale
	slug: ServiceSlug
}) {
	const copy = getServicePage(slug, locale)
	const home = locale === 'ru' ? '/' : '/en'

	return (
		<main className={styles.page}>
			<SectionReveal />

			<nav
				className={`container ${styles.serviceNav}`}
				aria-label={copy.backAriaLabel}
			>
				<Link className={styles.serviceNav__back} href={`${home}#services`}>
					<span aria-hidden='true'>←</span> {copy.backLabel}
				</Link>
				<span className={`console-small ${styles.serviceNav__label}`}>
					{copy.label}
				</span>
			</nav>

			<section
				id='service'
				className={`container ${styles.hero}`}
				data-reveal-section
				data-service={slug}
				aria-labelledby={`${slug}-title`}
			>
				<div className={styles.hero__title}>
					<p className={`console-small ${styles.hero__eyebrow}`}>
						{copy.eyebrow}
					</p>
					<h1 id={`${slug}-title`}>{copy.title}</h1>
				</div>
				<div className={styles.hero__aside}>
					<p className={styles.hero__description}>{copy.description}</p>
					<ul className={styles.hero__tech} aria-label={copy.label}>
						{copy.tech.map(item => (
							<li className='console-small' key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</section>

			<hr className='hr' />

			<section
				id='scope'
				className={`container ${styles.scope}`}
				data-reveal-section
				aria-labelledby={`${slug}-scope-title`}
			>
				<h2 id={`${slug}-scope-title`}>{copy.scopeTitle}</h2>
				<div className={styles.scope__grid}>
					{copy.scope.map((item, index) => (
						<article className={styles.scope__item} key={item.title}>
							<span
								className={`console-small ${styles.scope__number}`}
								aria-hidden='true'
							>
								{String(index + 1).padStart(2, '0')}
							</span>
							<div className={styles.scope__copy}>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<hr className='hr' />

			<section
				id='process'
				className={`container ${styles.process}`}
				data-reveal-section
				aria-labelledby={`${slug}-process-title`}
			>
				<h2 id={`${slug}-process-title`}>{copy.processTitle}</h2>
				<ol className={styles.process__list}>
					{copy.process.map((item, index) => (
						<li key={item.title}>
							<span className={`console-small ${styles.process__number}`}>
								{String(index + 1).padStart(2, '0')}
							</span>
							<div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</li>
					))}
				</ol>
			</section>

			<hr className='hr' />

			<section
				id='contacts'
				className={`container ${styles.cta}`}
				data-reveal-section
			>
				<h2>{copy.cta}</h2>
				<a
					className='button button--accent'
					href='https://t.me/imrasts'
					target='_blank'
					rel='noreferrer'
				>
					{copy.ctaLabel} <span aria-hidden='true'>↗</span>
				</a>
			</section>

			<Footer label={copy.footerLabel} />
		</main>
	)
}
