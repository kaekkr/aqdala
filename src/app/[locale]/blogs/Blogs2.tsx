import BlogCard from '@/app/[locale]/blogs/BlogCard'
import type { Blog } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const getBlogs = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`, {
		cache: 'no-cache',
	})

	if (!res.ok) {
		throw new Error('Error while getting list of blogs')
	}

	return res.json()
}

const Blogs2 = async ({ locale }: { locale: string }) => {
	const blogs: Blog[] = await getBlogs()
	const t = await getTranslations('Blogs')
	const localeKey = `title-${locale}`
	const title = t('title')
	const title1 = title.slice(0, 46)
	const title2 = title.slice(46, 108)
	const title3 = title.slice(108, title.length)

	return (
		<div data-aos='zoom-in' className='hidden lg:block space-y-8'>
			<div className='bg-white rounded-2xl px-10 py-16 space-y-12'>
				<div className='space-y-2'>
					<h1 className='max-w-3xl'>{title1}</h1>
					<h1 className='max-w-xl'>
						{title2}
						<span className='text-orange-500'> {title3}</span>
					</h1>
				</div>
				<div className='flex justify-between'>
					<p className='p1-l text-neutral-dark max-w-lg'>{t('description')}</p>
					<div className='flex flex-col justify-between'>
						<div></div>
						<div className='flex items-center'>
							<Image
								src='/home/down-arrow-in-circle.svg'
								alt='down-arrow-in-circle'
								width={32}
								height={32}
							/>
							<p className='p2-s text-neutral-dark'>{t('scroll')}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='grid grid-rows-2 grid-cols-3 gap-y-5 mt-5'>
				{blogs.map(blog => (
					<BlogCard
						key={blog._id}
						title={blog[localeKey]}
						description={blog.description}
						img={blog.img}
						slug={blog.slug}
					/>
				))}
			</div>
		</div>
	)
}

export default Blogs2
