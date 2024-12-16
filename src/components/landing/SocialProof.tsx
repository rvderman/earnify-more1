import { motion } from "framer-motion";

export const SocialProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Others Are Already Earning More
          </h2>
          <blockquote className="text-xl text-gray-600 italic">
            "No more rounding up and fumbling with change—I earn more money with the Gain Funds system than the cashless atm we used to have and I can access my money right away. Plus customers love being able to use credit"
            <footer className="mt-4 text-gray-500 not-italic">
              — Alex, Atrium Woodland Hills
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};