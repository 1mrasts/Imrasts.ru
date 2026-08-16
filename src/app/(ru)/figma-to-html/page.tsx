import { createServiceMetadata } from '@/content/service-pages'
import ServicePage from '@/widgets/ServicePage/ServicePage'

export const metadata = createServiceMetadata('ru', 'figma-to-html')

export default function FigmaToHtmlPage() {
	return <ServicePage locale='ru' slug='figma-to-html' />
}
