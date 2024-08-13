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

const Products2 = async () => {
	const products: Product[] = await getProducts()

	return (
		<div data-aos='zoom-in' className='hidden lg:block space-y-8'>
			<div className='bg-white rounded-2xl px-10 py-16 space-y-12'>
				<div>
					<h1 className='max-w-2xl text-orange-500'>
						Безопасность, питание и здоровье.
					</h1>
					<h1 className='max-w-2xl'>
						В Ак-Дала Агро, мы верим в гуманное выращивание наших кур, чтобы
						обеспечить их безопасность, питание и общее здоровье.
					</h1>
				</div>
				<div className='flex justify-between'>
					<p className='p1-l text-neutral-dark max-w-lg'>
						На сайте вы сможете узнать больше о нашем производственном процессе,
						ознакомиться с ассортиментом продукции и увидеть, как мы заботимся о
						каждом этапе – от выращивания птицы до доставки свежего и вкусного
						мяса на ваш стол.
					</p>
					<div className='flex flex-col justify-between'>
						<div></div>
						<div className='flex items-center'>
							<Image
								src='/home/down-arrow-in-circle.svg'
								alt='down-arrow-in-circle'
								width={32}
								height={32}
							/>
							<p className='p2-s text-neutral-dark'>
								Прокрутите вниз, чтобы узнать больше
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='grid grid-rows-2 grid-cols-3 gap-4'>
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

export default Products2
