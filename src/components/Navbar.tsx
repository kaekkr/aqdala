import Link from 'next/link'

const Navbar = () => {
	return <nav className='hidden md:block md:py-[28.5px] lg:py-[30px]'>
		<ul className='flex space-x-4'>
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

export default Navbar
