import { infrastructureCardData } from '@/app/about-us/Infrastructure'
import InfrastructureCard from '@/app/about-us/InfrastructureCard'

const InfrastructureMobile = () => {
	return <div className='md:hidden text-center space-y-5'>
		<p className='p3 bg-orange-100 inline rounded-2xl px-2 py-1 mx-auto'>Инфраструктура</p>
		<h3 className='max-w-2xl mx-auto'>Мы - быстро растущее
			предприятие, использующее <span className='text-orange-500'>передовые
			технологии и высокие стандарты качества</span>
		</h3>
		<p className='p1-l text-neutral-dark max-w-3xl mx-auto'>Мы гордимся тем, что все наши объекты
			оснащены передовыми
			технологиями из
			Италии, Беларуси и
			Китая, что позволяет нам поддерживать высокие стандарты производства</p>
		<div className='text-left space-y-4'>
			{infrastructureCardData.map((item, index) => <InfrastructureCard key={index} title={item.title}
			                                                                 description={item.description} />)}
		</div>
	</div>
}

export default InfrastructureMobile
