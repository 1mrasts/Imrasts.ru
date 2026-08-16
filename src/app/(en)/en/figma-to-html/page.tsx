import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('en', 'figma-to-html')

export default function FigmaToHtmlPage() {
	return <ServicePage locale='en' slug='figma-to-html' />
}
