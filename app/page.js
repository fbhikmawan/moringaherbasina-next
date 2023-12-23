import HeaderSection from '../sections/HeaderSection'
import SliderSection from '../sections/SliderSection'
import ServiceSection from '../sections/ServiceSection'
import AboutSection from '../sections/AboutSection'
import TeamSection from '../sections/TeamSection'
import ClientSection from '../sections/ClientSection'
import InfoSection from '../sections/InfoSection'
import FooterSection from '../sections/FooterSection'

export default function Home() {
  return (
    <>
      <div className="hero_area">
        <HeaderSection />
        <SliderSection />
      </div>
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <ClientSection />
      <InfoSection />
      <FooterSection />
    </>
  )
}
