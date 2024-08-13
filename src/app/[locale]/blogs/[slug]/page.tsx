import Blog from '@/app/[locale]/blogs/[slug]/Blog'
import BlogMobile from '@/app/[locale]/blogs/[slug]/BlogMobile'

interface IBlogPage {
	params: { slug: string }
}

const BlogPage = async ({ params }: IBlogPage) => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<Blog params={params} />
			<BlogMobile params={params} />
		</main>
	)
}

export default BlogPage
