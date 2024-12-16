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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              No More Hassles, Just More Earnings—Get the Tips You Deserve.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Developed with frontline staff in mind, Gain Funds eliminates awkward payments and makes tipping effortless—so you can start earning more, instantly.
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
            className="relative"
          >
            <img
              src="/lovable-uploads/9e63a4dd-0cb7-405d-a2c7-45a28c40a7a9.png"
              alt="Payment interface mockup"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};