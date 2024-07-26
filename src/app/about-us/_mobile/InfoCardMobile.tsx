'use client'

import useMediaQuery from '@/lib/useMediaQuery'
import Image from 'next/image'

const InfoCardMobile = () => {
	const isMdOrLarger = useMediaQuery(648)
	
	return <div className='space-y-4'>
		<div className='flex space-x-5 rounded-3xl shadow p-6'>
			{isMdOrLarger ? (
				<Image src='/about-us/line-with-two-dots-3.svg' alt='line-with-two-dots' width={8} height={180} />
			) : (
				<Image src='/about-us/line-with-two-dots-2.svg' alt='line-with-two-dots' width={8} height={180} />
			)}
			<div className='flex flex-col justify-between'>
				<p className='p2-m-medium max-w-[12rem] md:max-w-lg'>Удовлетворение потребностей клиентов</p>
				<p className='p2-m text-neutral-dark max-w-sm'>Повышение объема производства направлено на удержание и
					увеличение доли
					рынка,
					удовлетворение растущего спроса и укрепление позиций компании среди конкурентов</p>
			</div>
		</div>
		<div className='flex space-x-5 rounded-3xl shadow p-6'>
			{isMdOrLarger ? (
				<Image src='/about-us/line-with-two-dots-4.svg' alt='line-with-two-dots' width={8} height={180} />
			) : (
				<Image src='/about-us/line-with-two-dots-3.svg' alt='line-with-two-dots' width={8} height={180} />
			)}
			<div className='flex flex-col justify-between'>
				<p className='p2-m-medium'>Увеличение объемов производства</p>
				<p className='p2-m text-neutral-dark max-w-[14rem] md:max-w-lg'>Увеличить объемы производства и реализации
					мясопродуктов
					до
					100
					тысяч тонн в год</p>
			</div>
		</div>
	</div>
}

export default InfoCardMobile