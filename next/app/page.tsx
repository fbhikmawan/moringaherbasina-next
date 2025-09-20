import type { Metadata } from "next";

import SliderSection from '@/sections/SliderSection'
import HeaderSection from '@/sections/HeaderSection'
import ProductSection from '@/sections/ProductSection'
import AboutSection from '@/sections/AboutSection'


export const metadata: Metadata = {
  description: 'Moringa Herbasina. We produce, manage and deliver Moringa products for local and export markets. We are committed to deliver the best quality Moringa products to our customers.',
};

export default function Home() {
  return (
    <>
      <div id="hero" className="hero_area">
        <HeaderSection isTopPage={true} />
        <SliderSection />
      </div>
      <ProductSection layoutPadding={true} isTopPage={true} />
      <AboutSection isTopPage={true} layoutPadding={true} />
    </>
  );
}
