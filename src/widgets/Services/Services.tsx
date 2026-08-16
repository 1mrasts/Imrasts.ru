import Link from 'next/link'
import type { SiteCopy } from '@/content/site'
import styles from './Services.module.css'

export default function Services({ copy }: { copy: SiteCopy['services'] }) {
	return (
		<section
			id='services'
			data-reveal-section
			className='container mt-160 mb-100 section--column'
		>
			<div className='block__title block__title--small'>
				<h2>{copy.title}</h2>
				<p>{copy.description}</p>
			</div>

			<div className={styles.services__list}>
				{copy.cards.map((card, cardIndex) => (
					<article
						className={`${styles.service__block} ${
							cardIndex % 2 === 0 ? styles['service__block-main'] : ''
						}`}
						key={card.number}
					>
						<div className={styles.service__tags}>
							<p className='console-small'>{card.number}</p>
							<p className='console-small'>{card.label}</p>
						</div>

						<div className={styles.service__text}>
							<div className={styles.service__text_main}>
								<h5>{card.title}</h5>
								<p>{card.description}</p>
							</div>

							<Link className='console' href={card.href}>
								{copy.linkLabel} <span aria-hidden='true'>↗</span>
							</Link>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
