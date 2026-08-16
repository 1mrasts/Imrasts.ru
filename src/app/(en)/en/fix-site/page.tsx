import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('en', 'fix-site')

export default function FixSitePage() {
	return <ServicePage locale='en' slug='fix-site' />
}
