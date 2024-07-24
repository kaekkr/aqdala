import Image from 'next/image'

const InfoMobile = () => {
	return <div className='md:hidden bg-white rounded-3xl space-y-5 p-5'>
		<h3 className='max-w-2xl'>Нам важно удовлетворения
			<span className='text-orange-500'> потребностей клиентов и поддержании
			конкурентоспособности на рынке</span>
		</h3>
		<p className='p1-l text-neutral-dark max-w-[18rem]'>На сайте вы сможете узнать больше о нашем производственном
			процессе,
			ознакомиться
			с ассортиментом продукции и увидеть, как мы заботимся о каждом этапе – от выращивания птицы до доставки свежего
			и вкусного мяса на ваш стол.</p>
		<p className='d1'>{'>'}10000</p>
		<p className='p2-m text-neutral-dark'>2022 году мощность нашей птицефабрики составила 10 тысяч тонн куриного
			мяса</p>
		<p className='d1'>{'>'}22000</p>
		<p className='p2-m text-neutral-dark'>2023 году мы достигли новых высот, превысив показатель в 22 тысячи
			тонн</p>
		<hr className='border border-black' />
		<h1>Амбициозные цели до 2027 года</h1>
		<div className='flex space-x-5 rounded-3xl shadow p-5'>
			<Image src='/about-us/line-with-two-dots-2.svg' alt='line-with-two-dots' width={8} height={180} />
			<div className='flex flex-col justify-between'>
				<p className='p2-m-medium max-w-[12rem]'>Удовлетворение потребностей клиентов</p>
				<p className='p2-m text-neutral-dark max-w-sm'>Повышение объема производства направлено на удержание и
					увеличение доли
					рынка,
					удовлетворение растущего спроса и укрепление позиций компании среди конкурентов</p>
			</div>
		</div>
		<div className='flex space-x-5 rounded-3xl shadow p-5'>
			<Image src='/about-us/line-with-two-dots-3.svg' alt='line-with-two-dots' width={8} height={180} />
			<div className='flex flex-col justify-between'>
				<p className='p2-m-medium'>Увеличение объемов производства</p>
				<p className='p2-m text-neutral-dark max-w-[14rem]'>Увеличить объемы производства и реализации мясопродуктов до
					100
					тысяч тонн в год</p>
			</div>
		</div>
	</div>
}

export default InfoMobile
