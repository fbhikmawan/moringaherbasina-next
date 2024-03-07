import SliderSection from '/sections/SliderSection'
import TestimonialSection from '/sections/TestimonialSection'
import HeaderSection from '/sections/HeaderSection'
import ProductSection from '/sections/ProductSection'
import AboutSection from '/sections/AboutSection'
import AchievementSection from '/sections/AchievementSection'
import BackToTopButton from '/components/ButtonBackToTop'

export async function generateMetadata({ params, searchParams }, parent) { 
  const description_text = 'Moringa Herbasina. We produce, manage and deliver Moringa products for local and export markets. We are committed to deliver the best quality Moringa products to our customers.';

  return {
    description: description_text,
    openGraph: {
      images: ['/assets/images/og-logo.png'],
    },
  }
}

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
