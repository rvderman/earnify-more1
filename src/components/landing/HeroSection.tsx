import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Earn the tips you deserve.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Built to boost your earnings, GainFunds makes tipping effortless and easy for customers—so you earn more. Plus, access your tips instantly.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="hover-lift">
                Start Earning More <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                See How It Works
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-[300px] md:w-[380px]">
              {/* iPhone Frame */}
              <div className="relative mx-auto border-[14px] border-black rounded-[2.5rem] h-[600px] md:h-[750px] w-full shadow-xl">
                <div className="absolute top-0 w-full h-[25px] bg-black rounded-t-[1.1rem]">
                  <div className="absolute top-[7px] left-1/2 transform -translate-x-1/2 h-[4px] w-[50px] bg-gray-800 rounded-full"></div>
                  <div className="absolute top-[3px] right-[20px] h-[4px] w-[4px] bg-gray-800 rounded-full"></div>
                </div>
                {/* App Screenshot */}
                <img 
                  src="/lovable-uploads/8a48a95c-2620-4405-bd87-eddbb60bac5b.png" 
                  alt="Gainfunds App Interface" 
                  className="w-full h-full object-cover rounded-[1.3rem]"
                />
                {/* Home Button / Bottom Bar */}
                <div className="absolute bottom-0 w-full h-[4px] bg-black rounded-b-[1.1rem]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};