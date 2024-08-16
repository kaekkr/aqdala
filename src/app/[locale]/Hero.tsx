import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Hero = () => {
	const t = useTranslations('Home.Hero')
	const title = t('title')
	const title1 = title.slice(0, 17)
	const title2 = title.slice(17, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='hidden bg-white rounded-2xl lg:flex justify-between items-center p-10 h-[595px]'
		>
			<div className="flex flex-col justify-between bg-[url('/home/lines.png')] h-full">
				<div className='space-y-6'>
					<h1 className='max-w-xl'>
						{title1}
						<span className='text-orange-500'> {title2}</span>
					</h1>
					<p className='p2-m text-neutral-dark max-w-[22rem]'>
						{t('description')}
					</p>
				</div>
				<div className='flex items-center'>
					<Image
						src='/home/down-arrow-in-circle.svg'
						alt='down-arrow-in-circle'
						width={32}
						height={32}
					/>
					<p className='p2-s text-neutral-dark'>{t('scroll')}</p>
				</div>
			</div>
			<Image src='/home/hero.jpg' alt='hero' width={515} height={515} />
		</div>
	)
}

export default Hero
