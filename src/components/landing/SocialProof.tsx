import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const SocialProof = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Others Are Already Earning More
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing community of professionals who have increased their earnings with GainFunds
          </p>
        </motion.div>

        {/* Universal System Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-700 mb-8">
            A universal system that is as easy as texting without the need to download apps or register. Gain Funds removes friction and makes it easy to transact with anyone, anytime, and anywhere.
          </p>
          <Button 
            size="lg" 
            className="hover-lift font-semibold tracking-wide bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-xl rounded-full"
          >
            Get Started In Seconds
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
            alt="Company logo"
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            src="/lovable-uploads/8a48a95c-2620-4405-bd87-eddbb60bac5b.png"
            alt="Company logo"
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src="/lovable-uploads/9e63a4dd-0cb7-405d-a2c7-45a28c40a7a9.png"
            alt="Company logo"
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            src="/lovable-uploads/edbd7ce4-73d0-445e-9b55-037f47c29735.png"
            alt="Company logo"
            className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  );
};