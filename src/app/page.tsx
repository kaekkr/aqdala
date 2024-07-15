import AboutUs from '@/app/AboutUs'
import Hero from '@/app/Hero'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='space-y-5'>
			<Hero />
			<AboutUs />
		</main>
	)
}
