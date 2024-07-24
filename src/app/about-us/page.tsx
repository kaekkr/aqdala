import AboutUsHero from '@/app/about-us/AboutUsHero'
import Info from '@/app/about-us/Info'
import InfoMobile from '@/app/about-us/_mobile/InfoMobile'
import Infrastructure from '@/app/about-us/Infrastructure'
import AboutUsHeroMobile from '@/app/about-us/_mobile/AboutUsHeroMobile'
import InfrastructureMobile from '@/app/about-us/_mobile/InfrastructureMobile'

const AboutUsPage = () => {
	return <main className='w-[344px] md:w-[1112px] mx-auto'>
		<AboutUsHero />
		<AboutUsHeroMobile />
		<Infrastructure />
		<InfrastructureMobile />
		<Info />
		<InfoMobile />
	</main>
}

export default AboutUsPage
