import Blogs2 from '@/app/[locale]/blogs/Blogs2'
import Blogs2Mobile from '@/app/[locale]/blogs/_mobile/Blogs2Mobile'

const BlogsPage = ({ params: { locale } }: { params: { locale: string } }) => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<Blogs2 locale={locale} />
			<Blogs2Mobile locale={locale} />
		</main>
	)
}

export default BlogsPage
