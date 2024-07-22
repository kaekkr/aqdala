import AboutUsHero from '@/app/about-us/AboutUsHero'
import Info from '@/app/about-us/Info'
import Infrastructure from '@/app/about-us/Infrastructure'
import AboutUsHeroMobile from "@/app/about-us/AboutUsHeroMobile";

const AboutUsPage = () => {
    return <main className='space-y-5 w-[344px] md:w-[1112px] mx-auto'>
        <AboutUsHero/>
        <AboutUsHeroMobile/>
        <Infrastructure/>
        <Info/>
    </main>
}

export default AboutUsPage
