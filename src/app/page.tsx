import Feature from '@/widgets/Feature/Feature'
import Header from '@/widgets/Header/Header'
import Hero from '@/widgets/Hero/Hero'
import Message from '@/widgets/Message/Message'
import Portfolio from '@/widgets/Portfolio/Portfolio'
import Social from '@/widgets/Social/Social'
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
			<hr className='hr' />
			<Portfolio />
			<hr className='hr' />
			<Message />
			<hr className='hr' />
			<Social />
		</main>
	)
}
