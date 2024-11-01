'use client'
import Aboutme from "@/components/Aboutme";
import Expertlanguages from "@/components/Expertlanguage";
import Hero from "@/components/Hero";
import MaintenanceNotification from "@/components/MaintainceNotification";
import { AppleCardsCarouselDemo } from "@/components/Project";
import { useEffect } from "react";

export default function Home() {
  
  return (
      <main className="">
              <MaintenanceNotification />

        <Hero/>
        <Aboutme/>
        <AppleCardsCarouselDemo/>
        <Expertlanguages/>
      </main>
      
  );
}
