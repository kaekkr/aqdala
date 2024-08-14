import { useTranslations } from 'next-intl'

const AboutUsHeroMobile = () => {
	const t = useTranslations('About-us.Hero')
	const title = t('title')
	const title1 = title.slice(0, 21)
	const title2 = title.slice(21, title.length)
	const description = t('description')
	const description1 = description.slice(0, 117)
	const description2 = description.slice(117, description.length)

	return (
		<div
			data-aos='zoom-in'
			className='lg:hidden bg-white text-center rounded-3xl py-6 md:py-10 px-6 space-y-6'
		>
			<div className='space-y-4'>
				<div className='space-y-1'>
					<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>
						{t('mini-title')}
					</p>
					<h3 className='max-w-[47rem] mx-auto'>
						<span className='text-orange-500'>{title1} </span>
						{title2}
					</h3>
				</div>
				<div>
					<p className='p2-m text-neutral-dark max-w-2xl mx-auto'>
						{description1}
					</p>
					<p className='p2-m text-neutral-dark max-w-md mx-auto'>
						{description2}
					</p>
				</div>
			</div>
			<div className='md:hidden text-left space-y-4'>
				<div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[296px] h-[261px]'></div>
				<div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[296px] h-[261px]'></div>
				<p className='d1'>{'>'}150</p>
				<p className='p2-m text-neutral-dark max-w-[18rem] text-left'>
					{t('description2')}
				</p>
			</div>
			<div className='hidden md:block text-left space-y-8'>
				<div className='flex space-x-4'>
					<div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[270px] h-[261px]'></div>
					<div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[270px] h-[261px]'></div>
				</div>
				<div className='flex px-[36.5px] space-x-4'>
					<p className='d1'>{'>'}150</p>
					<p className='p2-m text-neutral-dark max-w-[18rem] text-left'>
						{t('description2')}
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUsHeroMobile
