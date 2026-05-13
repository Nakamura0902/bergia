import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import DinnerSection from "@/components/DinnerSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import FormsSection from "@/components/FormsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0b0b12] min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <DinnerSection />
      <EnterpriseSection />
      <FormsSection />
      <Footer />
    </main>
  );
}
