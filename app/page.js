import HeaderSection from '/sections/HeaderSection'
import SliderSection from '/sections/SliderSection'
import ProductSection from '/sections/ProductSection'
import AboutSection from '/sections/AboutSection'
import AchievementSection from '/sections/AchievementSection'
import TestimonialSection from '/sections/TestimonialSection'

export default function TopPage() {
  return (
    <>
      <div id="hero" className="hero_area">
        <HeaderSection isTopPage={true} />
        <SliderSection />
      </div>
      <ProductSection layoutPadding={true} />
      <AboutSection />
      <AchievementSection layoutPadding={true} />
      <TestimonialSection layoutPadding={true} />
    </>
  )
}
