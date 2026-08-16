import type { SiteCopy } from '@/content/site'
import styles from './Social.module.css'

export default function Social({ copy }: { copy: SiteCopy['social'] }) {
	return (
		<section
			id='contacts'
			data-reveal-section
			className='container mt-160 mb-100 section'
		>
			<div className='block__title--small'>
				<h2>{copy.title}</h2>
			</div>
			<div className={styles['social__list']}>
				<a className={styles['social__card']} href='https://t.me/imrasts'>
					<p>Telegram</p> <p>↗</p>
				</a>
				<a className={styles['social__card']} href='https://github.com/1mrasts'>
					<p>Github</p> <p>↗</p>
				</a>
				<a
					className={styles['social__card']}
					href={`mailto:imrasts.mail@gmail.com?subject=${encodeURIComponent(copy.emailSubject)}`}
				>
					<p>Email</p> <p>↗</p>
				</a>
				<a
					className={styles['social__card']}
					href='https://kwork.ru/user/1mrasts'
				>
					<p>Kwork</p> <p>↗</p>
				</a>
			</div>
		</section>
	)
}
