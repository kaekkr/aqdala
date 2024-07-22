import AboutUsHero from '@/app/about-us/AboutUsHero'
import Info from '@/app/about-us/Info'
import InfoMobile from '@/app/about-us/InfoMobile'
import Infrastructure from '@/app/about-us/Infrastructure'
import AboutUsHeroMobile from '@/app/about-us/AboutUsHeroMobile'
import InfrastructureMobile from '@/app/about-us/InfrastructureMobile'

const AboutUsPage = () => {
	return <main className='space-y-5 w-[344px] md:w-[1112px] mx-auto'>
		<AboutUsHero />
		<AboutUsHeroMobile />
		<Infrastructure />
		<InfrastructureMobile />
		<Info />
		<InfoMobile />
	</main>
}

export default AboutUsPage
