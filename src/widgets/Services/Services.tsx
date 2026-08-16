import type { SiteCopy } from '@/content/site'
import styles from './Services.module.css'

export default function Services({ copy }: { copy: SiteCopy['services'] }) {
	const columns = [
		[copy.cards[0], copy.cards[2]],
		[copy.cards[1], copy.cards[3]],
	]

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
				{columns.map((cards, columnIndex) => (
					<div className={styles.services__column} key={columnIndex}>
						{cards.map(card => (
							<article
								className={`${styles.service__block} ${
									columnIndex === 0 ? styles['service__block-main'] : ''
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

									<a className='console' href={card.href}>
										{copy.linkLabel} <span aria-hidden='true'>↗</span>
									</a>
								</div>
							</article>
						))}
					</div>
				))}
			</div>
		</section>
	)
}
