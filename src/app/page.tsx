import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import DinnerSection from "@/components/DinnerSection";
import EnterpriseSection from "@/components/EnterpriseSection";
import StudentForm from "@/components/StudentForm";
import EnterpriseForm from "@/components/EnterpriseForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MissionSection />
      <DinnerSection />
      <EnterpriseSection />
      <StudentForm />
      <EnterpriseForm />
      <Footer />
    </main>
  );
}
