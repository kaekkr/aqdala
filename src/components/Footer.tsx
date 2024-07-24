import Image from 'next/image'

const Footer = () => {
	return <footer
		className='bg-white rounded-2xl flex flex-col md:items-center md:text-center p-10 space-y-5 w-[1112px] mx-auto'>
		<div className='space-y-8 flex flex-col items-center'>
			<Image src='/logo-with-kazakhstan.svg' alt='logo' width={238} height={114} />
			<div className='space-y-4'>
				<div className='space-y-0'>
					<p className='p3 text-neutral-dark'>Адрес</p>
					<p className='p2-m max-w-sm'>Акмолинская область, Аршалынский район,
						С.O. Жибек Жолы, С.Жалтырколь, Массив Производственный комплекс, здание 5</p>
				</div>
				<div className='space-y-0'>
					<p className='p3 text-neutral-dark'>Электронная почта</p>
					<p className='p2-m'>aq-dala@mail.ru</p>
				</div>
			</div>
		</div>
		<div className='space-y-0'>
			<p className='p3 text-neutral-dark'>Номер телефона</p>
			<p className='p2-m'>+7 700 729 1457</p>
		</div>
		<div className='md:hidden flex space-x-2'>
			<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
			<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
			<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
			<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
		</div>
		<div className='w-full flex justify-between items-center'>
			<p className='p3 mr-6'>All rights reserved</p>
			<div className='hidden md:flex space-x-2'>
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
				<Image src='/arrow-in-circle.svg' alt='arrow-in-circle' width={32} height={32} />
			</div>
			<div>
				<p className='p3 text-right'>Designed by</p>
				<p className='p3 max-w-[8rem] text-right'>
					Meiirzhan Amangeldi</p>
			</div>
		</div>
	</footer>
}

export default Footer
