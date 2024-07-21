import ProductCard from '@/app/products/ProductCard'
import type {Product} from '@/lib/types'
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

    return <div className='hidden md:block'>
        <p className='font-bold text-white text-9xl text-center'>Наши продукты</p>
        <div className='bg-white rounded-2xl p-10 space-y-5'>
            <h1 className='max-w-2xl'>At “Aq-Dala”, we believe in raising
                our chickens humanely to ensure their
                <span className='text-orange-500'> safety, nutrition, and overall health.</span>
            </h1>
            <div className='flex justify-between items-center'>
                <p className='p1-l text-neutral-dark max-w-2xl'>На сайте вы сможете узнать больше о нашем
                    производственном
                    процессе, ознакомиться с
                    ассортиментом продукции и увидеть, как мы заботимся о каждом этапе – от выращивания птицы до
                    доставки свежего
                    и вкусного мяса на ваш стол.</p>
                <Link href='/products'
                      className='inline-flex border border-black rounded-full items-center px-3 py-3 space-x-2 mt-28'>
                    <p className='p2-s-medium'>Узнать больше о продуктах</p>
                    <Image src='/home/arrow-in-circle-orange.svg' alt='arrow in circle orange' width={32} height={32}/>
                </Link>
            </div>
        </div>
        <div className='grid grid-rows-2 grid-cols-3 gap-y-5 mt-5'>
            {products.map((product) => <ProductCard key={product._id} name={product.name}
                                                    img={product.img}/>)}
        </div>
    </div>
}

export default Products
