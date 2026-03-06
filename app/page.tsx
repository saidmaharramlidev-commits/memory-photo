import HomeAbout from "@/components/HomeAbout";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeAbout />
      <HomeServices />


    </div>
  );
}
