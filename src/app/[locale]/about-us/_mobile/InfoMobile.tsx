import InfoCardMobile from '@/app/[locale]/about-us/_mobile/InfoCardMobile'
import { useTranslations } from 'next-intl'

const InfoMobile = () => {
	const t = useTranslations('About-us.Info')
	const title = t('title')
	const title1 = title.slice(0, 24)
	const title2 = title.slice(24, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='lg:hidden bg-white rounded-3xl space-y-12 py-6 md:py-16 px-6 mt-16'
		>
			<div className='space-y-16'>
				<h3 className='md:hidden max-w-2xl'>
					{title1}
					<span className='text-orange-500'> {title2}</span>
				</h3>
				<h2 className='hidden md:block max-w-md'>
					{title1}
					<span className='text-orange-500'> {title2}</span>
				</h2>
				<div className='space-y-12'>
					<p className='p1-l text-neutral-dark max-w-[18rem] md:max-w-lg'>
						{t('description')}
					</p>
					<div className='md:hidden space-y-12'>
						<div className='space-y-4'>
							<p className='d1'>{'>'}10000</p>
							<p className='p2-m text-neutral-dark'>{t('description2')}</p>
						</div>
						<div className='space-y-4'>
							<p className='d1'>{'>'}22000</p>
							<p className='p2-m text-neutral-dark'>{t('description3')}</p>
						</div>
					</div>
					<div className='hidden md:grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-4'>
						<p className='d1'>{'>'}10000</p>
						<p className='p2-m text-neutral-dark'>{t('description2')}</p>
						<p className='d1'>{'>'}22000</p>
						<p className='p2-m text-neutral-dark'>{t('description3')}</p>
					</div>
				</div>
			</div>
			<hr className='border-black' />
			<div className='space-y-16'>
				<h1>{t('title2')}</h1>
				<InfoCardMobile />
			</div>
		</div>
	)
}

export default InfoMobile
