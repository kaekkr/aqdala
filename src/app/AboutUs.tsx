import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
	return <div className='flex justify-between max-w-full'>
		<div className='space-y-5'>
			<div className='space-y-2'>
				<p className='p3 bg-orange-100 inline rounded-2xl px-2 py-1'>Коротко о нас</p>
				<h1 className='max-w-3xl'>Компания Ак-Дала Агро – один из
					ведущих производителей <span className='text-orange-500'>куриного
				мяса в Казахстане.</span>
				</h1>
			</div>
			<p className='p1-l text-neutral-dark max-w-[41rem]'>Мы гордимся тем, что предлагаем нашим клиентам широкий
				ассортимент
				высококачественной
				продукции под брендом Аршалы Кус</p>
			<Link href='/about-us' className='inline-flex items-center bg-white rounded-full px-3 py-3 space-x-2'>
				<p className='p2-s-medium'>Узнать больше о компании</p>
				<Image src='/home/arrow-in-circle-orange.svg' alt='arrow in circle orange' width={32} height={32} />
			</Link>
		</div>
		<Image src='/home/about-us.png' alt='about us' width={384} height={654} />
	</div>
}

export default AboutUs
