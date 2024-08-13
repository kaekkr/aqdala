import AboutUsCard from '@/app/[locale]/about-us/AboutUsCard'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const aboutUsCardData = [
	{
		name: 'advanced-technologies',
		img: '/home/circles-1.svg',
	},
	{
		name: 'high-quality-standards',
		img: '/home/circles-2.svg',
	},
	{
		name: 'safety',
		img: '/home/circles-3.svg',
	},
]

const AboutUsMobile = () => {
	const t = useTranslations('Home.About-us')
	const title = t('title')
	const title1 = title.slice(0, 17)
	const title2 = title.slice(17, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='lg:hidden max-w-full flex flex-col mt-8 md:mt-10 space-y-12'
		>
			<div className='space-y-6'>
				<div className='space-y-1'>
					<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1'>
						Коротко о нас
					</p>
					<h2 className='max-w-3xl md:max-w-md'>
						{title1} <span className='text-orange-500'>{title2}</span>
					</h2>
				</div>
				<p className='p1-l text-neutral-dark max-w-[21rem] md:max-w-lg'>
					{t('description')}
				</p>
				<Link
					href='/about-us'
					className='inline-flex items-center bg-white rounded-full px-3 py-3 space-x-2'
				>
					<p className='p2-s-medium'>{t('button')}</p>
					<Image
						src='/home/arrow-in-circle-orange.svg'
						alt='arrow in circle orange'
						width={32}
						height={32}
					/>
				</Link>
			</div>
			<div className='space-y-2'>
				{aboutUsCardData.map((card, i) => (
					<AboutUsCard
						key={i}
						title={t(`${card.name}.title`)}
						description={t(`${card.name}.description`)}
						img={card.img}
						index={i}
					/>
				))}
			</div>
		</div>
	)
}

export default AboutUsMobile
