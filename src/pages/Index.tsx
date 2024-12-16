import { HeroSection } from "@/components/landing/HeroSection";
import { SimpleNavbar } from "@/components/landing/SimpleNavbar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyBetter } from "@/components/landing/WhyBetter";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { GetOnBoard } from "@/components/landing/GetOnBoard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SimpleNavbar />
      <HeroSection />
      <HowItWorks />
      <WhyBetter />
      <Testimonials />
      <FAQ />
      <GetOnBoard />
    </div>
  );
};

export default Index;