import { motion } from "framer-motion";
import { HubSpotForm } from "./HubSpotForm";

export const GetOnBoard = () => {
  return (
    <section id="contact-form-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Ready to Earn More?
          </h2>

          <div className="bg-gray-50 rounded-2xl p-8">
            <HubSpotForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};