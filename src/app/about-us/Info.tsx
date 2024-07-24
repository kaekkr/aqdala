import Image from 'next/image'

const Info = () => {
	return <div className='hidden md:block bg-white space-y-16 rounded-3xl py-16 px-10 mt-[128px]'>
		<div className='space-y-16'>
			<h1 className='max-w-[45rem]'>Нам важно удовлетворения
				<span className='text-orange-500'> потребностей клиентов и поддержании
					конкурентоспособности на рынке</span>
			</h1>
			<div className='flex space-x-12'>
				<p className='p1-l text-neutral-dark max-w-[29rem]'>На сайте вы сможете узнать больше о нашем производственном
					процессе,
					ознакомиться
					с ассортиментом продукции и увидеть, как мы заботимся о каждом этапе – от выращивания птицы до доставки
					свежего
					и вкусного мяса на ваш стол.</p>
				<div className='grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-4'>
					<p className='d1'>{'>'}10000</p>
					<p className='p2-m text-neutral-dark'>2022 году мощность нашей птицефабрики составила 10 тысяч тонн куриного
						мяса</p>
					<p className='d1'>{'>'}22000</p>
					<p className='p2-m text-neutral-dark'>2023 году мы достигли новых высот, превысив показатель в 22 тысячи
						тонн</p>
				</div>
			</div>
		</div>
		<hr className='border-black' />
		<div className='space-y-16'>
			<h1>Амбициозные цели до 2027 года</h1>
			<div className='flex space-x-4'>
				<div className='flex space-x-8 rounded-3xl shadow p-6 w-[508px]'>
					<Image src='/about-us/line-with-two-dots.jpg' alt='line-with-two-dots' width={8} height={180} />
					<div className='space-y-6'>
						<p className='p2-m-medium'>Удовлетворение потребностей клиентов</p>
						<p className='p2-m text-neutral-dark max-w-sm'>Повышение объема производства направлено на удержание и
							увеличение доли
							рынка,
							удовлетворение растущего спроса и укрепление позиций компании среди конкурентов</p>
					</div>
				</div>
				<div className='flex space-x-8 rounded-3xl shadow p-6 w-[508px]'>
					<Image src='/about-us/line-with-two-dots.jpg' alt='line-with-two-dots' width={8} height={180} />
					<div className='space-y-6'>
						<p className='p2-m-medium'>Удовлетворение потребностей клиентов</p>
						<p className='p2-m text-neutral-dark max-w-sm'>Повышение объема производства направлено на удержание и
							увеличение доли
							рынка,
							удовлетворение растущего спроса и укрепление позиций компании среди конкурентов</p>
					</div>
				</div>
			</div>
		</div>
	</div>
}

export default Info
