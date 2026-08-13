import styles from './Technologies.module.css'

export default function Technologies() {
	return (
		<section className={`container mt-160 mb-100 section`}>
			<div className='block__title'>
				<h6>ТЕХНОЛОГИИ</h6>
				<h2>Стек без лишнего слоя.</h2>
			</div>
			<div className={styles['technologies__list']}>
				<div className={styles['technologies__card']}>
					<p>
						<b>Interface</b>
					</p>
					<p>HTML5, CSS, SCSS, Tailwind CSS</p>
				</div>
				<div className={styles['technologies__card']}>
					<p>
						<b>Logic</b>
					</p>
					<p>JavaScript, TypeScript</p>
				</div>
				<div className={styles['technologies__card']}>
					<p>
						<b>Product</b>
					</p>
					<p>React, React Router, Redux</p>
				</div>
				<div className={styles['technologies__card']}>
					<p>
						<b>Workflow</b>
					</p>
					<p>Git, GitHub, Vite, VS Code</p>
				</div>
				<div className={styles['technologies__card']}>
					<p>
						<b>Design</b>
					</p>
					<p>Figma, responsive systems, accessibility</p>
				</div>
			</div>
		</section>
	)
}
