'use client'

import useNavbarStore from '@/lib/store'
import useLocaleStore from '@/lib/useLocaleStore'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarMobile = () => {
	const { isNavOpen, closeNav } = useNavbarStore()
	const { locale } = useLocaleStore()
	const pathname = usePathname()
	const t = useTranslations('Navbar')

	return (
		<>
			{isNavOpen && (
				<nav className='w-[344px] pt-11 pb-[122px] mx-auto flex flex-col md:hidden'>
					<ul className='space-y-5'>
						<li className='font-medium text-2xl'>
							<Link
								href={`/${locale}/about-us`}
								onClick={closeNav}
								className={`${
									pathname != `/${locale}/about-us` && 'text-neutral-dark'
								} text-[33px] leading-[120%] tracking-tighter`}
							>
								{t('about-us')}
							</Link>
						</li>
						<li className='font-medium text-2xl'>
							<Link
								href={`/${locale}/products`}
								onClick={closeNav}
								className={`${
									pathname != `/${locale}/products` && 'text-neutral-dark'
								} text-[33px] leading-[120%] tracking-tighter`}
							>
								{t('our-products')}
							</Link>
						</li>
						<li className='font-medium text-2xl'>
							<Link
								href={`/${locale}/blogs`}
								onClick={closeNav}
								className={`${
									pathname != `/${locale}/blogs` && 'text-neutral-dark'
								} text-[33px] leading-[120%] tracking-tighter`}
							>
								{t('blogs')}
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	)
}

export default NavbarMobile
