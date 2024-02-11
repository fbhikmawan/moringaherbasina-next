import { Suspense, lazy } from 'react';

import ProductSection from '/sections/ProductSection'
import AboutSection from '/sections/AboutSection'
import AchievementSection from '/sections/AchievementSection'
import BackToTopButton from '/components/ButtonBackToTop'

export const metadata = {
  description: 'Moringa Herbasina. We produce, manage and deliver Moringa products for local and export markets. We are committed to deliver the best quality Moringa products to our customers.',
}
const SliderSection = lazy(() => import('/sections/SliderSection'));
const TestimonialSection = lazy(() => import('/sections/TestimonialSection'));
const HeaderSection = lazy(() => import('/sections/HeaderSection'));

export default function TopPage() {

  return (
    <>
      <div id="hero" className="hero_area">
        <Suspense>
          <HeaderSection isTopPage={true} />
        </Suspense>
        <Suspense>
          <SliderSection />
        </Suspense>
      </div>
      <ProductSection layoutPadding={true} isTopPage={true} />
      <AboutSection isTopPage={true} layoutPadding={true} />
      <AchievementSection layoutPadding={true} isTopPage={true} />
      <Suspense>
        <TestimonialSection layoutPadding={true} />
      </Suspense>
      <BackToTopButton />
    </>
  )
}
