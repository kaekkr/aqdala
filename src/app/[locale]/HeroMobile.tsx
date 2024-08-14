import { useTranslations } from 'next-intl'
import Image from 'next/image'

const HeroMobile = () => {
	const t = useTranslations('Home.Hero')
	const title = t('title')
	const title1 = title.slice(0, 17)
	const title2 = title.slice(17, title.length)

	return (
		<div className='lg:hidden bg-white rounded-2xl flex flex-col px-[23px] py-6 md:p-6 md:space-y-6'>
			<div>
				<div className='space-y-6'>
					<h2 className='max-w-xl md:max-w-md'>
						{title1}
						<span className='text-orange-500'> {title2}</span>
					</h2>
					<p className='p2-m text-neutral-dark max-w-[18rem] md:max-w-[22rem]'>
						{t('description')}
					</p>
				</div>
				<Image src='/home/hero.jpg' alt='hero' width={515} height={515} />
			</div>
			<div className='flex items-center'>
				<Image
					src='/home/down-arrow-in-circle.svg'
					alt='down-arrow-in-circle'
					width={32}
					height={32}
				/>
				<p className='hidden md:block p2-s text-neutral-dark'>{t('scroll')}</p>
				<p className='md:hidden p3 text-neutral-dark'>{t('scroll')}</p>
			</div>
		</div>
	)
}

export default HeroMobile
