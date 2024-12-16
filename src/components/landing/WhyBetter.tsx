import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const WhyBetter = () => {
  const benefits = [
    {
      title: "Higher Tips",
      description: "Staff consistently earn 30% more in tips with our digital solution"
    },
    {
      title: "Instant Access",
      description: "Get your money immediately—no waiting for end-of-shift payouts"
    },
    {
      title: "Better Customer Experience",
      description: "Smoother transactions lead to happier customers and better reviews"
    },
    {
      title: "Simplified Operations",
      description: "No more cash handling complexities or end-of-day reconciliation"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Why It's Better</h2>
          <p className="text-xl text-gray-600">Clear advantages that make a real difference</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="bg-primary rounded-full p-2 flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};