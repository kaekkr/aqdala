import AboutUsCard from '@/app/about-us/AboutUsCard'

const aboutUsCardData = [
	{
		title: 'Передовые технологии',
		description:
			'Наши инновационные методы выращивания и ухода за птицей обеспечивают наилучшие условия для ее развития и здоровья, используя самые современные технологии в сфере птицеводства.',
		img: '/home/circles-1.svg',
	},
	{
		title: 'Высокие стандарты качества ',
		description:
			'Мы придерживаемся строгих стандартов качества, гарантируя, что каждый продукт соответствует высочайшим требованиям, обеспечивая безопасность и свежесть нашей продукции.',
		img: '/home/circles-2.svg',
	},
	{
		title: 'Безопасность',
		description:
			'Мы уделяем особое внимание безопасности на всех этапах производства, от фермы до вашего стола, чтобы обеспечить надежность и качество нашей продукции.',
		img: '/home/circles-3.svg',
	},
]

const AboutUsSection = () => {
	return (
		<div className='flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:flex-wrap lg:justify-end w-[384.61px]'>
			{aboutUsCardData.map((item, i) => (
				<AboutUsCard
					key={i}
					title={item.title}
					description={item.description}
					img={item.img}
					index={i}
				/>
			))}
		</div>
	)
}

export default AboutUsSection
