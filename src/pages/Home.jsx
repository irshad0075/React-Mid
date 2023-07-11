import React from "react";
import Carouselstart from "../components/Carouselstart";
import AboutSection from "../components/AboutSection";
import WhyUs from "../components/WhyUs";
import Sale from "../components/Sale";
import BestSellerSection from "../components/BestSellerSection";
import News from "../components/News";
import EcommerceCard from "../components/EcommerceCard";

export default function Home() {
  return (
    <>
      <Carouselstart />
      <AboutSection />
      <BestSellerSection />
      <EcommerceCard />
      <Sale />
      <WhyUs />
      <News />
    </>
  );
}
