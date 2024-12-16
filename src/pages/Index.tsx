import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 py-4 px-6 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Gainfunds</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</a>
            <a href="#why-better" className="text-gray-600 hover:text-primary">Why It's Better</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a>
            <a href="#faqs" className="text-gray-600 hover:text-primary">FAQs</a>
            <Button variant="secondary">Boost My Tips</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                Modern Financial Ecosystem
              </h1>
              <h2 className="text-xl md:text-2xl mb-8 text-gray-600">
                Built For The Digital Age
              </h2>
              <p className="text-gray-600 mb-8">
                A combination of the stability and trust of a decades-old financial institution with the agility and modern flexibility of emerging technology.
              </p>
              <Button className="hover-lift" size="lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                alt="Financial ecosystem illustration"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access From Any Device Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Access From Any Mobile Device
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Anyone</h3>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Anytime</h3>
                <h3 className="text-2xl font-bold text-blue-600 mb-8">Anywhere</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span> No App To Download
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span> No Password To Remember
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span> Universally Accessible
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                  alt="Mobile device access"
                  className="w-full rounded-full shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funds Transfer Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Funds Transfers ... Start With A Text
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                    alt="Transfer interface"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <img
                    src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                    alt="Transfer process"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="text-left space-y-6">
                <p className="text-lg">
                  Simple, secure, and instant transfers at your fingertips.
                </p>
                <Button variant="secondary" size="lg" className="hover-lift">
                  Learn More <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              80+ Years Of Trust, Security, And Community Service
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl hover-lift">
                <img
                  src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                  alt="Trust illustration"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Trusted Legacy</h3>
                <p className="text-gray-600">
                  Backed by decades of financial expertise and security.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift">
                <img
                  src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                  alt="Security illustration"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Bank-Grade Security</h3>
                <p className="text-gray-600">
                  Your funds are protected by industry-leading security measures.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl hover-lift">
                <img
                  src="/lovable-uploads/44ace8af-5435-45df-8e38-b84951c89201.png"
                  alt="Community illustration"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-gray-600">
                  Supporting local businesses and communities for generations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-12">
              Join thousands of businesses already using Gainfunds to modernize their financial operations.
            </p>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="w-full" size="lg">
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gainfunds</h3>
              <p className="text-gray-300">
                Modern financial solutions for the digital age.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#twitter" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#linkedin" className="text-gray-300 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Gainfunds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;