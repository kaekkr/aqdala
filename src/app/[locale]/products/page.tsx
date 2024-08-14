import Products2 from '@/app/[locale]/products/Products2'
import Products2Mobile from '@/app/[locale]/products/_mobile/Products2Mobile'

const ProductsPage = async ({
	params: { locale },
}: {
	params: { locale: string }
}) => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<Products2 locale={locale} />
			<Products2Mobile locale={locale} />
		</main>
	)
}

export default ProductsPage
