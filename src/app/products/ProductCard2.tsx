import Image from 'next/image'

interface IProductCard2 {
	name: string
	description: string
	img: string
}

const ProductCard = ({ name, description, img }: IProductCard2) => {
	return <div className='space-y-3 flex flex-col items-center text-center'>
		<Image src={img} alt={img} width={312} height={312} className='bg-white p-5 rounded-xl' />
		<p className='p2-m-medium max-w-xs'>{name}</p>
		<p className='p2-m text-neutral-dark max-w-xs'>{description}</p>
	</div>
}

export default ProductCard
