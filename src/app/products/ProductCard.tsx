import Image from 'next/image'

interface IProductCard {
	name: string
	img: string
}

const ProductCard = ({ name, img }: IProductCard) => {
	return <div className='flex flex-col items-center'>
		<Image src={img} alt={img} width={360} height={360} className='bg-white p-6 rounded-xl' />
		<p className='p2-m-medium max-w-xs text-center p-6'>{name}</p>
	</div>
}

export default ProductCard
