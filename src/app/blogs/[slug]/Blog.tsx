import { splitTextByPercentage } from '@/lib/utils'
import type { Blog } from '@/lib/types'
import Image from 'next/image'


interface IBlog {
	params: { slug: string }
}

const getBlogData = async (slug: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs/${slug}`)
	
	if (!res.ok) {
		throw new Error('Error while getting the blog')
	}
	
	return res.json()
}

const Blog = async ({ params }: IBlog) => {
	const blog: Blog = await getBlogData(params.slug)
	const percentage = 0.6
	const { firstPart, secondPart } = splitTextByPercentage(blog.title, percentage)
	
	return <div className='hidden md:block text-center'>
		<Image src={blog.img} alt='blog' height={485} width={1112} className='rounded-2xl' />
		<h1 className='max-w-2xl mx-auto'>
			{firstPart}
			<span className='text-orange-500'>{secondPart}</span>
		</h1>
		<p className='p1-l text-neutral-dark max-w-2xl mx-auto'>{blog.description}</p>
	</div>
}

export default Blog
