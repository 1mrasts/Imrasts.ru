import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('en', 'responsive')

export default function ResponsivePage() {
	return <ServicePage locale='en' slug='responsive' />
}
