'use client'

import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
	const [language, setLanguage] = useState<'RU' | 'EN'>('RU')

	return (
		<header>
			<div className='container header'>
				<p>
					imr<span>а́</span>sts
				</p>

				<nav>
					<ul>
						<li>
							<a href='#'>Обо мне</a>
						</li>
						<li>
							<a href='#'>Стек</a>
						</li>
						<li>
							<a href='#'>Портфолио</a>
						</li>
						<li>
							<a href='#'>Контакты</a>
						</li>
					</ul>
					<div
						className={styles['header__button']}
						role='group'
						aria-label='Выбор языка'
					>
						<span
							className={styles['header__button-background']}
							data-position={language === 'RU' ? 'first' : 'second'}
							aria-hidden='true'
						/>
						{(['RU', 'EN'] as const).map(value => (
							<button
								key={value}
								type='button'
								className={styles['header__button-side']}
								data-active={language === value}
								aria-pressed={language === value}
								onClick={() => setLanguage(value)}
							>
								{value}
							</button>
						))}
					</div>
				</nav>
			</div>
			<hr className='hr' />
		</header>
	)
}
