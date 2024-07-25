'use client'

import Link from 'next/link'
import useNavbarStore from '@/lib/store'
import { usePathname } from 'next/navigation'

const NavbarMobile = () => {
	const { isNavOpen, closeNav } = useNavbarStore()
	const pathname = usePathname()
	
	return (
		<>
			{isNavOpen && (
				<nav
					className='w-[344px] pt-11 pb-[122px] mx-auto flex flex-col md:hidden'>
					<ul className='space-y-5'>
						<li className='font-medium text-2xl'>
							<Link href='/about-us' onClick={closeNav}
							      className={`${pathname != '/about-us' && 'text-neutral-dark'} text-[33px] leading-[120%] tracking-tighter`}>О
								нас</Link>
						</li>
						<li className='font-medium text-2xl'>
							<Link href='/products' onClick={closeNav}
							      className={`${pathname != '/products' && 'text-neutral-dark'} text-[33px] leading-[120%] tracking-tighter`}>Наши
								продукты</Link>
						</li>
						<li className='font-medium text-2xl'>
							<Link href='/blogs' onClick={closeNav}
							      className={`${pathname != '/blogs' && 'text-neutral-dark'} text-[33px] leading-[120%] tracking-tighter`}>Блог</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	)
}

export default NavbarMobile
