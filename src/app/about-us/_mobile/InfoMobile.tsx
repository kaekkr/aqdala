import Image from 'next/image'

const InfoMobile = () => {
	return <div className='lg:hidden bg-white rounded-3xl space-y-12 py-16 px-6 mt-16'>
		<div className='space-y-16'>
			<h3 className='md:hidden max-w-2xl'>Нам важно удовлетворения
				<span className='text-orange-500'> потребностей клиентов и поддержании
					конкурентоспособности на рынке</span>
			</h3>
			<h2 className='hidden md:block max-w-md'>Нам важно удовлетворения
				<span className='text-orange-500'> потребностей клиентов и поддержании
					конкурентоспособности на рынке</span>
			</h2>
			<div className='space-y-12'>
				<p className='p1-l text-neutral-dark max-w-[18rem] md:max-w-lg'>На сайте вы сможете узнать больше о нашем
					производственном
					процессе,
					ознакомиться
					с ассортиментом продукции и увидеть, как мы заботимся о каждом этапе – от выращивания птицы до доставки
					свежего
					и вкусного мяса на ваш стол.</p>
				<div className='md:hidden'>
					<p className='d1'>{'>'}10000</p>
					<p className='p2-m text-neutral-dark'>2022 году мощность нашей птицефабрики составила 10 тысяч тонн куриного
						мяса</p>
					<p className='d1'>{'>'}22000</p>
					<p className='p2-m text-neutral-dark'>2023 году мы достигли новых высот, превысив показатель в 22 тысячи
						тонн</p>
				</div>
				<div className='hidden md:grid grid-cols-2 grid-rows-2 gap-y-12 gap-x-4'>
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
			<div className='space-y-4'>
				<div className='flex space-x-5 rounded-3xl shadow p-6'>
					<Image src='/about-us/line-with-two-dots-3.svg' alt='line-with-two-dots' width={8} height={180}
					       className='hidden md:block' />
					<Image src='/about-us/line-with-two-dots-2.svg' alt='line-with-two-dots' width={8} height={180}
					       className='md:hidden' />
					<div className='flex flex-col justify-between'>
						<p className='p2-m-medium max-w-[12rem] md:max-w-lg'>Удовлетворение потребностей клиентов</p>
						<p className='p2-m text-neutral-dark max-w-sm'>Повышение объема производства направлено на удержание и
							увеличение доли
							рынка,
							удовлетворение растущего спроса и укрепление позиций компании среди конкурентов</p>
					</div>
				</div>
				<div className='flex space-x-5 rounded-3xl shadow p-6'>
					<Image src='/about-us/line-with-two-dots-4.svg' alt='line-with-two-dots' width={8} height={180}
					       className='hidden md:block' />
					<Image src='/about-us/line-with-two-dots-3.svg' alt='line-with-two-dots' width={8} height={180}
					       className='md:hidden' />
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
		</div>
	</div>
}

export default InfoMobile
