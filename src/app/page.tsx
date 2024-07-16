import AboutUs from '@/app/AboutUs'
import Hero from '@/app/Hero'
import Products from '@/app/Products'
import Blogs from '@/app/Blogs'

export default function Home() {
	return (
		<main className='space-y-5'>
			<Hero />
			<AboutUs />
			<Products />
			<Blogs />
		</main>
	)
}
