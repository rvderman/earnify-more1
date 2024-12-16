import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const GetOnBoard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Let's Talk to Your Manager
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              Drop their info below, and we'll handle the rest. You deserve better tips, and we'll show your manager how easy it is to make it happen—plus, how it's a win-win for the whole shop.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Stores using Gain Funds also see an average 30% lift in sales. Better tips. More sales. Everyone wins.
            </p>
            <ContactForm />
          </div>

          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              What Gain Funds Delivers:
            </h3>
            <ul className="space-y-4 text-lg text-gray-700 mb-8">
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary flex-shrink-0" />
                Staff earns more money
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary flex-shrink-0" />
                Faster, smoother transactions for customers
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary flex-shrink-0" />
                20-40% increase in revenue
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="text-primary flex-shrink-0" />
                No tax and accounting complexities related to tipping
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};