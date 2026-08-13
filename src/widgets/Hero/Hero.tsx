import styles from './Hero.module.css'

export default function Hero() {
	return (
		<section className={`container mt-60 mb-100 ${styles['hero']}`}>
			<div className={styles['hero__text']}>
				<h6>FRONTEND-РАЗРАБОТКА</h6>
				<h1>
					<b>Создаю сайты</b>, которыми удобно пользоваться.
				</h1>
				<p>
					Я Imrasts. Проектирую и разрабатываю адаптивные интерфейсы
					<br /> для реальных бизнес-задач.
				</p>
				<div className={styles['hero__buttons']}>
					<button className='button button--accent'>Обсудить проект ↗</button>
					<button className='button'>Смотреть работы</button>
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
