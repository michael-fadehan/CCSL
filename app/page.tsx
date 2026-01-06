import React from "react";
import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { ServicesGrid } from "./components/ServicesGrid";
import { SelectedWorks } from "./components/SelectedWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesGrid />
      <SelectedWorks />
    </>
  );
}


