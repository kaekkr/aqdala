import Link from 'next/link'

const Navbar = () => {
    return <nav>
        <ul className='flex space-x-5'>
            <li className='p2-m-medium'>
                <Link href='/about-us'>About Us</Link>
            </li>
            <li className='p2-m-medium'>
                <Link href='/products'>Products</Link>
            </li>
            <li className='p2-m-medium'>
                <Link href='/blogs'>Blog</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar
