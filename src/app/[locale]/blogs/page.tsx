import Blogs2 from '@/app/[locale]/blogs/Blogs2'
import Blogs2Mobile from '@/app/[locale]/blogs/_mobile/Blogs2Mobile'

const BlogsPage = async () => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<Blogs2 />
			<Blogs2Mobile />
		</main>
	)
}

export default BlogsPage
