import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { GetOnBoard } from "@/components/landing/GetOnBoard";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <Testimonials />
      <GetOnBoard />
      <Footer />
    </div>
  );
};

export default Index;