import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CarouselList from '@/components/CarouselList';

import DriedMoringaLeaves from '/assets/images/dried-moringa-leaves.webp'
import MoringaInfusion  from '/assets/images/moringa-infusion.webp'
import MoringaInfusion2 from '/assets/images/moringa-infusion-2.webp'
import MoringaInfusion3 from '/assets/images/moringa-infusion-3.webp'
import JarekuHerbalInfusion from '/assets/images/jareku-herbal-infusion.webp'
import JarekuHerbalInfusion2 from '/assets/images/jareku-herbal-infusion-2.webp'
import JarekuHerbalInfusion3 from '/assets/images/jareku-herbal-infusion-3.webp'
import JarekuHerbalInfusion4 from '/assets/images/jareku-herbal-infusion-4.webp'
import JarekuHerbalInfusion5 from '/assets/images/jareku-herbal-infusion-5.webp'
import MoringaPowder from '/assets/images/moringa-powder.webp'
import MoringaPowder2 from '/assets/images/moringa-powder-2.webp'
import MoringaPowder3 from '/assets/images/moringa-powder-3.webp'
import MoringaCapsule from '/assets/images/moringa-capsules.webp'
import MoringaCapsule2 from '/assets/images/moringa-capsules-2.webp'
import MoriChoco from '/assets/images/mori-choco.webp'
import MoriChoco2 from '/assets/images/mori-choco-2.webp'
import MoriChoco3 from '/assets/images/mori-choco-3.webp'
import Momie from '/assets/images/momie.webp'
import Momie2 from '/assets/images/momie-2.webp'
import MoringaSoap from '/assets/images/moringa-soap.webp'

export const products = [
  { 
    images: [
      DriedMoringaLeaves
    ],
    slug: "dried-moringa-leaves",
    title: "Dried Moringa Leaves", 
    shortDesc: "Experience the nourishing power of Dried Moringa Leaves, rich in essential nutrients for a vibrant lifestyle.",
    longDesc: "Dried Moringa Leaves are a superfood marvel, loaded with a spectrum of vitamins like vitamin C and vitamin A, essential minerals, and potent antioxidants. Ideal for boosting your daily nutrient intake, these leaves support overall health, from enhancing skin radiance and immune function to promoting bone health. Their versatility allows you to easily incorporate them into your diet, whether you sprinkle them into smoothies or brew a soothing tea." 
  },
  { 
    images: [
      MoringaInfusion,
      MoringaInfusion2,
      MoringaInfusion3,
    ],
    slug: "moringa-infusion",
    title: "Moringa Infusion", 
    shortDesc: "Steep in the soothing warmth of Moringa Infusion, your tea-time companion for wellness and vitality.",
    longDesc: "Moringa Infusion brings the ancient wisdom of moringa leaves into a convenient tea-bag, perfect for a comforting hot drink. Each sip delivers a wealth of nutrients, including antioxidants and heart-healthy compounds like quercetin. This herbal tea may help regulate blood sugar levels, provide a natural energy boost, and support cardiovascular health. Embrace the delicate flavors and therapeutic benefits of Moringa Infusion as a rejuvenating alternative to your daily brew." 
  },
  { 
    images: [
      JarekuHerbalInfusion,
      JarekuHerbalInfusion2,
      JarekuHerbalInfusion3,
      JarekuHerbalInfusion4,
      JarekuHerbalInfusion5
    ],
    slug: "jareku-herbal-infusion",
    title: "Jareku Herbal Infusion",
    shortDesc: "Discover the invigorating blend of Jareku Herbal Infusion, a perfect harmony of ginger, lemongrass, and turmeric.",
    longDesc: "Jareku Herbal Infusion is a masterful concoction of Jahe, Sereh, and Kunyit, each known for their distinctive health benefits. Ginger offers digestive comfort and anti-inflammatory properties, lemongrass contributes a refreshing citrus note with detoxifying effects, and turmeric is celebrated for its antioxidant and anti-inflammatory qualities. Together, they create a tea that not only warms the body but also supports immune function, soothes aches, and promotes overall wellness. Enjoy the rich, earthy flavors and embrace the therapeutic qualities of this herbal blend." 
  },
  { 
    images: [
      MoringaPowder,
      MoringaPowder2,
      MoringaPowder3,
    ],
    slug: "moringa-powder",
    title: "Moringa Powder",
    shortDesc: "Energize your life with Moringa Powder, a nutrient-packed powerhouse for optimal health.",
    longDesc: "Moringa Powder is a true nutritional champion, densely packed with vitamins, minerals, and amino acids essential for robust health. Its high antioxidant content, including flavonoids and polyphenols, combats oxidative stress and inflammation, which are key factors in chronic disease prevention. This versatile powder supports liver health, helps balance hormones, and may even have a positive impact on blood sugar levels and digestion. Incorporate Moringa Powder into your diet to harness the benefits of this 'miracle tree' and elevate your overall wellness." 
  },
  { 
    images: [
      MoringaCapsule,
      MoringaCapsule2
    ], 
    slug: "moringa-capsules",
    title: "Moringa Capsules",
    shortDesc: "Harness the potent health benefits of Moringa Capsules, your convenient daily boost of wellness.",
    longDesc: "Moringa Capsules encapsulate the essence of the moringa plant, offering a concentrated dose of its powerful antioxidants and anti-inflammatory agents. Known for protecting the liver, supporting the cardiovascular system, and potentially preventing cancer, these capsules are an easy and effective way to incorporate moringa's myriad health benefits into your routine. They may also aid in managing blood sugar levels, treating digestive issues, and improving bone health, making them a versatile addition to your health regimen." 
  },
  { 
    images: [
      MoriChoco,
      MoriChoco2,
      MoriChoco3
    ], 
    slug: "mori-choco",
    title: "Mori Choco",
    shortDesc: "Indulge in the delicious and nutritious Mori Choco, a sweet treat with a healthy twist.",
    longDesc: "Mori Choco combines the indulgent flavor of chocolate with the nutritional powerhouse of moringa. Rich in vitamins, minerals, and antioxidants, this treat not only satisfies your sweet tooth but also provides health benefits. Its antioxidant profile, including flavonoids and phenolic acids, can contribute to heart health, improved eye health, and better digestive function. Enjoy Mori Choco as a guilt-free pleasure that supports your overall well-being" 
  },
  { 
    images: [
      Momie,
      Momie2
    ],
    slug: "momie",
    title: "Momie",
    shortDesc: "Relish the wholesome goodness of Momie, noodles enriched with moringa leaf extract for a healthy twist to your meals.",
    longDesc: "Momie noodles infuse the traditional comfort of pasta with the exceptional nutritional benefits of moringa. Packed with essential amino acids, vitamins, and minerals, these noodles are a fantastic source of nourishment. The inclusion of moringa leaf extract not only enhances the flavor but also contributes to improved digestion, a boost in energy levels, and a source of antioxidants that may aid in protecting against various health ailments. Savor the unique taste and health perks with every bite of Momie." 
  },
  { 
    images: [
      MoringaSoap
    ], 
    slug: "moringa-soap",
    title: "Moringa Soap",
    shortDesc: "Pamper your skin with Moringa Soap, a natural cleanser that rejuvenates and nourishes for a radiant glow.",
    longDesc: "Moringa Soap harnesses the purifying and anti-aging properties of moringa to deliver a gentle yet effective cleansing experience. Rich in antioxidants and essential nutrients, this soap not only cleanses the skin but also helps combat premature wrinkles, promoting a youthful appearance. Its antibacterial and anti-inflammatory qualities make it ideal for soothing skin conditions and maintaining healthy, glowing skin. Indulge in the luxurious lather of Moringa Soap for a daily dose of skin-loving care" 
  },
]

const renderSliderLayout = (products) => {
  return (
    <CarouselList>
      {products.map((product, index) => (
        <div className="item" key={index}>
          <div className="box ">
            <div className="img-box">
              <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="detail-box">
              <h5>
                {product.title}
              </h5>
              <p>
                {product.shortDesc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CarouselList>
  );
};

const renderBreakdownLayout = (products) => {
  return (
    <div className="row justify-content-center">
      {products.map((product, index) => (
        <Link href={`/products/${product.slug}`} className="col-12 col-lg-6 col-xl-4 item" key={index}>
          <div className="box ">
            <div className="img-box">
              <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="detail-box">
              <h5>
                {product.title}
              </h5>
              <p>
                {product.shortDesc}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function ProductList({ isTopPage }) {
  return (
    <div className="carousel-wrap ">
      {isTopPage ? renderSliderLayout(products) : renderBreakdownLayout(products)}
    </div>
  )
}
