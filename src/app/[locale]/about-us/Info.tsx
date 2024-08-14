import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Info = () => {
	const t = useTranslations('About-us.Info')
	const title = t('title')
	const title1 = title.slice(0, 24)
	const title2 = title.slice(24, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='hidden lg:block bg-white space-y-16 rounded-3xl py-16 px-10 mt-[128px]'
		>
			<div className='space-y-16'>
				<h1 className='max-w-[45rem]'>
					{title1}
					<span className='text-orange-500'> {title2}</span>
				</h1>
				<div className='flex space-x-12'>
					<p className='p1-l text-neutral-dark max-w-[29rem]'>
						{t('description')}
					</p>
					<div className='grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-4'>
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
				<div className='flex space-x-4'>
					<div className='flex space-x-8 rounded-3xl shadow p-6 w-[508px]'>
						<Image
							src='/about-us/line-with-two-dots.jpg'
							alt='line-with-two-dots'
							width={8}
							height={180}
						/>
						<div className='space-y-6'>
							<p className='p2-m-medium'>
								{t('cards.customer-satisfaction.title')}
							</p>
							<p className='p2-m text-neutral-dark max-w-sm'>
								{t('cards.customer-satisfaction.description')}
							</p>
						</div>
					</div>
					<div className='flex space-x-8 rounded-3xl shadow p-6 w-[508px]'>
						<Image
							src='/about-us/line-with-two-dots.jpg'
							alt='line-with-two-dots'
							width={8}
							height={180}
						/>
						<div className='space-y-6'>
							<p className='p2-m-medium'>
								{t('cards.production-expansion.title')}
							</p>
							<p className='p2-m text-neutral-dark max-w-sm'>
								{t('cards.production-expansion.description')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
