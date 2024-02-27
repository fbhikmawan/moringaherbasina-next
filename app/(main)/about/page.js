import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import AboutSection from "/sections/AboutSection";

import Organic from '/assets/images/organic.webp'

export async function generateMetadata({ params, searchParams }, parent) {
  const previousTitle = (await parent).title?.absolute || "";
  return {
    title: `About Us | ${previousTitle}`,
    description: `As a moringa producer in Bojonegoro, we want to provide the best moringa products to fulfill the nutrition of the Indonesian people. Starting from upstream to downstream, we apply quality standards for organic moringa cultivation and use the Nutrition Lock Drying Method. `,
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutSection layoutPadding={true} />
    </>
  );
}
