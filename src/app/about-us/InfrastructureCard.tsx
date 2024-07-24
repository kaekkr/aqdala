interface IInfrastructureCard {
	title: string;
	description: string;
}

const InfrastructureCard = ({ title, description }: IInfrastructureCard) => {
	return <div className='bg-white rounded-2xl p-6 space-y-6 w-[360px]'>
		<p className='p2-m-medium'>{title}</p>
		<p className='p2-m text-neutral-dark'>{description}</p>
	</div>
}

export default InfrastructureCard
