import Navbar from "./(home)/NavbarSection";
import HomeHeroSection from "./(home)/HomeHeroSection";
import HomeHistorySection from "./(home)/HomeHistorySection";
import HomeNewsSection from "./(home)/HomeNewsSection";
import HomeVideoSection from "./(home)/HomeVideoSection";
import HomeBecomeVolunteer from "./(home)/HomeBecomeVolunteer";
import Footer from "./(home)/FooterSection";



export default function Home() {
  return (
    <div>
      
      <Navbar/>
      <HomeHeroSection />
      <HomeHistorySection />
      <HomeNewsSection />
      <HomeVideoSection />
      <HomeBecomeVolunteer/>
      <Footer/>
      
    </div>
  );
}
