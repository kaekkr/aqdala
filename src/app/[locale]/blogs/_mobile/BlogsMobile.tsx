import BlogCard from '@/app/[locale]/blogs/BlogCard'
import type { Blog } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

const getBlogs = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`)

	if (!res.ok) {
		throw new Error('Error while getting list of blogs')
	}

	return res.json()
}

const BlogsMobile = async ({ locale }: { locale: string }) => {
	const blogs: Blog[] = await getBlogs()
	const t = await getTranslations('Home.Blogs')
	const title = t('title')
	const title1 = title.slice(0, 118)
	const title2 = title.slice(118, title.length)

	return (
		<div data-aos='zoom-in' className='lg:hidden space-y-16 mt-8'>
			<div className='space-y-8'>
				<div className='space-y-4'>
					<div className='space-y-1'>
						<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1'>
							{t('mini-title')}
						</p>
						<h2 className='md:hidden max-w-2xl mx-auto'>
							{title1}
							<span className='text-orange-500'> {title2}</span>
						</h2>
						<h1 className='hidden md:block max-w-xl mx-auto'>
							{title1}
							<span className='text-orange-500'> {title2}</span>
						</h1>
					</div>
					<p className='p1-l text-neutral-dark max-w-xl mx-auto'>
						"{t('description')}"
					</p>
				</div>
				<Link
					href={`/${locale}/blogs`}
					className='inline-flex border border-black rounded-full items-center px-3 py-3 space-x-2 mt-28'
				>
					<p className='p2-s-medium'>{t('button')}</p>
					<Image
						src='/home/arrow-in-circle-orange.svg'
						alt='arrow in circle orange'
						width={32}
						height={32}
					/>
				</Link>
			</div>
			<div className='space-y-4'>
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

export default BlogsMobile
