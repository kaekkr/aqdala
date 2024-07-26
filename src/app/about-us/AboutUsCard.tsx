import Image from 'next/image'

interface IAboutUsCard {
	title: string;
	description: string;
	img: string;
	index: number;
}

const AboutUsCard = ({ title, description, img, index }: IAboutUsCard) => {
	// Determine rotation based on the index
	let rotationClasses
	switch (index) {
		case 0:
			rotationClasses = 'lg:rotate-[8deg]'
			break
		case 1:
			rotationClasses = 'lg:-translate-x-5'
			break
		case 2:
			rotationClasses = 'lg:-rotate-[8deg]'
			break
	}
	
	return (
		<div
			className={`bg-white rounded-3xl p-6 flex space-x-8 md:h-[150px] lg:h-[202px] lg:w-[360px] lg:transform ${rotationClasses}`}>
			<Image src={img} alt={img} width={8} height={154} className='' />
			<div className='flex flex-col space-y-6'>
				<p className='p2-m-medium'>{title}</p>
				<p className='p2-m text-neutral-dark'>{description}</p>
			</div>
		</div>
	)
}

export default AboutUsCard
