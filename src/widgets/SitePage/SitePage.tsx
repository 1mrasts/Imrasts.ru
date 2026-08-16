import type { Locale } from '@/content/site'
import { siteCopy } from '@/content/site'
import Feature from '@/widgets/Feature/Feature'
import Footer from '@/widgets/Footer/Footer'
import Hero from '@/widgets/Hero/Hero'
import Message from '@/widgets/Message/Message'
import Portfolio from '@/widgets/Portfolio/Portfolio'
import SectionReveal from '@/widgets/SectionReveal/SectionReveal'
import Social from '@/widgets/Social/Social'
import Technologies from '@/widgets/Technologies/Technologies'
import Services from '../Services/Services'

export default function SitePage({ locale }: { locale: Locale }) {
	const copy = siteCopy[locale]

	return (
		<main>
			<SectionReveal />
			<Hero copy={copy.hero} />
			<hr className='hr' />
			<Feature copy={copy.features} />
			<hr className='hr' />
			<Services copy={copy.services} />
			<hr className='hr' />
			<Technologies copy={copy.technologies} />
			<hr className='hr' />
			<Portfolio copy={copy.portfolio} />
			<hr className='hr' />
			<Message copy={copy.message} />
			<hr className='hr' />
			<Social copy={copy.social} />
			<Footer label={copy.footer} />
		</main>
	)
}
