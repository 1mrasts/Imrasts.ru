import { inconsolataRus, inter } from '@/app/fonts'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './zeroing.css'
import styles from './not-found.module.css'

export const metadata: Metadata = {
	title: 'Страница не найдена | Imrasts',
	description: 'Такой страницы нет. Вернитесь на главную страницу Imrasts.',
}

export default function GlobalNotFound() {
	return (
		<html lang='ru' className={`${inter.variable} ${inconsolataRus.variable}`}>
			<body className={styles.body}>
				<div className={styles.page}>
					<header className={styles.header}>
						<Link className={styles.logo} href='/' aria-label='Imrasts, на главную'>
							imr<span>á</span>sts
						</Link>
						<p className={styles.code}>Ошибка 404</p>
					</header>

					<main className={styles.main}>
						<div className={styles.art} aria-hidden='true'>
							<Image
								src='/404-void.webp'
								alt=''
								fill
								priority
								sizes='(max-width: 767px) 100vw, 72vw'
								className={styles.image}
							/>
						</div>

						<section className={styles.content} aria-labelledby='not-found-title'>
							<p className={styles.eyebrow}>Маршрут не найден</p>
							<h1 id='not-found-title'>
								Здесь ничего
								<br />
								не найдено<span>.</span>
							</h1>
							<p className={styles.description}>
								Возможно, адрес изменился или в ссылке есть ошибка.
							</p>
							<Link className={styles.action} href='/'>
								<span>Вернуться на главную</span>
								<span className={styles.arrow} aria-hidden='true'>
									↗
								</span>
							</Link>
						</section>

						<p className={styles.number} aria-hidden='true'>
							404
						</p>
					</main>
				</div>
			</body>
		</html>
	)
}
