import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            Ready to Earn More? Let's Talk to Your Manager
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Your manager cares about happy staff, happy customers and smooth operations. Gain Funds delivers it all:
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

          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Suggested Ask
            </h3>
            <p className="text-lg text-gray-700 italic">
              "Hey [Manager], I found a payment solution that fits perfectly with our current setup. It allows customers to pay with debit or credit without any rounding, which creates a smoother experience for everyone. It's approved by regulators, backed by an 80-year-old bank, and trusted by some of the biggest retail names in the country.
              <br /><br />
              It also includes advanced tipping features, like support for both pooled and individual tips, while removing tax and accounting complexities entirely. Can I connect you with them to learn more?"
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="hover-lift">
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};