import Image from 'next/image'

interface IAboutUsCard {
	title: string;
	description: string;
	img: string
}

const AboutUsCard = ({ title, description, img }: IAboutUsCard) => {
	return <div className='bg-white rounded-3xl p-6 flex space-x-8 md:h-[150px]'>
		<Image src={img} alt={img} width={8} height={102} className='hidden md:block' />
		<Image src={img} alt={img} width={8} height={154} className='md:hidden' />
		<div className='flex flex-col space-y-6'>
			<p className='p2-m-medium'>{title}</p>
			<p className='p2-m text-neutral-dark'>{description}</p>
		</div>
	</div>
}

export default AboutUsCard