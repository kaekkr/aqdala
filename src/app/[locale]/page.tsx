import Hero from '@/app/[locale]/Hero'
import HeroMobile from '@/app/[locale]/HeroMobile'
import AboutUs from '@/app/[locale]/about-us/AboutUs'
import AboutUsMobile from '@/app/[locale]/about-us/_mobile/AboutUsMobile'
import Blogs from '@/app/[locale]/blogs/Blogs'
import BlogsMobile from '@/app/[locale]/blogs/_mobile/BlogsMobile'
import Products from '@/app/[locale]/products/Products'
import ProductsMobile from '@/app/[locale]/products/_mobile/ProductsMobile'

const Home = () => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<Hero />
			<HeroMobile />
			<AboutUs />
			<AboutUsMobile />
			<Products />
			<ProductsMobile />
			<Blogs />
			<BlogsMobile />
		</main>
	)
}

export default Home
