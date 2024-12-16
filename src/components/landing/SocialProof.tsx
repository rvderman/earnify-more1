import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
                src="/lovable-uploads/a7d6cb38-f806-4a2c-bc83-9ddc6ac58ad4.png"
                alt="Staff member smiling at work"
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
                "Honestly, I never realized how annoying it was to round up and hand back change—then have to explain it to a confused customer. With Gain Funds I consistently pull in $60–$80 a day in tips—hit $100 a few times too. It's a smoother experience for both our team and our customers. Plus customers love being able to pay with credit!"
                <footer className="mt-4 text-gray-500 not-italic">
                  — Alex, Atrium Woodland Hills
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>

        {/* Universal System Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center max-w-4xl mx-auto"
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
      </div>
    </section>
  );
};