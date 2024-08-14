import ProductCard2 from '@/app/[locale]/products/ProductCard2'
import type { Product } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

const getProducts = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products`
	)

	if (!res.ok) {
		throw new Error('Error while getting list of products')
	}

	return res.json()
}

const Products2 = async ({ locale }: { locale: string }) => {
	const products: Product[] = await getProducts()
	const localeKey = `name-${locale}`
	const t = await getTranslations('Products')
	const title = t('title')
	const title1 = title.slice(0, 33)
	const title2 = title.slice(33, title.length)

	return (
		<div data-aos='zoom-in' className='hidden lg:block space-y-8'>
			<div className='bg-white rounded-2xl px-10 py-16 space-y-12'>
				<div>
					<h1 className='max-w-2xl text-orange-500'>{title1}</h1>
					<h1 className='max-w-2xl'>{title2}</h1>
				</div>
				<div className='flex justify-between'>
					<p className='p1-l text-neutral-dark max-w-lg'>{t('description')}</p>
					<div className='flex flex-col justify-between'>
						<div></div>
						<div className='flex items-center'>
							<Image
								src='/home/down-arrow-in-circle.svg'
								alt='down-arrow-in-circle'
								width={32}
								height={32}
							/>
							<p className='p2-s text-neutral-dark'>{t('scroll')}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='grid grid-rows-2 grid-cols-3 gap-4'>
				{products.map(product => (
					<ProductCard2
						key={product._id}
						name={product[localeKey]}
						description={product.description}
						img={product.img}
					/>
				))}
			</div>
		</div>
	)
}

export default Products2
