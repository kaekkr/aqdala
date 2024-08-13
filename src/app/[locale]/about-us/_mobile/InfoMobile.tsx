import InfoCardMobile from '@/app/[locale]/about-us/_mobile/InfoCardMobile'

const InfoMobile = () => {
	return (
		<div
			data-aos='zoom-in'
			className='lg:hidden bg-white rounded-3xl space-y-12 py-6 md:py-16 px-6 mt-16'
		>
			<div className='space-y-16'>
				<h3 className='md:hidden max-w-2xl'>
					Нам важно удовлетворения
					<span className='text-orange-500'>
						{' '}
						потребностей клиентов и поддержании конкурентоспособности на рынке
					</span>
				</h3>
				<h2 className='hidden md:block max-w-md'>
					Нам важно удовлетворения
					<span className='text-orange-500'>
						{' '}
						потребностей клиентов и поддержании конкурентоспособности на рынке
					</span>
				</h2>
				<div className='space-y-12'>
					<p className='p1-l text-neutral-dark max-w-[18rem] md:max-w-lg'>
						На сайте вы сможете узнать больше о нашем производственном процессе,
						ознакомиться с ассортиментом продукции и увидеть, как мы заботимся о
						каждом этапе – от выращивания птицы до доставки свежего и вкусного
						мяса на ваш стол.
					</p>
					<div className='md:hidden space-y-12'>
						<div className='space-y-4'>
							<p className='d1'>{'>'}10000</p>
							<p className='p2-m text-neutral-dark'>
								2022 году мощность нашей птицефабрики составила 10 тысяч тонн
								куриного мяса
							</p>
						</div>
						<div className='space-y-4'>
							<p className='d1'>{'>'}22000</p>
							<p className='p2-m text-neutral-dark'>
								2023 году мы достигли новых высот, превысив показатель в 22
								тысячи тонн
							</p>
						</div>
					</div>
					<div className='hidden md:grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-4'>
						<p className='d1'>{'>'}10000</p>
						<p className='p2-m text-neutral-dark'>
							2022 году мощность нашей птицефабрики составила 10 тысяч тонн
							куриного мяса
						</p>
						<p className='d1'>{'>'}22000</p>
						<p className='p2-m text-neutral-dark'>
							2023 году мы достигли новых высот, превысив показатель в 22 тысячи
							тонн
						</p>
					</div>
				</div>
			</div>
			<hr className='border-black' />
			<div className='space-y-16'>
				<h1>Амбициозные цели до 2027 года</h1>
				<InfoCardMobile />
			</div>
		</div>
	)
}

export default InfoMobile
