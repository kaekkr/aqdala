import AboutUsHero from '@/app/about-us/AboutUsHero'
import Info from '@/app/about-us/Info'
import Infrastructure from '@/app/about-us/Infrastructure'

const AboutUsPage = () => {
	return <main className='space-y-5 w-[1112px] mx-auto'>
		<AboutUsHero />
		<Infrastructure />
		<Info />
	</main>
}

export default AboutUsPage
