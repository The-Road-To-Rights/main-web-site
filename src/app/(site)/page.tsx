import HomeBecomeVolunteer from "./(home)/HomeBecomeVolunteer";
import HomeHeroSection from "./(home)/HomeHeroSection";
import HomeHistorySection from "./(home)/HomeHistorySection";
import HomeNewsSection from "./(home)/HomeNewsSection";
import HomeVideoSection from "./(home)/HomeVideoSection";
import Navbar from "./(home)/NavbarSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeHistorySection />
      <HomeNewsSection />
      <HomeVideoSection />
      <HomeBecomeVolunteer/>
      <Navbar/>
    </div>
  );
}
