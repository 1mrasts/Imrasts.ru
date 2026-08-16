'use client'

import { useEffect } from 'react'

const selector = '[data-reveal-section]'

export default function SectionReveal() {
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>(selector))
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (reduceMotion || !('IntersectionObserver' in window)) {
			sections.forEach(section => section.dataset.revealState = 'visible')
			return
		}

		const observers = sections.map(section => {
			const sectionHeight = Math.max(section.getBoundingClientRect().height, 1)
			const viewportShare = (window.innerHeight * 0.2) / sectionHeight
			const threshold = Math.min(0.2, viewportShare)

			section.dataset.revealState = 'pending'

			const observer = new IntersectionObserver(
				entries => {
					const entry = entries[0]

					if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
						section.dataset.revealState = 'visible'
						observer.unobserve(section)
					}
				},
				{ threshold },
			)

			observer.observe(section)
			return observer
		})

		return () => observers.forEach(observer => observer.disconnect())
	}, [])

	return null
}
