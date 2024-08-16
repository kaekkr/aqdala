import useLocaleStore from '@/lib/useLocaleStore'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ChangeLanguage from './ChangeLanguage'

const Navbar = () => {
	const { locale } = useLocaleStore()
	const t = useTranslations('Navbar')

	return (
		<nav className='hidden md:flex md:space-x-4 md:py-[28.5px] lg:py-[30px]'>
			<ul className='flex space-x-4'>
				<li className='font-medium'>
					<Link href={`/${locale}/about-us`}>{t('about-us')}</Link>
				</li>
				<li className='font-medium'>
					<Link href={`/${locale}/products`}>{t('our-products')}</Link>
				</li>
				<li className='font-medium'>
					<Link href={`/${locale}/blogs`}>{t('blogs')}</Link>
				</li>
			</ul>
			<ChangeLanguage />
		</nav>
	)
}

export default Navbar
