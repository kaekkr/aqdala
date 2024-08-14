import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface IProductCard2 {
	name: string
	description: string
	img: string
}

const ProductCard = ({ name, description, img }: IProductCard2) => {
	const t = useTranslations('Products')
	return (
		<div className='space-y-2 md:space-y-3 flex flex-col items-center text-center'>
			<Image
				src={img}
				alt={img}
				width={360}
				height={360}
				className='bg-white p-2 lg:p-5 rounded-3xl'
			/>
			<div className='lg:p-6 p-2 lg:space-y-6 space-y-2'>
				<p className='hidden md:block p2-m-medium max-w-[18rem]'>{name}</p>
				<p className='md:hidden p3 max-w-[18rem]' style={{ marginTop: 0 }}>
					{name}
				</p>
				<p className='md:hidden p3 text-neutral-dark max-w-[9rem] md:max-w-[19rem]'>
					{t('learn-more')}
				</p>
				<p className='hidden lg:block p2-m text-neutral-dark max-w-[9rem] md:max-w-[19rem]'>
					{t('learn-more')}
				</p>
				<p className='hidden md:block lg:hidden p2-s text-neutral-dark max-w-[9rem] md:max-w-[19rem]'>
					{t('learn-more')}
				</p>
			</div>
		</div>
	)
}

export default ProductCard
