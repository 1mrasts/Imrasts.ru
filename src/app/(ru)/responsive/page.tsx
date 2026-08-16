import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('ru', 'responsive')

export default function ResponsivePage() {
	return <ServicePage locale='ru' slug='responsive' />
}
