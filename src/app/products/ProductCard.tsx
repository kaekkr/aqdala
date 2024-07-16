import Image from 'next/image'

interface IProductCard {
	name: string
	description: string
	img: string
}

const ProductCard = ({ name, description, img }: IProductCard) => {
	return <div className='space-y-3 flex flex-col items-center'>
		<Image src={img} alt={img} width={312} height={312} className='bg-white p-3 rounded-xl' />
		<p className='p2-m-medium max-w-xs text-center'>{name}</p>
	</div>
}

export default ProductCard
