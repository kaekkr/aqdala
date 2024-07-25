import { splitTextByPercentage } from '@/lib/utils'
import type { Blog } from '@/lib/types'
import Image from 'next/image'


interface IBlogMobile {
	params: { slug: string }
}

const getBlogData = async (slug: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs/${slug}`)
	
	if (!res.ok) {
		throw new Error('Error while getting the blog')
	}
	
	return res.json()
}

const BlogMobile = async ({ params }: IBlogMobile) => {
	const blog: Blog = await getBlogData(params.slug)
	const percentage = 0.6
	const { firstPart, secondPart } = splitTextByPercentage(blog.title, percentage)
	
	return <div className='lg:hidden'>
		<Image src={blog.img} alt='blog' height={485} width={344} className='md:hidden rounded-2xl' />
		<Image src={blog.img} alt='blog' height={548} width={485} className='hidden md:block rounded-2xl' />
		<h2 className='max-w-2xl md:max-w-sm mx-auto md:mx-0 mt-8 md:mt-16'>
			{firstPart}
			<span className='text-orange-500'>{secondPart}</span>
		</h2>
		<p className='p1-l text-neutral-dark max-w-2xl mx-auto mt-6'>{blog.description}</p>
	</div>
}

export default BlogMobile
