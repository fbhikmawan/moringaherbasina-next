import React from 'react';
import Link from 'next/link';

import CarouselList from '@/components/CarouselList';
import RotatingImageDisplay from '@/components/RotatingImageDisplay';

import DriedMoringaLeaves from '/assets/images/dried-moringa-leaves.webp'
import MoringaInfusion  from '/assets/images/moringa-infusion.webp'
import MoringaInfusion2 from '/assets/images/moringa-infusion-2.webp'
import MoringaInfusion3 from '/assets/images/moringa-infusion-3.webp'
import MoringaPowder from '/assets/images/moringa-powder.webp'
import MoringaPowder2 from '/assets/images/moringa-powder-2.webp'
import MoringaPowder3 from '/assets/images/moringa-powder-3.webp'
import MoringaCapsule from '/assets/images/moringa-capsules.webp'
import MoringaCapsule2 from '/assets/images/moringa-capsules-2.webp'
import MoriChoco from '/assets/images/mori-choco.webp'
import MoriChoco2 from '/assets/images/mori-choco-2.webp'
import MoriChoco3 from '/assets/images/mori-choco-3.webp'
import MoringaSoap from '/assets/images/moringa-soap.webp'

import './product-list.css';

export const products = [
  { 
    images: [
      DriedMoringaLeaves
    ],
    slug: "dried-moringa-leaves",
    title: "Dried Moringa Leaves", 
    shortDesc: "Experience the nourishing power of Dried Moringa Leaves, \r\nrich in essential nutrients for a vibrant lifestyle.",
    longDesc: "Dried Moringa Leaves are a superfood marvel, loaded with a spectrum of vitamins like vitamin C and vitamin A, essential minerals, and potent antioxidants. Ideal for boosting your daily nutrient intake, these leaves support overall health, from enhancing skin radiance and immune function to promoting bone health. Their versatility allows you to easily incorporate them into your diet, whether you sprinkle them into smoothies or brew a soothing tea." ,
    subProducts: []
  },
  { 
    images: [
      MoringaInfusion,
      MoringaInfusion2,
      MoringaInfusion3,
    ],
    slug: "moringa-infusion",
    title: "Moringa Infusion", 
    shortDesc: "Steep in the soothing warmth of Moringa Infusion, \r\nyour tea-time companion for wellness and vitality.",
    longDesc: "Wedang Celup Daun Kelor is made from organic moringa leaf powder which is processed in a closed room with controlled temperature and humidity so that the nutritional content in the leaves remains locked in.\r\n\r\nBenefits of wedang celup leaves moringa (Moringa oleifera):\r\n1. Boosts the body's natural defenses.\r\n2. Provides nutrients for the eyes and brain.\r\n3. Improves and normalizes liver and kidney function.\r\n4. Increases non-sugar energy.\r\n5. Acts as an antioxidant.\r\n6. natural anti-inflammatory.\r\n7. Stabilizes normal sugar levels in the blood.\r\n8. Improves natural serum cholesterol.\r\n9. Eliminates the appearance of wrinkles and fine lines on the surface of the face.\r\n10. Promotes a healthy circulatory system" ,
    subProducts: [
      {
        title: "Superfood Moringa Infusion Pouch at 5 teabags",
        slug: "superfood-moringa-infusion-pouch-at-5-teabags",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/481cfd2ec8e0499c6de3c34dc6e09997",
          "https://down-id.img.susercontent.com/file/3c5a7e3c154087e25a6d0094b19b5080",
          "https://down-id.img.susercontent.com/file/8c664e7d2c03f8411a49c0016e1fd070",
          "https://down-id.img.susercontent.com/file/0f9842aabefe313ccd6cecd7ec24ce99",
          "https://down-id.img.susercontent.com/file/fc033d983003d95ac23b7dfc6f73430c",
        ],
        description: "Moringa Infusion terbuat dari serbuk daun kelor organik yang diproses dengan pada ruang tertutup dengan suhu dan kelembaban yang terkontrol sehingga kandungan nutrisi dalam daun tetap terkunci didalamnya.\r\n1 sachet isi 5 teabags@ 2 gram\r\nManfaat Moringa Infusion daun kelor (Moringa oleifera):\r\n1. Menormalkan tekanan darah\r\n2. Menormalkan kadar gula dalam darah\r\n3. Menormalkan kadar kolesterol\r\n4. Menutrisi mata dan otak\r\n5. Meningkatkan daya tahan tubuh",
        link: "https://shope.ee/7AExOjXbSp?share_channel_code=1"
      },
      {
        title: "Superfood Moringa Infusion Moringa Infusion Box at 20 teabags",
        slug: "superfood-moringa-infusion-box-at-20-teabags",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/823040b465c2d683fa914c02bc8fc40a",
          "https://down-id.img.susercontent.com/file/3cb75ec98cc7d6bb3d632a3d13909423",
          "https://down-id.img.susercontent.com/file/235d4a7f487727720e359f16e18096e1",
          "https://down-id.img.susercontent.com/file/515d34046968346db8d4756f65dd2b1f",
          "https://down-id.img.susercontent.com/file/37cbc1f010b613df7bd232a5dc990c89",
          "https://down-id.img.susercontent.com/file/2664cc2e00f970bfae6fe7df28ecb281"
        ],
        description: "Moringa Infusion Moringa Infusion SuperFood terbuat dari 100% daun kelor organik pilihan\r\nisi 20 tea bags @ 2 gram\r\nCara penyajian:\r\nseduh dengan air panas\r\nbisa ditambahkan madu\r\nminum 2 kali sehari\r\nPIRT No. 5133522011292-25\r\nProses pengeringan daunnya tidak dengan sinar matahari melainkan dikeringkan pada tempat yang tertutup dengan suhu dan kelembaban yang terkontrol sehingga nutrisinya tetap terkunci di dalamnya.\r\nManfaat Daun Kelor :\r\n1. Meningkatkan pertahanan alami tubuh\r\n2. Menyediakan nutrisi untuk mata dan otak\r\n3. Meningkatkan dan menormalisasi fungsi hati dan ginjal\r\n4. Meningkatkan energi non gula\r\n5. Bertindak sebagai antioksidan\r\n6. anti inflamasi alami\r\n7. Menstabilkan kadar gula normal dalam darah\r\n8. Meningkatkan serum alami kolesterol\r\n9. Menghilangkan munculnya keriput dan garis garis halus dipermukaan wajah\r\n10. Meningkatkan sistem peredaran darah yang sehat",
        link: "https://shope.ee/6UzGbSBEIi?share_channel_code=1"
      },
      {
        title: "MORINGATEA",
        slug: "moringatea",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/id-11134207-7qukw-lkes3xhj64l539"
        ],
        description: "Moringa Tea is a moringa leaf tea bag, 1 can contains 10 tea bags.",
        link: "https://shope.ee/3VLf22g1FH?share_channel_code=1"
      }
    ]
  },
  { 
    images: [
      MoringaPowder,
      MoringaPowder2,
      MoringaPowder3,
    ],
    slug: "moringa-powder",
    title: "Moringa Powder",
    shortDesc: "Energize your life with Moringa Powder, \r\na nutrient-packed powerhouse for optimal health.",
    longDesc: "Moringa Powder is a true nutritional champion, densely packed with vitamins, minerals, and amino acids essential for robust health. Its high antioxidant content, including flavonoids and polyphenols, combats oxidative stress and inflammation, which are key factors in chronic disease prevention. This versatile powder supports liver health, helps balance hormones, and may even have a positive impact on blood sugar levels and digestion. Incorporate Moringa Powder into your diet to harness the benefits of this 'miracle tree' and elevate your overall wellness." ,
    subProducts: [
      {
        title: "MORINGA POWDER",
        slug: "moringa-powder",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lsh1ymhvgi1236",
          "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lsh1ymghiiyh7c",
          "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lsh1ymghiiu1a1"
        ],
        description: "Net 100 gram bottle packaging",
        link: "https://shope.ee/7fC2yCnZ9O?share_channel_code=1"
      }
    ]
  },
  { 
    images: [
      MoringaCapsule,
      MoringaCapsule2
    ], 
    slug: "moringa-capsules",
    title: "Moringa Capsules",
    shortDesc: "Harness the potent health benefits of Moringa Capsules, \r\nyour convenient daily boost of wellness.",
    longDesc: "Moringa Capsules encapsulate the essence of the moringa plant, offering a concentrated dose of its powerful antioxidants and anti-inflammatory agents. Known for protecting the liver, supporting the cardiovascular system, and potentially preventing cancer, these capsules are an easy and effective way to incorporate moringa's myriad health benefits into your routine. They may also aid in managing blood sugar levels, treating digestive issues, and improving bone health, making them a versatile addition to your health regimen.",
    subProducts: [
      {
        title: "Superfood Moringa Capsules at 50 capsules",
        slug: "superfood-moringa-capsules-at-50-capsules",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/3e024b47190c626e55e96d42c7ee646e",
          "https://down-id.img.susercontent.com/file/f4a923eb7ebe4a5f3919515f170cbb39",
          "https://down-id.img.susercontent.com/file/a64b8e51d4d3f56cf74dc1f98e62a6f3",
        ],
        description: "",
        link: "https://shope.ee/5pjZoPZir8?share_channel_code=1"
      },
      {
        title: "SuperFood Moringa Capsules at 100 capsules",
        slug: "superFood-moringa-capsules-at-100-capsules",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/af51bedd5dfb17eeffb035ea49a52665",
        ],
        description: "",
        link: "https://shope.ee/lmrjU74p?share_channel_code=1"
      }
    ]
  },
  { 
    images: [
      MoriChoco,
      MoriChoco2,
      MoriChoco3
    ], 
    slug: "mori-choco",
    title: "Mori Choco",
    shortDesc: "Indulge in the delicious and nutritious Mori Choco, \r\na sweet treat with a healthy twist.",
    longDesc: "Mori Choco combines the indulgent flavor of chocolate with the nutritional powerhouse of moringa. Rich in vitamins, minerals, and antioxidants, this treat not only satisfies your sweet tooth but also provides health benefits. Its antioxidant profile, including flavonoids and phenolic acids, can contribute to heart health, improved eye health, and better digestive function. Enjoy Mori Choco as a guilt-free pleasure that supports your overall well-being",
    subProducts: [
      {
        title: "Mori Choco",
        slug: "mori-choco",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/70008f8bc39c176436385c08548fc00a",
          "https://down-id.img.susercontent.com/file/25fa38c82cc3c84a7c80c67749756dfa",
          "https://down-id.img.susercontent.com/file/5d744b60670f8c1bbc4942bf2f5c67da",
          "https://down-id.img.susercontent.com/file/c87fd279117dc94f0d105afb30a82aa3",
          "https://down-id.img.susercontent.com/file/0b82c1a616fc1694958179a6b4e8aa45",
          "https://down-id.img.susercontent.com/file/92ec3777e9a46d4544ac4e8f0b533029",
        ],
        description: "",
        link: "https://shope.ee/6KfqPQ4ipa?share_channel_code=1"
      }
    ]
  },
  { 
    images: [
      MoringaSoap
    ], 
    slug: "moringa-soap",
    title: "Moringa Soap",
    shortDesc: "Pamper your skin with Moringa Soap, \r\na natural cleanser that rejuvenates \r\nand nourishes for a radiant glow.",
    longDesc: "Natural soap made from virgin coconut oil, moringa powder.\r\n\r\nBenefits:\r\n1. Softens and hydrates the skin of the face and body.\r\n2. Resolves acne.\r\n3. Prevents premature aging or wrinkles on the face.\r\n4. Nourish the skin of the face and body.",
    subProducts: [
      {
        title: "MORINGA SOAP SOAPTERAPI",
        slug: "moringa-soap-soapterapi",
        source: "Shopee",
        images: [
          "https://down-id.img.susercontent.com/file/id-11134201-7qul6-lfp2q50otmzm27",
          "https://down-id.img.susercontent.com/file/id-11134201-7qul0-lfp2ulwhe1hd86"
        ],
        description: "",
        link: "https://shope.ee/9A01mfAj7Ra?share_channel_code=1"
      }
    ]
  },
]

const renderSliderLayout = (products) => {
  return (
    <CarouselList>
      {products.map((product, index) => (
        <div className="item" key={index}>
          <Link className="box " href={`/products/${product.slug}`} prefetch={true}>
            <RotatingImageDisplay images={product.images} />
            <div className="detail-box">
              <h5>
                {product.title}
              </h5>
              <p>
                {product.shortDesc}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </CarouselList>
  );
};

const renderBreakdownLayout = (products) => {
  return (
    <div className="row justify-content-center">
      {products.map((product, index) => (
        <Link href={`/products/${product.slug}`} className="col-12 col-lg-6 col-xl-4 item" key={index} prefetch={true}>
          <div className="box ">
            <RotatingImageDisplay images={product.images} />
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
