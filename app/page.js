import HeaderSection from '../sections/HeaderSection'
import SliderSection from '../sections/SliderSection'
import ProductSection from '../sections/ProductSection'
import AboutSection from '../sections/AboutSection'
import AchievementSection from '../sections/AchievementSection'
import TestimonialSection from '../sections/TestimonialSection'
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
      <AchievementSection />
      <TestimonialSection />
      <InfoSection />
    </>
  )
}
