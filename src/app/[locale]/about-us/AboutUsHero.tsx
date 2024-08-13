const AboutUsHero = () => {
	return (
		<div
			data-aos='zoom-in'
			className='hidden lg:block bg-white text-center rounded-3xl p-10'
		>
			<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>
				Немножко о нас
			</p>
			<div className='space-y-4'>
				<h1 className='max-w-[43rem] mx-auto'>
					<span className='text-orange-500'>
						Компания Ак-Дала Агро была основана в 2015 году{' '}
					</span>
					и находится всего в 30 километрах от столицы Казахстана
				</h1>
				<p className='p2-m text-neutral-dark max-w-[34rem] mx-auto'>
					Ак-Дала Агро – это не только высококачественная продукция, но и вклад
					в развитие региона и поддержку местных жителей. Мы стремимся к
					постоянному росту и улучшению, чтобы предложить вам лучшее куриное
					мясо под брендом Аршалы Кус.
				</p>
			</div>
			<div className='flex items-center justify-center space-x-8'>
				<div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[270px] h-[261px]'></div>
				<div className='flex space-x-4'>
					<p className='d1'>{'>'}150</p>
					<p className='p2-m text-neutral-dark max-w-[18rem] text-left'>
						За время своего существования мы смогли трудоустроить 150 жителей
						Аршалинского района.
					</p>
				</div>
				<div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[270px] h-[261px]'></div>
			</div>
		</div>
	)
}

export default AboutUsHero
