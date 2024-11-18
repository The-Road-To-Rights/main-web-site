"use client"
import HomeBecomeVolunteer from "./(home)/HomeBecomeVolunteer";
import HomeHeroSection from "./(home)/HomeHeroSection";
import HomeHistorySection from "./(home)/HomeHistorySection";
import HomeNewsSection from "./(home)/HomeNewsSection";
import HomeVideoSection from "./(home)/HomeVideoSection";
import Navbar from "./(home)/NavbarSection";
import HomePartnerSection from "./(home)/HomePartnersSection";
import HomeNewsLetterSection from "./(home)/HomeNewsLetterSection";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <div>
      <HomeHeroSection />
      <HomeHistorySection />
      <HomeVideoSection />
      <HomeNewsSection />
      <HomeNewsLetterSection/>
      <HomePartnerSection/>
      <HomeBecomeVolunteer/>
      <Navbar/>
    </div>
    
  );

}
