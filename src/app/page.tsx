import Feature from '@/widgets/Feature/Feature'
import Header from '@/widgets/Header/Header'
import Hero from '@/widgets/Hero/Hero'
import Technologies from '@/widgets/Technologies/Technologies'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Hero />
			<hr className='hr' />
			<Feature />
			<hr className='hr' />
			<Technologies />
		</main>
	)
}
