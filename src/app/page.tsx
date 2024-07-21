import AboutUs from '@/app/AboutUs'
import Hero from '@/app/Hero'
import Blogs from '@/app/blogs/Blogs'
import Products from '@/app/products/Products'

const Home = () => {
    return (
        <main className='space-y-5 w-[1112px] mx-auto'>
            <Hero/>
            <AboutUs/>
            <Products/>
            <Blogs/>
        </main>
    )
}

export default Home;
