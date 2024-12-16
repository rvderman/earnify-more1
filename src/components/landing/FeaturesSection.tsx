import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Smartphone, Zap } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: "Seamless, Hassle-Free Payments",
      subheading: "No More Counting or Handing Back Change",
      description: "Customers pay the exact amount with debit or credit—no rounding, no hassle. Tipping is seamless and familiar, just like at a coffee shop."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Multiple Tipping Modes",
      subheading: "Flexible Options for Every Business",
      description: <span><strong>Instant Access:</strong> Get your tips instantly—spend or transfer to your bank anytime.<br /><br /><strong>Pooled Tipping:</strong> Split tips effortlessly with smooth backend reporting for easy payouts.</span>
    },
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: "Take Home More Pay",
      subheading: "Earn What You Deserve",
      description: "At shops using Gain Funds, employees consistently report earning 30% more income each month."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "Get up and running instantly",
      subheading: "No Complicated Setup",
      description: "Takes 24 hours to implement so you can start earning immediatley"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Key Features</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {feature.icon}
                    <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  </div>
                  <p className="text-lg font-semibold text-primary/80">{feature.subheading}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};