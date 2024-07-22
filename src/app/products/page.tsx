import Products2 from '@/app/products/Products2'
import Products2Mobile from '@/app/products/Products2Mobile'

const ProductsPage = async () => {
	return <main className='space-y-5 w-[344px] md:w-[1112px] mx-auto'>
		<Products2 />
		<Products2Mobile />
	</main>
}

export default ProductsPage
