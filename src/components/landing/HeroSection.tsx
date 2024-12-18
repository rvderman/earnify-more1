import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.querySelector('#contact-form-section');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="leading-tight"
              >
                You make it happen every day.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
              >
                Now it's time to earn what you deserve.
              </motion.div>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
              Gain Funds is built to maximize your tips on every transaction. We make payment and tips effortless for customers—so you earn more. And the best part? You get instant access to your money.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="hover-lift font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg rounded-xl"
              >
                Start Earning More <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <img 
              src="/lovable-uploads/8598ee6e-8a84-4e03-8a2b-3e308d79e5cf.png" 
              alt="Gainfunds mobile app interface showing account balance and transactions"
              className="w-full max-w-[600px] md:max-w-[800px] h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};