import Script from 'next/script'
import dynamic from 'next/dynamic'

import HeaderSection from '../sections/HeaderSection'
const SliderSection = dynamic(() => import('../sections/SliderSection'), { ssr: false });
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

      <Script src="/assets/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
    </>
  )
}
