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

const ProductsMobile = async ({ locale }: { locale: string }) => {
	const products: Product[] = await getData()
	const navT = await getTranslations('Navbar')
	const t = await getTranslations('Home.Products')
	const localeKey = `name-${locale}`
	const title = t('title')
	const title1 = title.slice(0, 34)
	const title2 = title.slice(34, title.length)

	return (
		<div data-aos='zoom-in' className='lg:hidden relative mt-[122px] space-y-4'>
			<p className='absolute top-[-55px] md:top-[-90px] w-full font-bold text-white text-[49px] md:text-[83.71px] tracking-[-0.1em]'>
				{navT('our-products')}
			</p>
			<div className='bg-white rounded-2xl p-6 space-y-12'>
				<div className='space-y-6'>
					<h2 className='md:hidden max-w-2xl'>
						<span className='text-orange-500'>{title1} </span>
						{title2}
					</h2>
					<h1 className='hidden md:block max-w-2xl'>
						<span className='text-orange-500'>
							Безопасность, питание и здоровье.{' '}
						</span>
						В Ак-Дала Агро, мы верим в гуманное выращивание наших кур, чтобы
						обеспечить их безопасность, питание и общее здоровье.
					</h1>
					<p className='p1-l text-neutral-dark max-w-[17.5rem] md:max-w-lg'>
						{t('description')}
					</p>
				</div>
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
			<div className='grid grid-rows-2 grid-cols-2 md:gap-4 gap-2'>
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

export default ProductsMobile
