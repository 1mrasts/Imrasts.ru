import Image from 'next/image'
import nft from '../../assets/nft.png'
import payday from '../../assets/payday.png'
import sertexity from '../../assets/sertexity.png'
import todo from '../../assets/todo.png'
import styles from './Portfolio.module.css'

export default function Portfolio() {
	return (
		<section className={`container mt-160 mb-100 section--column`}>
			<div className='block__title'>
				<h2>Выбранные проекты.</h2>
				<p>
					Четыре интерфейса из текущего портфолио. Каждый решает свою задачу и
					показывает разный уровень продуктовой сложности.
				</p>
			</div>
			<div className={styles['portfolio__list']}>
				<div className={styles['portfolio__card']}>
					<Image src={nft} alt='Главная страница NFT Marketplace' />
					<div className={styles['portfolio__text']}>
						<p className='console'>React landing</p>
						<h4>NFT&nbsp;Marketplace</h4>
						<p>
							Маркетплейс с акцентом на визуальный каталог и понятный путь к
							коллекциям.
						</p>
						<a href='https://github.com/1mrasts/Nft-Marketplace-Landing'>
							Открыть репозиторий ↗
						</a>
					</div>
				</div>
				<div className={styles['portfolio__card--reversed']}>
					<Image
						src={payday}
						alt='Главная страница Payday-App со всеми открытыми функциями'
					/>
					<div className={styles['portfolio__text']}>
						<p className='console'>Product interface</p>
						<h4>Payday App</h4>
						<p>
							Рабочий интерфейс для учёта времени и расчёта заработка с
							компактной информационной иерархией.
						</p>
						<a href='https://github.com/1mrasts/Payday-App'>
							Открыть репозиторий ↗
						</a>
					</div>
				</div>
				<div className={styles['portfolio__card']}>
					<Image src={todo} alt='Главная страница Todo App' />
					<div className={styles['portfolio__text']}>
						<p className='console'>Redux application</p>
						<h4>Todo with Redux</h4>
						<p>
							Приложение для управления задачами, где состояние, фильтрация и
							ежедневные действия остаются простыми.
						</p>
						<a href='https://github.com/1mrasts/Todo-App-with-Redux'>
							Открыть репозиторий ↗
						</a>
					</div>
				</div>
				<div className={styles['portfolio__card--reversed']}>
					<Image src={sertexity} alt='Главная страница Sertexity' />
					<div className={styles['portfolio__text']}>
						<p className='console'>Marketing website</p>
						<h4>Sertexity</h4>
						<p>
							Маркетинговая страница с выразительной подачей продукта и
							адаптивной композицией.
						</p>
						<a href='https://kwork.ru/portfolio/22942120'>
							Смотреть в портфолио Kwork ↗
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
