import BlogCard from '@/app/blogs/BlogCard'
import type { Blog } from '@/lib/types'
import Image from 'next/image'

const getBlogs = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogs`)
	
	if (!res.ok) {
		throw new Error('Error while getting list of blogs')
	}
	
	return res.json()
}

const Blogs2Mobile = async () => {
	const blogs: Blog[] = await getBlogs()
	
	return <div className='lg:hidden'>
		<div className='bg-white rounded-2xl px-6 py-16 space-y-5 md:space-y-12'>
			<h2 className='max-w-2xl'>At “Aq-Dala”, we believe in raising
				our chickens humanely to ensure their
				<span className='text-orange-500'> safety, nutrition, and overall health.</span>
			</h2>
			<p className='p1-l text-neutral-dark max-w-[17.5rem] md:max-w-lg'>На сайте вы сможете узнать больше о нашем
				производственном
				процессе, ознакомиться с
				ассортиментом продукции и увидеть, как мы заботимся о каждом этапе – от выращивания птицы до
				доставки свежего
				и вкусного мяса на ваш стол.</p>
			<div className='flex items-center'>
				<Image src='/home/down-arrow-in-circle.svg' alt='down-arrow-in-circle' width={32} height={32} />
				<p className='md:hidden p3 text-neutral-dark'>Прокрутите вниз, чтобы узнать больше</p>
				<p className='hidden md:block p2-s text-neutral-dark'>Прокрутите вниз, чтобы узнать больше</p>
			</div>
		</div>
		<div className='mt-8 space-y-4'>
			{blogs.slice(0, 3).map((blog) => <BlogCard key={blog._id} title={blog.title}
			                                           description={blog.description}
			                                           img={blog.img} slug={blog.slug} />)}
		</div>
	</div>
}

export default Blogs2Mobile
