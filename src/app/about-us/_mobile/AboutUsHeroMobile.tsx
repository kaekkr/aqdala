const AboutUsHeroMobile = () => {
	return <div className='lg:hidden bg-white text-center rounded-3xl py-10 px-6 space-y-6'>
		<div className='space-y-4'>
			<div className='space-y-1'>
				<p className='p3 bg-green/20 inline rounded-2xl px-2 py-1 mx-auto'>Немножко о нас</p>
				<h3 className='max-w-[47rem] mx-auto'>
									<span className='text-orange-500'>Компания Ак-Дала Агро была
									основана в 2015 году </span>
					и находится всего
					в 30 километрах от столицы Казахстана</h3>
			</div>
			<div>
				<p className='p2-m text-neutral-dark max-w-2xl mx-auto'>Ак-Дала Агро – это не только высококачественная
					продукция,
					но и вклад в развитие региона и поддержку местных жителей.</p>
				<p className='p2-m text-neutral-dark max-w-md mx-auto'>
					Мы стремимся к постоянному росту и улучшению,
					чтобы предложить вам лучшее куриное мясо
					под брендом Аршалы Кус.</p>
			</div>
		</div>
		<div className='md:hidden text-left space-y-4'>
			<div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[270px] h-[261px]'></div>
			<div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[270px] h-[261px]'></div>
			<p className='d1'>{'>'}150</p>
			<p className='p2-m text-neutral-dark max-w-[18rem] text-left'>За время своего существования
				мы смогли трудоустроить 150
				жителей Аршалинского района.</p>
		</div>
		<div className='hidden md:block text-left space-y-8'>
			<div className='flex space-x-4'>
				<div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[270px] h-[261px]'></div>
				<div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[270px] h-[261px]'></div>
			</div>
			<div className='flex px-[36.5px] space-x-4'>
				<p className='d1'>{'>'}150</p>
				<p className='p2-m text-neutral-dark max-w-[18rem] text-left'>За время своего существования
					мы смогли трудоустроить 150
					жителей Аршалинского района.</p>
			</div>
		</div>
	</div>
}

export default AboutUsHeroMobile
