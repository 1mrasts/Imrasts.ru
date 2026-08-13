import type { SiteCopy } from '@/content/site'
import styles from './Feature.module.css'

export default function Feature({ copy }: { copy: SiteCopy['features'] }) {
	const [mainCard, ...sideCards] = copy.cards

	return (
		<section className='container mt-160 mb-100 block'>
			<div className='block__title'>
				<h2>{copy.title}</h2>
				<p>{copy.description}</p>
			</div>
			<div className={styles['feature__blocks']}>
				<div
					className={`${styles['feature__block']} ${styles['feature__block-main']}`}
				>
					<p className='console-small'>{mainCard.label}</p>
					<div className={styles['feature__text-main']}>
						<h5>{mainCard.title}</h5>
						<p>{mainCard.description}</p>
					</div>
				</div>
				<div className={styles['feature__block-side']}>
					{sideCards.map(card => (
						<div className={styles['feature__block']} key={card.label}>
							<p className='console-small'>{card.label}</p>
							<div className={styles['feature__text']}>
								<h5>{card.title}</h5>
								<p>{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
