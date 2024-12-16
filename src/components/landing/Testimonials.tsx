import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Gain Funds has been a total game-changer for me and our shop. I feel way more motivated to show up, help customers, and make sure they leave with exactly what they need. It's dope seeing regulars come in just to see me – I'm earning more, they're happy, and the vibe is always on point. Win-win!",
    name: "Jordan",
    role: "Green Dragon North Hollywood",
    image: "/lovable-uploads/5fd7d553-2c48-4544-ba6b-b6dda862eadb.png"
  },
  {
    quote: "This system is smooth. Customers tip more, and I don't have to deal with messy cash or weird rounding. It's a win.",
    name: "Taylor",
    role: "Atrium Woodland Hills",
    image: "/lovable-uploads/be368c1c-04cf-4d42-ba6c-22edb198359a.png"
  },
  {
    quote: "I'm able to buy my favorite products right after my shift—straight from my tips. No waiting for tips to be counted and dispersed.",
    name: "Riley",
    role: "The Set Los Feliz",
    image: "/lovable-uploads/d4bdfc28-86ff-43c8-a620-b54368107d82.png"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Others Are Saying
          </h2>
          <p className="text-gray-600">
            Real experiences from staff members using GainFunds
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* First Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-6">
                <img
                  src={testimonials[0].image}
                  alt={`${testimonials[0].name}'s portrait`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <blockquote className="text-gray-600 text-center mb-6 italic">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-primary">{testimonials[0].name}</p>
                <p className="text-sm text-gray-500">{testimonials[0].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Universal System Message after first testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 my-12 text-center max-w-4xl mx-auto"
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

          {/* Remaining Testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s portrait`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <blockquote className="text-gray-600 text-center mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};