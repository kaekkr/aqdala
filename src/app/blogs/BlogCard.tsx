import Image from 'next/image'
import Link from 'next/link'

interface IBlogCard {
	title: string
	description: string
	img: string
	slug: string
}

const BlogCard = ({ title, description, img, slug }: IBlogCard) => {
	return <Link href={`/blogs/${slug}`}>
		<Image src={img} alt={img} width={360} height={203} className='hidden lg:block bg-white p-4 rounded-xl' />
		<Image src={img} alt={img} width={548} height={203} className='lg:hidden bg-white p-4 rounded-xl h-[203px]' />
		<div className='p-6 space-y-4'>
			<p className='p2-m-medium lg:max-w-[18rem]'>{title}</p>
			<p className='p2-m text-neutral-dark lg:max-w-[19rem]'>{description}</p>
		</div>
	</Link>
}

export default BlogCard
