import Image from 'next/image'


const Hero = () => {
	return <div className='hidden bg-white rounded-2xl lg:flex justify-between items-center p-10 h-[595px]'>
		<div className="flex flex-col justify-between bg-[url('/home/lines.png')] h-full">
			<div className='space-y-6'>
				<h1 className='max-w-xl'>Откройте для себя мир
					<span className='text-orange-500'> свежего и качественного
				куриного мяса!</span>
				</h1>
				<p className='p2-m text-neutral-dark max-w-[22rem]'>
					Узнайте как мы заботимся о каждом этапе
					– от выращивания птицы до доставки
					свежего и вкусного мяса на ваш стол.
				</p>
			</div>
			<div className='flex items-center'>
				<Image src='/home/down-arrow-in-circle.svg' alt='down-arrow-in-circle' width={32} height={32} />
				<p className='p2-s text-neutral-dark'>Прокрутите вниз, чтобы узнать больше</p>
			</div>
		</div>
		<Image src='/home/hero.jpg' alt='hero' width={515} height={515} />
	</div>
}

export default Hero
