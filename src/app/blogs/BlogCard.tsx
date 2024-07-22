import Image from 'next/image'
import Link from 'next/link'

interface IBlogCard {
	title: string
	description: string
	img: string
	slug: string
}

const BlogCard = ({ title, description, img, slug }: IBlogCard) => {
	return <Link href={`/blogs/${slug}`} className='space-y-5'>
		<Image src={img} alt={img} width={328} height={171} className='bg-white p-3 rounded-xl' />
		<p className='p2-m-medium max-w-xs px-3'>{title}</p>
		<p className='p2-m text-neutral-dark max-w-[19rem] md:max-w-sm px-3'>{description}</p>
	</Link>
}

export default BlogCard
