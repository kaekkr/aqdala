import BlogCard from '@/app/blogs/BlogCard'
import type { Blog } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

const getBlogs = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`)

	if (!res.ok) {
		throw new Error('Error while getting list of blogs')
	}

	return res.json()
}

const Blogs = async () => {
	const blogs: Blog[] = await getBlogs()

	return (
		<div data-aos='zoom-in' className='hidden lg:block space-y-16 mt-[166px]'>
			<div className='space-y-8 text-center'>
				<div className='space-y-4'>
					<div>
						<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1'>
							Наши последние публикации в блоге
						</p>
						<h1 className='max-w-2xl mx-auto'>
							At “Aq-Dala”, we believe in raising our chickens humanely to
							ensure their
							<span className='text-orange-500'>
								{' '}
								safety, nutrition, and overall health.
							</span>
						</h1>
					</div>
					<p className='p1-l text-neutral-dark max-w-xl mx-auto'>
						"Delivering Top-Grade Poultry with a Commitment to Ethical Farming
						Practices and Unmatched Freshness"
					</p>
				</div>
				<Link
					href='/blogs'
					className='inline-flex border border-black rounded-full items-center px-3 py-3 space-x-2 mt-28'
				>
					<p className='p2-s-medium'>Посмотреть все сообщения в блоге</p>
					<Image
						src='/home/arrow-in-circle-orange.svg'
						alt='arrow in circle orange'
						width={32}
						height={32}
					/>
				</Link>
			</div>
			<div className='flex justify-center space-x-4'>
				{blogs.slice(0, 3).map(blog => (
					<BlogCard
						key={blog._id}
						title={blog.title}
						description={blog.description}
						img={blog.img}
						slug={blog.slug}
					/>
				))}
			</div>
		</div>
	)
}

export default Blogs
