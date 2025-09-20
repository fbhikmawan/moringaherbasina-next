import React from "react";
import { type Metadata } from 'next'

import AboutSection from "@/sections/AboutSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `About Us`,
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
