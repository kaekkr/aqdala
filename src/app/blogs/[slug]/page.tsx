import Blog from '@/app/blogs/[slug]/Blog'
import BlogMobile from '@/app/blogs/[slug]/BlogMobile'

interface IBlogPage {
	params: { slug: string }
}

const BlogPage = async ({ params }: IBlogPage) => {
	return <main className='space-y-5 w-[344px] md:w-[1112px] mx-auto'>
		<Blog params={params} />
		<BlogMobile params={params} />
	</main>
}

export default BlogPage
