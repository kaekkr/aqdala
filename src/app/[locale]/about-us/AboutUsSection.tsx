import AboutUsCard from '@/app/[locale]/about-us/AboutUsCard'
import { useTranslations } from 'next-intl'

export const aboutUsCardData = [
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

const AboutUsSection = () => {
	const t = useTranslations('Home.About-us.cards')

	return (
		<div className='flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:flex-wrap lg:justify-end w-[384.61px]'>
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
	)
}

export default AboutUsSection
