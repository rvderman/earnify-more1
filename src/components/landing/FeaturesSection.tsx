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
      title: "Instant Tip Access",
      subheading: "Your Money, Instantly",
      description: "Your tips are available immediately. Transfer to your bank account or use it to purchase more of your favorite products after your shift"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: "Earn 30% More Tips",
      subheading: "Get Paid What You're Worth",
      description: "Staff using our system frequently see an extra $1,000–$2,500 in tips each month—money that's well deserved."
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