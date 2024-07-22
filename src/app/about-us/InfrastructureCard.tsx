interface IInfrastructureCard {
	title: string;
	description: string;
}

const InfrastructureCard = ({ title, description }: IInfrastructureCard) => {
	return <div className='bg-white rounded-2xl p-6 md:p-0 space-y-6 md:space-y-0'>
		<p className='p2-m-medium'>{title}</p>
		<p className='p2-m text-neutral-dark'>{description}</p>
	</div>
}

export default InfrastructureCard
