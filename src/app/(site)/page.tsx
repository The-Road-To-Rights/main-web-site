import HomeBecomeVolunteer from "./(home)/HomeBecomeVolunteer";
import HomeHeroSection from "./(home)/HomeHeroSection";
import HomeHistorySection from "./(home)/HomeHistorySection";
import HomeNewsSection from "./(home)/HomeNewsSection";
import HomeVideoSection from "./(home)/HomeVideoSection";
import Navbar from "./(home)/NavbarSection";
import FourCorePilars from "./what-we-do/FourCorePilars";
import WhatWeDoHeroSection from "./what-we-do/WhatWeDoHeroSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeHistorySection />
      <HomeNewsSection />
      <HomeVideoSection />
      <HomeBecomeVolunteer/>
      <Navbar/>
      <WhatWeDoHeroSection/>
    </div>
  );
}
