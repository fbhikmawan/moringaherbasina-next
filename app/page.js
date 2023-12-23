import HeaderSection from '../sections/HeaderSection'
import SliderSection from '../sections/SliderSection'
import ProductSection from '../sections/ProductSection'
import AboutSection from '../sections/AboutSection'
import TeamSection from '../sections/TeamSection'
import ClientSection from '../sections/ClientSection'
import InfoSection from '../sections/InfoSection'

export default function Home() {
  return (
    <>
      <div className="hero_area">
        <HeaderSection />
        <SliderSection />
      </div>
      <ProductSection />
      <AboutSection />
      <TeamSection />
      <ClientSection />
      <InfoSection />
    </>
  )
}
