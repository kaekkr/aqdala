import ProductCard from '@/app/products/ProductCard'
import type { Product } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/products`)
	
	if (!res.ok) {
		throw new Error('Error while getting list of products')
	}
	
	return res.json()
}

const Products = async () => {
	const products: Product[] = await getData()
	
	return <div className='hidden md:block relative mt-[195.73px]'>
		<p className='absolute top-[-180px] w-full font-bold text-white text-[169.86px] tracking-[-0.1em]'>Наши
			продукты</p>
		<div className='bg-white rounded-2xl px-10 py-16 space-y-6'>
			<h1 className='max-w-[36.7rem]'>At “Aq-Dala”, we believe in raising
				our chickens humanely to ensure their
				<span className='text-orange-500'> safety, nutrition, and overall health.</span>
			</h1>
			<div className='flex justify-between items-center'>
				<p className='p1-l text-neutral-dark max-w-[38rem]'>На сайте вы сможете узнать больше о нашем
					производственном
					процессе, ознакомиться с
					ассортиментом продукции и увидеть, как мы заботимся о каждом этапе – от выращивания птицы до
					доставки свежего
					и вкусного мяса на ваш стол.</p>
				<Link href='/products'
				      className='inline-flex border border-black rounded-full items-center px-3 py-3 space-x-2 mt-28'>
					<p className='p2-s-medium'>Узнать больше о продуктах</p>
					<Image src='/home/arrow-in-circle-orange.svg' alt='arrow in circle orange' width={32} height={32} />
				</Link>
			</div>
		</div>
		<div className='grid grid-rows-2 grid-cols-3 gap-4 mt-4'>
			{products.map((product) => <ProductCard key={product._id} name={product.name}
			                                        img={product.img} />)}
		</div>
	</div>
}

export default Products
