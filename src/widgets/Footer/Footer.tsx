export default function Footer({ label }: { label: string }) {
	return (
		<footer className='container'>
			<h6>Imrasts</h6>
			<h6>{label}</h6>
		</footer>
	)
}
