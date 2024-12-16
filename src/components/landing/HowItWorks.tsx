import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      title: "Easy Setup",
      description: "Get started in 24 hours with our seamless onboarding process"
    },
    {
      title: "Smooth Transactions",
      description: "Customers pay exact amounts with debit or credit—no rounding needed"
    },
    {
      title: "Instant Tips",
      description: "Access your tips immediately through our secure platform"
    },
    {
      title: "Happy Customers",
      description: "Provide a modern payment experience that customers love"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to transform your earnings</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className="text-3xl font-bold text-primary mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};