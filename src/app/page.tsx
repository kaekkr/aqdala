import AboutUs from '@/app/about-us/AboutUs'
import Hero from '@/app/Hero'
import Blogs from '@/app/blogs/Blogs'
import Products from '@/app/products/Products'
import HeroMobile from '@/app/HeroMobile'
import AboutUsMobile from '@/app/about-us/_mobile/AboutUsMobile'
import ProductsMobile from '@/app/products/ProductsMobile'
import BlogsMobile from '@/app/blogs/BlogsMobile'

const Home = () => {
	return (
		<main className='w-[344px] md:w-[1112px] mx-auto'>
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
