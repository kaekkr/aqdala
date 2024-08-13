import useLocaleStore from '@/lib/useLocaleStore'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Navbar = () => {
	const { locale } = useLocaleStore()
	const t = useTranslations('Navbar')

	return (
		<nav className='hidden md:block md:py-[28.5px] lg:py-[30px]'>
			<ul className='flex space-x-4'>
				<li className='font-medium'>
					<Link href={`/${locale}/about-us`}>{t('about-us')}</Link>
				</li>
				<li className='font-medium'>
					<Link href={`/${locale}/products`}>{t('our-products')}</Link>
				</li>
				<li className='font-medium'>
					<Link href={`/${locale}/blogs'`}>{t('blogs')}</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
