import HomeHeroSection from "./(home)/HomeHeroSection";
import HomeHistorySection from "./(home)/HomeHistorySection";
import HomeNewsSection from "./(home)/HomeNewsSection";
import HomeProjectSection from "./(home)/HomeProjectSection";
import HomeVideoSection from "./(home)/HomeVideoSection";


export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeHistorySection />
      <HomeNewsSection />
      <HomeVideoSection />
      <HomeProjectSection/>
    </div>
  );
}
