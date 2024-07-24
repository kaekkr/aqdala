import Image from 'next/image'
import Link from 'next/link'

// <
// div
// className = 'lg:hidden' >
// 	< button
// onClick = {()
// =>
// setIsNavOpen(!isNavOpen)
// }
// className = 'text-gray-700' >
// 	< Image
// src = { isNavOpen ? '/icons/cross-icon.svg' : '/icons/hamburger-icon.svg' }
// alt = 'menu icon'
// width = { 24 }
// height = { 24 }
// />
// </button>
// </div>

const NavbarMobile = () => {
	return <nav className='md:hidden py-[30px]'>
		<ul className='flex flex-col space-y-5'>
			<li className='font-medium'>
				<Link href='/about-us'>О нас</Link>
			</li>
			<li className='font-medium'>
				<Link href='/products'>Наши продукты</Link>
			</li>
			<li className='font-medium'>
				<Link href='/blogs'>Блог</Link>
			</li>
		</ul>
	</nav>
}

export default NavbarMobile
