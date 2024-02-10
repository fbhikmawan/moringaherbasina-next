import dynamic from 'next/dynamic'

import ProductSection from '/sections/ProductSection'
import AboutSection from '/sections/AboutSection'
import AchievementSection from '/sections/AchievementSection'
import BackToTopButton from '/components/ButtonBackToTop'

export const metadata = {
  description: 'Moringa Herbasina. We produce, manage and deliver Moringa products for local and export markets. We are committed to deliver the best quality Moringa products to our customers.',
}
const TestimonialSection = dynamic(() => import('/sections/TestimonialSection'), { ssr: false })
const HeaderSection = dynamic(() => import('/sections/HeaderSection'), { ssr: false })
const SliderSection = dynamic(() => import('/sections/SliderSection'), { ssr: false })

export default function TopPage() {

  return (
    <>
      <div id="hero" className="hero_area">
        <HeaderSection isTopPage={true} />
        <SliderSection />
      </div>
      <ProductSection layoutPadding={true} isTopPage={true} />
      <AboutSection isTopPage={true} layoutPadding={true} />
      <AchievementSection layoutPadding={true} isTopPage={true} />
      <TestimonialSection layoutPadding={true} />
      <BackToTopButton />
    </>
  )
}
