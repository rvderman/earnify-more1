import { motion } from "framer-motion";

export const SocialProof = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Others Are Already Earning More
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="/lovable-uploads/edbd7ce4-73d0-445e-9b55-037f47c29735.png"
                alt="Staff member using tablet"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <blockquote className="text-xl text-gray-600 italic text-left">
                "No more rounding up and fumbling with change—I earn more money with the Gain Funds system than the cashless atm we used to have and I can access my money right away. Plus customers love being able to use credit"
                <footer className="mt-4 text-gray-500 not-italic">
                  — Alex, Atrium Woodland Hills
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};