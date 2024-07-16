import Image from 'next/image'

interface IBlogCard {
	title: string
	description: string
	img: string
	slug: string
}

const BlogCard = ({ title, description, img, slug }: IBlogCard) => {
	return <div className='space-y-5'>
		<Image src={img} alt={img} width={328} height={171} className='bg-white p-3 rounded-xl' />
		<p className='p2-m-medium max-w-xs px-3'>{title}</p>
		<p className='p2-m text-neutral-dark max-w-sm px-3'>{description}</p>
	</div>
}

export default BlogCard
