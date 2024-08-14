import { useTranslations } from 'next-intl'

const AboutUsHero = () => {
	const t = useTranslations('About-us.Hero')
	const title = t('title')
	const title1 = title.slice(0, 21)
	const title2 = title.slice(21, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='hidden lg:block bg-white text-center rounded-3xl p-10'
		>
			<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>
				{t('mini-title')}
			</p>
			<div className='space-y-4'>
				<h1 className='max-w-[43rem] mx-auto'>
					<span className='text-orange-500'>{title1} </span>
					{title2}
				</h1>
				<p className='p2-m text-neutral-dark max-w-[34rem] mx-auto'>
					{t('description')}
				</p>
			</div>
			<div className='flex items-center justify-center space-x-8'>
				<div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[270px] h-[261px]'></div>
				<div className='flex space-x-4'>
					<p className='d1'>{'>'}150</p>
					<p className='p2-m text-neutral-dark max-w-[18rem] text-left'>
						{t('description2')}
					</p>
				</div>
				<div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[270px] h-[261px]'></div>
			</div>
		</div>
	)
}

export default AboutUsHero
