'use client'
import Aboutme from "@/components/Aboutme";
import Hero from "@/components/Hero";
import MaintenanceNotification from "@/components/MaintainceNotification";
import { AppleCardsCarouselDemo } from "@/components/Project";
import StickyNotification from "@/components/StickyNotification";
import { useEffect } from "react";

export default function Home() {
  
  return (
      <main className="">
              <MaintenanceNotification />

        <Hero/>
        <Aboutme/>
        <AppleCardsCarouselDemo/>
        <StickyNotification/>
      </main>
      
  );
}
