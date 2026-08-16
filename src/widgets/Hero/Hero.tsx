import type { SiteCopy } from '@/content/site'
import styles from './Hero.module.css'

export default function Hero({ copy }: { copy: SiteCopy['hero'] }) {
	return (
		<section
			id='about'
			data-reveal-section
			className={`container mt-60 mb-100 ${styles['hero']}`}
		>
			<div className={styles['hero__text']}>
				<h6>{copy.eyebrow}</h6>
				<h1>
					<b>{copy.titleStrong}</b>
					{copy.titleRest}
				</h1>
				<p>{copy.description}</p>
				<div className={styles['hero__buttons']}>
					<a className='button button--accent' href='#message'>
						{copy.primaryAction}
					</a>
					<a className='button' href='#portfolio'>
						{copy.secondaryAction}
					</a>
				</div>
			</div>
			<aside className={styles['hero__tech']}>
				<div className={styles['hero__tech-screen']}>
					<ul>
						<li>
							<h3>React</h3>
						</li>
						<li>
							<h3>TypeScript</h3>
						</li>
						<li>
							<h3>
								<span>Interface</span>
							</h3>
						</li>
						<hr className='hr-col' />
					</ul>
				</div>
			</aside>
		</section>
	)
}
