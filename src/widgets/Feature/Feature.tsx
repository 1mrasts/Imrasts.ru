import styles from './Feature.module.css'

export default function Feature() {
	return (
		<section className='container mt-160 mb-100 block'>
			<div className='block__title'>
				<h2>Сайт как рабочий инструмент.</h2>
				<p>
					Сохраняю фокус на скорости, доступности и понятном пользовательском
					пути. Дизайн работает вместе с кодом, а не поверх него.
				</p>
			</div>
			<div className={styles['feature__blocks']}>
				<div
					className={`${styles['feature__block']} ${styles['feature__block-main']}`}
				>
					<p className='console-small'>Core</p>
					<div className={styles['feature__text-main']}>
						<h5>Веб-разработка от структуры до запуска</h5>
						<p>
							Лендинги и бизнес-сайты, полностью адаптивный дизайн, чистая
							архитектура интерфейса и код, который можно развивать.
						</p>
					</div>
				</div>
				<div className={styles['feature__block-side']}>
					<div className={styles['feature__block']}>
						<p className='console-small'>Performance</p>
						<div className={styles['feature__text']}>
							<h5>Быстрая загрузка и SEO&#8288;-&#8288;основа</h5>
							<p>
								Оптимизация кода, ресурсов, кэширования и семантики страницы.
							</p>
						</div>
					</div>
					<div className={styles['feature__block']}>
						<p className='console-small'>Interaction</p>
						<div className={styles['feature__text']}>
							<h5>Интерфейс с ясной обратной связью</h5>
							<p>
								Интерактивные элементы, плавные переходы и доступные состояния
								управления.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
