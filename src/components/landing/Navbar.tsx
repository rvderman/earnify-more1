import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 py-4 border-b">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8a77fb5a-2a25-4dd6-83d8-fd7dfe105401.png" 
            alt="Gainfunds Logo" 
            className="h-8 md:h-10"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="#how-it-works" className="text-gray-600 hover:text-primary">
            How It Works
          </Link>
          <Link to="#why-better" className="text-gray-600 hover:text-primary">
            Why It's Better
          </Link>
          <Link to="#testimonials" className="text-gray-600 hover:text-primary">
            Testimonials
          </Link>
          <Link to="#faqs" className="text-gray-600 hover:text-primary">
            FAQs
          </Link>
          <Button variant="secondary">Boost My Tips</Button>
        </div>
      </div>
    </nav>
  );
};