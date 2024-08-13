import Image from 'next/image'

interface IProductCard {
	name: string
	img: string
}

const ProductCard = ({ name, img }: IProductCard) => {
	return (
		<div className='flex flex-col items-center'>
			<Image
				src={img}
				alt={img}
				width={360}
				height={360}
				className='hidden lg:block bg-white p-6 rounded-xl'
			/>
			<Image
				src={img}
				alt={img}
				width={360}
				height={360}
				className='lg:hidden bg-white p-2 rounded-xl'
			/>
			<p className='hidden md:block p2-m-medium max-w-xs text-center lg:p-6 md:p-2'>
				{name}
			</p>
			<p className='md:hidden p3 max-w-xs text-center lg:p-6 p-2'>{name}</p>
		</div>
	)
}

export default ProductCard
