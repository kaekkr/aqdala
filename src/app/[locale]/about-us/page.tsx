import AboutUsHero from '@/app/[locale]/about-us/AboutUsHero'
import Info from '@/app/[locale]/about-us/Info'
import Infrastructure from '@/app/[locale]/about-us/Infrastructure'
import AboutUsHeroMobile from '@/app/[locale]/about-us/_mobile/AboutUsHeroMobile'
import InfoMobile from '@/app/[locale]/about-us/_mobile/InfoMobile'
import InfrastructureMobile from '@/app/[locale]/about-us/_mobile/InfrastructureMobile'

const AboutUsPage = () => {
	return (
		<main className='w-[344px] md:w-[548px] lg:w-[1112px] mx-auto'>
			<AboutUsHero />
			<AboutUsHeroMobile />
			<Infrastructure />
			<InfrastructureMobile />
			<Info />
			<InfoMobile />
		</main>
	)
}

export default AboutUsPage
