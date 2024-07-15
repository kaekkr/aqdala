import Image from 'next/image'

const Footer = () => {
	return <footer className='bg-white rounded-2xl flex flex-col items-center text-center mx-5 my-2 py-5 space-y-5'>
		<Image src='/logo.svg' alt='logo' width={238} height={114} />
		<div className='space-y-0'>
			<p className='p3 text-neutral-dark'>Адрес</p>
			<p className='p2-m max-w-[26rem]'>Акмолинская область, Аршалынский район,
				С.O. Жибек Жолы, С.Жалтырколь, Массив Производственный комплекс, здание 5</p>
		</div>
		<div className='space-y-0'>
			<p className='p3 text-neutral-dark'>Электронная почта</p>
			<p className='p2-m'>aq-dala@mail.ru</p>
		</div>
		<div className='space-y-0'>
			<p className='p3 text-neutral-dark'>Номер телефона</p>
			<p className='p2-m'>+7 700 729 1457</p>
		</div>
		<div className='w-full flex justify-between items-center px-5'>
			<p className='p3'>All rights reserved</p>
			<div className='flex'>
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
			</div>
			<p className='p3'>Designed by
				Meiirzhan Amangeldi</p>
		</div>
	</footer>
}

export default Footer
