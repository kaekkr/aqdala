import Image from 'next/image'

interface IProductCard2 {
	name: string
	description: string
	img: string
}

const ProductCard = ({ name, description, img }: IProductCard2) => {
	return <div className='space-y-2 md:space-y-3 flex flex-col items-center text-center'>
		<Image src={img} alt={img} width={360} height={360} className='bg-white p-2 lg:p-5 rounded-3xl' />
		<div className='p-6 md:p-2 space-y-6 md:space-y-2'>
			<p className='p2-m-medium max-w-[18rem]'>{name}</p>
			<p className='md:hidden p2-m text-neutral-dark max-w-[9rem] md:max-w-[19rem]'>{description}</p>
			<p className='hidden md:block p2-s text-neutral-dark max-w-[9rem] md:max-w-[19rem]'>{description}</p>
		</div>
	</div>
}

export default ProductCard
