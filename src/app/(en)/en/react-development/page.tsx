import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('en', 'react-development')

export default function ReactDevelopmentPage() {
	return <ServicePage locale='en' slug='react-development' />
}
