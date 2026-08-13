import styles from './Social.module.css'

export default function Social() {
	return (
		<section className='container mt-160 mb-100 section'>
			<div className='block__title--small'>
				<h2>Есть задача? Давайте обсудим.</h2>
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
					href='mailto:imrasts.mail@gmail.com?subject=Заказ'
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
