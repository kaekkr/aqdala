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

const AboutUsSection = () => {
	return (
		<div
			className='flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:flex-wrap lg:justify-end w-[384.61px]'>
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
