import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can we start using GainFunds?",
      answer: "You can be up and running within 24 hours of signing up. Our team handles all the setup and provides training to ensure a smooth transition."
    },
    {
      question: "How do staff members access their tips?",
      answer: "Staff can access their tips instantly through our secure platform. They can transfer funds to their bank account or use them directly through our platform."
    },
    {
      question: "Is this system compliant with regulations?",
      answer: "Yes, GainFunds is fully compliant with all relevant regulations. We're backed by an 80-year-old bank and trusted by major retail brands."
    },
    {
      question: "What happens if there are technical issues?",
      answer: "We provide 24/7 technical support to ensure your business operations run smoothly. Our system also has offline capabilities to prevent any disruptions."
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
          <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about GainFunds</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};