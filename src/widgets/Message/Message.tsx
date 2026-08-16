'use client'
import type { SiteCopy } from '@/content/site'
import styles from './Message.module.css'

export default function Message({ copy }: { copy: SiteCopy['message'] }) {
	return (
		<section
			id='message'
			data-reveal-section
			className='container mt-160 mb-100 section section--center'
		>
			<div className='block__title block__title--small'>
				<h2>{copy.title}</h2>
				<p>{copy.description}</p>
			</div>
			<div className={styles['message__container']}>
				<div className={styles['message__input']}>
					<p className='chat'>{copy.label}</p>
					<div className={styles['message__input-interaction']}>
						<input type='text' placeholder={copy.placeholder} />
						<button
							onClick={() => window.open('https://t.me/imrasts', '_blank')}
							className='button button--accent'
							aria-label={copy.buttonLabel}
						>
							↗
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
