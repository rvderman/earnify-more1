import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { GetOnBoard } from "@/components/landing/GetOnBoard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <Testimonials />
      <GetOnBoard />
    </div>
  );
};

export default Index;