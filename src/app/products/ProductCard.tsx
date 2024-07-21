import Image from 'next/image'

interface IProductCard {
	name: string
	img: string
}

const ProductCard = ({ name, img }: IProductCard) => {
	return <div className='space-y-3 flex flex-col items-center'>
		<Image src={img} alt={img} width={312} height={312} className='bg-white p-5 rounded-xl' />
		<p className='p3 md:p2-m-medium max-w-xs text-center'>{name}</p>
	</div>
}

export default ProductCard
