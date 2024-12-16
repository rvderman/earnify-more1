import { motion } from "framer-motion";

export const SimpleNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/lovable-uploads/edbd7ce4-73d0-445e-9b55-037f47c29735.png"
              alt="GainFunds Logo"
              className="h-12"
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};