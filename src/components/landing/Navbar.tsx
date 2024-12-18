import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { removeImageBackground } from "@/utils/imageUtils";

export const Navbar = () => {
  const [logoUrl, setLogoUrl] = useState("/lovable-uploads/8a77fb5a-2a25-4dd6-83d8-fd7dfe105401.png");

  useEffect(() => {
    const processLogo = async () => {
      const processedUrl = await removeImageBackground(logoUrl);
      setLogoUrl(processedUrl);
    };

    processLogo();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 py-4 border-b">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="https://gainfunds.com" className="flex items-center">
          <img 
            src={logoUrl} 
            alt="Gainfunds Logo" 
            className="h-8 md:h-10"
          />
        </a>
        <div className="flex items-center gap-6">
          <a 
            href="mailto:support@gainfunds.com" 
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden md:inline">support@gainfunds.com</span>
          </a>
          <a 
            href="tel:+18557327272" 
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">(855) 732-7272</span>
          </a>
        </div>
      </div>
    </nav>
  );
};