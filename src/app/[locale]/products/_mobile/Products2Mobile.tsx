import ProductCard2 from '@/app/[locale]/products/ProductCard2'
import type { Product } from '@/lib/types'
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

const Products2Mobile = async () => {
	const products: Product[] = await getProducts()

	return (
		<div className='lg:hidden'>
			<div className='bg-white rounded-2xl py-16 px-6 space-y-12'>
				<h2 className='max-w-2xl'>
					<span className='text-orange-500'>
						Безопасность, питание и здоровье.{' '}
					</span>
					В Ак-Дала Агро, мы верим в гуманное выращивание наших кур, чтобы
					обеспечить их безопасность, питание и общее здоровье.
				</h2>
				<p className='p1-l text-neutral-dark max-w-[17.5rem] md:max-w-lg'>
					На сайте вы сможете узнать больше о нашем производственном процессе,
					ознакомиться с ассортиментом продукции и увидеть, как мы заботимся о
					каждом этапе – от выращивания птицы до доставки свежего и вкусного
					мяса на ваш стол.
				</p>
				<div className='flex items-center space-x-2'>
					<Image
						src='/home/down-arrow-in-circle.svg'
						alt='down-arrow-in-circle'
						width={32}
						height={32}
					/>
					<p className='md:hidden p3 text-neutral-dark'>
						Прокрутите вниз, чтобы узнать больше
					</p>
					<p className='hidden md:block p2-s text-neutral-dark'>
						Прокрутите вниз, чтобы узнать больше
					</p>
				</div>
			</div>
			<div className='grid grid-rows-3 grid-cols-2 gap-2 md:gap-4 mt-5'>
				{products.map(product => (
					<ProductCard2
						key={product._id}
						name={product.name}
						description={product.description}
						img={product.img}
					/>
				))}
			</div>
		</div>
	)
}

export default Products2Mobile
