import AboutUsSection from '@/app/[locale]/about-us/AboutUsSection'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = ({ locale }: { locale: string }) => {
	const t = useTranslations('Home.About-us')
	const title = t('title')
	const title1 = title.slice(0, 17)
	const title2 = title.slice(17, title.length)

	return (
		<div
			data-aos='zoom-in'
			className='hidden lg:flex justify-between max-w-full mt-32'
		>
			<div className='space-y-6'>
				<div>
					<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1'>
						Коротко о нас
					</p>
					<h1 className='max-w-2xl'>
						{title1} <span className='text-orange-500'>{title2}</span>
					</h1>
				</div>
				<p className='p1-l text-neutral-dark max-w-xl'>{t('description')}</p>
				<Link
					href={`/${locale}/about-us`}
					className='inline-flex items-center bg-white rounded-full px-4 py-[17px] space-x-2'
				>
					<p className='p2-s-medium'>{t('button')}</p>
					<Image
						src='/home/arrow-in-circle-orange.svg'
						alt='arrow in circle orange'
						width={32}
						height={32}
					/>
				</Link>
			</div>
			{/* <Image src='/home/about-us.png' alt='about us' width={384} height={654} /> */}
			<AboutUsSection />
		</div>
	)
}

export default AboutUs
