import { Suspense } from 'react'

import HeaderSection from '/sections/HeaderSection'
import SliderSection from '/sections/SliderSection'
import ProductSection from '/sections/ProductSection'
import AboutSection from '/sections/AboutSection'
import AchievementSection from '/sections/AchievementSection'
import TestimonialSection from '/sections/TestimonialSection'
import BackToTopButton from '/components/ButtonBackToTop'

export const metadata = {
  description: 'Moringa Herbasina. We produce, manage and deliver Moringa products for local and export markets. We are committed to deliver the best quality Moringa products to our customers.',
}

export default function TopPage() {
  return (
    <>
      <div id="hero" className="hero_area">
        <HeaderSection isTopPage={true} />
        <Suspense>
          <SliderSection />
        </Suspense>
      </div>
      <ProductSection layoutPadding={true} isTopPage={true} />
      <AboutSection isTopPage={true} layoutPadding={true} />
      <AchievementSection layoutPadding={true} isTopPage={true} />
      <TestimonialSection layoutPadding={true} />
      <BackToTopButton />
    </>
  )
}
