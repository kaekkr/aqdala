import { infrastructureCardData } from '@/app/[locale]/about-us/Infrastructure'
import InfrastructureCard from '@/app/[locale]/about-us/InfrastructureCard'

const InfrastructureMobile = () => {
	return (
		<div data-aos='zoom-in' className='lg:hidden text-center space-y-12 mt-16'>
			<div className='space-y-6'>
				<div className='space-y-1'>
					<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>
						Инфраструктура
					</p>
					<h3 className='md:hidden max-w-2xl mx-auto'>
						Мы - быстро растущее предприятие, использующее{' '}
						<span className='text-orange-500'>
							передовые технологии и высокие стандарты качества
						</span>
					</h3>
					<h2 className='hidden md:block max-w-lg mx-auto'>
						Мы - быстро растущее предприятие, использующее{' '}
						<span className='text-orange-500'>
							передовые технологии и высокие стандарты качества
						</span>
					</h2>
				</div>
				<p className='p1-l text-neutral-dark max-w-3xl mx-auto'>
					Мы гордимся тем, что все наши объекты оснащены передовыми технологиями
					из Италии, Беларуси и Китая, что позволяет нам поддерживать высокие
					стандарты производства
				</p>
			</div>
			<div className='text-left space-y-4'>
				{infrastructureCardData.map((item, index) => (
					<InfrastructureCard
						key={index}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</div>
	)
}

export default InfrastructureMobile
