import Link from 'next/link'

interface INavbar {
    className?: string
}

const Navbar = ({className}: INavbar) => {
    return <nav className={className}>
        <ul className='flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0'>
            <li className='p2-m-medium'>
                <Link href='/about-us'>О нас</Link>
            </li>
            <li className='p2-m-medium'>
                <Link href='/products'>Наши продукты</Link>
            </li>
            <li className='p2-m-medium'>
                <Link href='/blogs'>Блог</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar
