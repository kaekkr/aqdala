import InfrastructureCard from '@/app/about-us/InfrastructureCard'

export const infrastructureCardData = [
	{
		title: 'Современные птичники',
		description: 'Современные, что указывает на использование передовых технологий и инновационных решений в птицеводстве.'
	},
	{
		title: 'Инкубатор',
		description: 'Ключевой элемент для поддержания и увеличения поголовья птиц, что важно для стабильного производства'
	},
	{
		title: 'Убойный цех',
		description: 'Важный элемент для завершения производственного цикла и получения конечного продукта'
	},
	{
		title: 'Здание для выращивания бройлеров',
		description: 'Позволяет эффективно организовать процесс выращивания, что влияет на производительность и качество продукции'
	},
	{
		title: 'Цех по производству комбикорма',
		description: 'Обеспечивает контроль над качеством корма, что напрямую влияет на здоровье и продуктивность птиц'
	}
]

const Infrastructure = () => {
	return <div className='hidden md:block text-center space-y-5'>
		<p className='p3 bg-orange-100 inline rounded-2xl px-2 py-1 mx-auto'>Инфраструктура</p>
		<h1 className='max-w-2xl mx-auto'>Мы - быстро растущее
			предприятие, использующее <span className='text-orange-500'>передовые
			технологии и высокие стандарты качества</span>
		</h1>
		<p className='p1-l text-neutral-dark max-w-3xl mx-auto'>Мы гордимся тем, что все наши объекты
			оснащены передовыми
			технологиями из
			Италии, Беларуси и
			Китая, что позволяет нам поддерживать высокие стандарты производства</p>
		<div className='grid grid-rows-2 grid-cols-3 gap-5'>
			{infrastructureCardData.map((item, index) => <InfrastructureCard key={index} title={item.title}
			                                                                 description={item.description} />)}
		</div>
	</div>
}

export default Infrastructure
