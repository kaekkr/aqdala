const AboutUsHeroMobile = () => {
    return <div className='md:hidden bg-white text-center rounded-3xl p-5'>
        <p className='p3 bg-orange-100 inline rounded-2xl px-2 py-1 mx-auto'>Немножко о нас</p>
        <h3 className='max-w-[47rem] mx-auto'>
				<span className='text-orange-500'>Компания Ак-Дала Агро была
				основана в 2015 году </span>
            и находится всего
            в 30 километрах от столицы Казахстана</h3>
        <p className='p2-m text-neutral-dark max-w-2xl mx-auto'>Ак-Дала Агро – это не только высококачественная
            продукция,
            но и вклад в развитие региона и поддержку местных жителей.
            Мы стремимся к постоянному росту и улучшению,
            чтобы предложить вам лучшее куриное мясо
            под брендом Аршалы Кус.</p>
        <div className='flex items-center justify-center space-x-5'>
            <div className='bg-neutral-light rounded-2xl rounded-tr-[120px] w-[270px] h-[261px]'></div>
            <div className='flex space-x-5'>
                <p className='d1'>{'>'}150</p>
                <p className='p2-m text-neutral-dark max-w-xs text-left'>За время своего существования
                    мы смогли трудоустроить 150
                    жителей Аршалинского района.</p>
            </div>
            <div className='bg-neutral-light rounded-2xl rounded-tl-[120px] w-[270px] h-[261px]'></div>
        </div>
    </div>
}

export default AboutUsHeroMobile
