import Script from 'next/script'
import Image from 'next/image'

import HeaderSection from '../sections/HeaderSection'
import SliderSection from '../sections/SliderSection'
import ServiceSection from '../sections/ServiceSection'
import AboutSection from '../sections/AboutSection'
import TeamSection from '../sections/TeamSection'
import ClientSection from '../sections/ClientSection'
import InfoSection from '../sections/InfoSection'
import FooterSection from '../sections/FooterSection'

import heroBg from '/assets/images/hero-bg.jpg'

export default function Home() {
  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <Image src={heroBg} alt="Hero Background" placeholder="blur" />
        </div>
        <HeaderSection />
        <SliderSection />
      </div>
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <ClientSection />
      <InfoSection />
      <FooterSection />

      <Script src="/assets/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </>
  )
}
