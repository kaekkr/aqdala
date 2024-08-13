import Products2 from '@/app/[locale]/products/Products2'
import Products2Mobile from '@/app/[locale]/products/_mobile/Products2Mobile'

const ProductsPage = async () => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<Products2 />
			<Products2Mobile />
		</main>
	)
}

export default ProductsPage
