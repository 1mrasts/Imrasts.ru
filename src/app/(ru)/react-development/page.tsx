import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('ru', 'react-development')

export default function ReactDevelopmentPage() {
	return <ServicePage locale='ru' slug='react-development' />
}
