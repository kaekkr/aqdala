import ToggleNavbarMobile from '@/components/ToggleNavbarMobile'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

const Header = () => {
	return (
		<header className='bg-white flex justify-between items-center px-[23px] md:px-[50px] lg:px-11 rounded-b-2xl shadow-sm'>
			<Link href='/'>
				<Image
					src='/logo.svg'
					alt='logo'
					width={105}
					height={50}
					className='hidden lg:block'
				/>
				<Image
					src='/logo.svg'
					alt='logo'
					width={137.21}
					height={53}
					className='lg:hidden'
				/>
			</Link>
			<Navbar />
			<ToggleNavbarMobile />
		</header>
	)
}

export default Header
