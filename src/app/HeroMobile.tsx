import Image from 'next/image'


const HeroMobile = () => {
	return <div className='lg:hidden bg-white rounded-2xl flex flex-col px-5 py-3 md:p-6 md:space-y-6'>
		<div>
			<div className='space-y-6'>
				<h2 className='max-w-xl md:max-w-md'>Откройте для себя мир
					<span className='text-orange-500'> свежего и качественного
								куриного мяса!</span>
				</h2>
				<p className='p2-m text-neutral-dark max-w-[18rem] md:max-w-[22rem]'>
					Узнайте как мы заботимся о каждом этапе
					– от выращивания птицы до доставки
					свежего и вкусного мяса на ваш стол.
				</p>
			</div>
			<Image src='/home/hero.jpg' alt='hero' width={515} height={515} />
		</div>
		<div className='flex items-center'>
			<Image src='/home/down-arrow-in-circle.svg' alt='down-arrow-in-circle' width={32} height={32} />
			<p className='p2-s text-neutral-dark'>Прокрутите вниз, чтобы узнать больше</p>
		</div>
	</div>
}

export default HeroMobile
