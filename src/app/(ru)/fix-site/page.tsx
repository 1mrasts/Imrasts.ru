import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('ru', 'fix-site')

export default function FixSitePage() {
	return <ServicePage locale='ru' slug='fix-site' />
}
