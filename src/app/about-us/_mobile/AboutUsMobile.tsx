import Image from 'next/image'
import Link from 'next/link'
import AboutUsCard from '@/app/about-us/AboutUsCard'

const aboutUsCardData = [
	{
		title: 'Передовые технологии',
		description: 'Our on-site veterinary staff carefully monitors our flock’s health and development on a daily basis, rain or shine',
		img: '/home/circles-1.svg'
	},
	{
		title: 'Высокие стандарты качества ',
		description: 'Our on-site veterinary staff carefully monitors our flock’s health and development on a daily basis, rain or shine',
		img: '/home/circles-2.svg'
	},
	{
		title: 'Безопасность',
		description: 'Our on-site veterinary staff carefully monitors our flock’s health and development on a daily basis, rain or shine',
		img: '/home/circles-3.svg'
	}
]

const AboutUsMobile = () => {
	return <div className='lg:hidden max-w-full flex flex-col mt-8 md:mt-10 space-y-12'>
		<div className='space-y-6'>
			<div className='space-y-1'>
				<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1'>Коротко о нас</p>
				<h2 className='max-w-3xl md:max-w-md'>Компания Ак-Дала Агро – один из
					ведущих производителей <span className='text-orange-500'>куриного
						мяса в Казахстане.</span>
				</h2>
			</div>
			<p className='p1-l text-neutral-dark max-w-[21rem] md:max-w-lg'>Мы гордимся тем, что предлагаем нашим клиентам
				широкий
				ассортимент
				высококачественной
				продукции под брендом Аршалы Кус</p>
			<Link href='/about-us' className='inline-flex items-center bg-white rounded-full px-3 py-3 space-x-2'>
				<p className='p2-s-medium'>Узнать больше о компании</p>
				<Image src='/home/arrow-in-circle-orange.svg' alt='arrow in circle orange' width={32} height={32} />
			</Link>
		</div>
		<div className='space-y-2'>
			{aboutUsCardData.map((item, i) => <AboutUsCard key={i} title={item.title} description={item.description}
			                                               img={item.img} index={i} />)}
		</div>
	</div>
}

export default AboutUsMobile
