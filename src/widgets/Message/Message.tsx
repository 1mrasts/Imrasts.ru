'use client'
import styles from './Message.module.css'

export default function Message() {
	return (
		<section className='container mt-160 mb-100 section section--center'>
			<div className='block__title block__title--small'>
				<h2>Начнём с короткого сообщения.</h2>
				<p>
					Расскажите в двух словах о задаче — обсудим детали и найдём подходящее
					решение.
				</p>
			</div>
			<div className={styles['message__container']}>
				<div className={styles['message__input']}>
					<p className='chat'>Сообщение для Imrasts</p>
					<div className={styles['message__input-interaction']}>
						<input type='text' placeholder='Привет, я хочу обсудить сайт...' />
						<button
							onClick={() => window.open('https://t.me/imrasts', '_blank')}
							className='button button--accent'
						>
							↗
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
