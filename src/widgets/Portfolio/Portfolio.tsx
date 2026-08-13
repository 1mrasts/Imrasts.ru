import type { SiteCopy } from '@/content/site'
import Image from 'next/image'
import nft from '../../assets/nft.png'
import payday from '../../assets/payday.png'
import sertexity from '../../assets/sertexity.png'
import todo from '../../assets/todo.png'
import styles from './Portfolio.module.css'

const projects = [
	{
		image: nft,
		label: 'React landing',
		title: 'NFT Marketplace',
		href: 'https://github.com/1mrasts/Nft-Marketplace-Landing',
	},
	{
		image: payday,
		label: 'Product interface',
		title: 'Payday App',
		href: 'https://github.com/1mrasts/Payday-App',
	},
	{
		image: todo,
		label: 'Redux application',
		title: 'Todo with Redux',
		href: 'https://github.com/1mrasts/Todo-App-with-Redux',
	},
	{
		image: sertexity,
		label: 'Marketing website',
		title: 'Sertexity',
		href: 'https://kwork.ru/portfolio/22942120',
	},
]

export default function Portfolio({ copy }: { copy: SiteCopy['portfolio'] }) {
	return (
		<section className={`container mt-160 mb-100 section--column`}>
			<div className='block__title'>
				<h2>{copy.title}</h2>
				<p>{copy.description}</p>
			</div>
			<div className={styles['portfolio__list']}>
				{projects.map((project, index) => {
					const localizedProject = copy.projects[index]
					return (
						<div
							className={
								index % 2 === 0
									? styles['portfolio__card']
									: styles['portfolio__card--reversed']
							}
							key={project.title}
						>
							<Image src={project.image} alt={localizedProject.alt} />
							<div className={styles['portfolio__text']}>
								<p className='console'>{project.label}</p>
								<h4>{project.title}</h4>
								<p>{localizedProject.description}</p>
								<a href={project.href}>{localizedProject.linkLabel}</a>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
