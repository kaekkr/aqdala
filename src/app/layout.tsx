import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500'] })

export default function RootLayout({
	                                   children
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
		<body className={`${manrope.className} bg-neutral-light`}>
		<Header />
		<div className='px-5 py-2'>{children}</div>
		<Footer />
		</body>
		</html>
	)
}
