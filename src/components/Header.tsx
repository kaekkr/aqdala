import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return <header className='bg-white flex justify-between items-center px-6 py-3 rounded-b-2xl shadow-sm'>
		<Link href='/'>
			<Image src='/logo.svg' alt='logo' width={105} height={50} />
		</Link>
		<Navbar />
	</header>
}

export default Header
