import HomeBecomeVolunteer from "./(home)/HomeBecomeVolunteer";
import HomeHeroSection from "./(home)/HomeHeroSection";
import HomeHistorySection from "./(home)/HomeHistorySection";
import HomeNewsSection from "./(home)/HomeNewsSection";
import HomeVideoSection from "./(home)/HomeVideoSection";
import Navbar from "./(home)/NavbarSection";
import HomePartnerSection from "./(home)/HomePartnersSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeHistorySection />
      <HomeVideoSection />
      <HomeNewsSection />
      <HomePartnerSection/>
      <HomeBecomeVolunteer/>
      <Navbar/>
    </div>
  );
}
