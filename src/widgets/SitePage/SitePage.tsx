import type { Locale } from '@/content/site'
import { siteCopy } from '@/content/site'
import Feature from '@/widgets/Feature/Feature'
import Footer from '@/widgets/Footer/Footer'
import Header from '@/widgets/Header/Header'
import Hero from '@/widgets/Hero/Hero'
import Message from '@/widgets/Message/Message'
import Portfolio from '@/widgets/Portfolio/Portfolio'
import Social from '@/widgets/Social/Social'
import Technologies from '@/widgets/Technologies/Technologies'

export default function SitePage({ locale }: { locale: Locale }) {
	const copy = siteCopy[locale]

	return (
		<main id='about'>
			<Header locale={locale} copy={copy.header} />
			<Hero copy={copy.hero} />
			<hr className='hr' />
			<Feature copy={copy.features} />
			<hr className='hr' id='stack' />
			<Technologies copy={copy.technologies} />
			<hr className='hr' id='portfolio' />
			<Portfolio copy={copy.portfolio} />
			<hr className='hr' />
			<Message copy={copy.message} />
			<hr className='hr' />
			<Social copy={copy.social} />
			<Footer label={copy.footer} />
		</main>
	)
}
