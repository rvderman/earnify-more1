import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Clock, Smile, ChevronRight } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    managerName: "",
    managerEmail: "",
    yourName: "",
    storeName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/006de22a-4029-4c6b-aa02-e60f6f3cc7f8.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Start earning what you deserve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            No more counting, handing back change and missing out on tips. 
            Earn more with Gain Funds
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2 mx-auto hover-lift"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why You Deserve More Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-8 h-8 text-accent" />,
                title: "Creating Exceptional Experiences",
                description: "You make customers feel valued and cared for with personalized guidance."
              },
              {
                icon: <Clock className="w-8 h-8 text-accent" />,
                title: "Building Trust & Loyalty",
                description: "Your knowledge transforms first-time visitors into repeat customers."
              },
              {
                icon: <Smile className="w-8 h-8 text-accent" />,
                title: "Driving Sales Growth",
                description: "Your expertise boosts store performance and profitability."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl hover-lift"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Let's Talk to Your Manager
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Drop in their info below, and we'll show them the ropes. 
            Let's get you earning more—starting now.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Manager's Name"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent"
                value={formData.managerName}
                onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
              />
              <input
                type="email"
                placeholder="Manager's Email"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent"
                value={formData.managerEmail}
                onChange={(e) => setFormData({ ...formData, managerEmail: e.target.value })}
              />
              <input
                type="text"
                placeholder="Your Name (optional)"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent"
                value={formData.yourName}
                onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Store Name"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent"
                value={formData.storeName}
                onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover-lift"
            >
              Submit and Start Earning More
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;