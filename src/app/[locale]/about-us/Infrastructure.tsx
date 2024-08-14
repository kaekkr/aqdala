import InfrastructureCard from '@/app/[locale]/about-us/InfrastructureCard'
import { useTranslations } from 'next-intl'

export const infrastructureCardData = [
	{
		name: 'modern-poultry-houses',
	},
	{
		name: 'incubator',
	},
	{
		name: 'processing-plant',
	},
	{
		name: 'broiler-rearing-facilities',
	},
	{
		name: 'feed-mill',
	},
]

const Infrastructure = () => {
	const t = useTranslations('About-us.Infrastructure')
	const title = t('title')
	const title1 = title.slice(0, 46)
	const title2 = title.slice(46, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='hidden lg:block text-center space-y-12 mt-[128.5px]'
		>
			<div className='space-y-6'>
				<div>
					<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>
						{t('mini-title')}
					</p>
					<h1 className='max-w-2xl mx-auto'>
						{title1} <span className='text-orange-500'>{title2}</span>
					</h1>
				</div>
				<p className='p1-l text-neutral-dark max-w-2xl mx-auto'>
					{t('description')}
				</p>
			</div>
			<div className='space-y-4 text-left'>
				<div className='grid grid-cols-3 gap-4'>
					{infrastructureCardData.slice(0, 3).map((item, index) => (
						<InfrastructureCard
							key={index}
							title={t(`cards.${item.name}.title`)}
							description={t(`cards.${item.name}.description`)}
						/>
					))}
				</div>
				<div className='flex justify-center space-x-4'>
					{infrastructureCardData.slice(3).map((item, index) => (
						<InfrastructureCard
							key={index + 3}
							title={t(`cards.${item.name}.title`)}
							description={t(`cards.${item.name}.description`)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Infrastructure
