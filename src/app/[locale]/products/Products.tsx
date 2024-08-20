import ProductCard from '@/app/[locale]/products/ProductCard'
import type { Product } from '@/lib/types'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products`
	)

	if (!res.ok) {
		throw new Error('Error while getting list of products')
	}

	return res.json()
}

const Products = async ({ locale }: { locale: string }) => {
	const products: Product[] = await getData()
	const navT = await getTranslations('Navbar')
	const t = await getTranslations('Home.Products')
	const localeKey = `name-${locale}`
	const title = t('title')
	const title1 = title.slice(0, 34)
	const title2 = title.slice(34, title.length)

	return (
		<div data-aos='zoom-in' className='hidden lg:block relative mt-[195.73px]'>
			<p className='absolute top-[-180px] w-full font-bold text-white text-[169.86px] tracking-[-0.1em]'>
				{navT('our-products')}
			</p>
			<div className='bg-white rounded-2xl px-10 py-16 space-y-6'>
				<h1 className='max-w-[36.7rem]'>
					<span className='text-orange-500'>{title1} </span>
					{title2}
				</h1>
				<div className='flex justify-between items-center'>
					<p className='p1-l text-neutral-dark max-w-[38rem]'>
						{t('description')}
					</p>
					<Link
						href={`/${locale}/products`}
						className='inline-flex border border-black rounded-full items-center px-3 py-3 space-x-2 mt-28'
					>
						<p className='p2-s-medium'>{t('button')}</p>
						<Image
							src='/home/arrow-in-circle-orange.svg'
							alt='arrow in circle orange'
							width={32}
							height={32}
						/>
					</Link>
				</div>
			</div>
			<div className='grid grid-rows-2 grid-cols-3 gap-4 mt-4'>
				{products.map(product => (
					<ProductCard
						key={product._id}
						name={product[localeKey]}
						img={product.img}
					/>
				))}
			</div>
		</div>
	)
}

export default Products
