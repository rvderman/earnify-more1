import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/8a77fb5a-2a25-4dd6-83d8-fd7dfe105401.png" 
              alt="Gainfunds Logo" 
              className="h-12"
            />
            <p className="text-gray-300 max-w-lg">
              Gain Funds is built to transform the banking and financial experience. Gain Funds leverages the latest innovations in technology to provide a safe, convenient, and trusted account for customers to access with a government-issued ID.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="mailto:support@gainfunds.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                support@gainfunds.com
              </a>
              <a 
                href="tel:+18557327272" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                (855) 732-7272
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <nav className="space-y-4">
              <Link to="/contact" className="block text-xl hover:text-secondary transition-colors">
                Contact Us
              </Link>
              <Link to="/terms" className="block text-xl hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block text-xl hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/esign" className="block text-xl hover:text-secondary transition-colors">
                E-sign Disclosure
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};