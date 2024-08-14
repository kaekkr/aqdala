import { infrastructureCardData } from '@/app/[locale]/about-us/Infrastructure'
import InfrastructureCard from '@/app/[locale]/about-us/InfrastructureCard'
import { useTranslations } from 'next-intl'

const InfrastructureMobile = () => {
	const t = useTranslations('About-us.Infrastructure')
	const title = t('title')
	const title1 = title.slice(0, 46)
	const title2 = title.slice(46, title.length)

	return (
		<div data-aos='zoom-in' className='lg:hidden text-center space-y-12 mt-16'>
			<div className='space-y-6'>
				<div className='space-y-1'>
					<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>
						{t('mini-title')}
					</p>
					<h3 className='md:hidden max-w-2xl mx-auto'>
						{title1} <span className='text-orange-500'>{title2}</span>
					</h3>
					<h2 className='hidden md:block max-w-lg mx-auto'>
						{title1} <span className='text-orange-500'>{title2}</span>
					</h2>
				</div>
				<p className='p1-l text-neutral-dark max-w-3xl mx-auto'>
					{t('description')}
				</p>
			</div>
			<div className='text-left space-y-4'>
				{infrastructureCardData.map((item, index) => (
					<InfrastructureCard
						key={index}
						title={t(`cards.${item.name}.title`)}
						description={t(`cards.${item.name}.description`)}
					/>
				))}
			</div>
		</div>
	)
}

export default InfrastructureMobile
