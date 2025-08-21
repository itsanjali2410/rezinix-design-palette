import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      "AI Analytics Platform",
      "Predictive Intelligence", 
      "Secure AI Gateway",
      "Automation Suite",
    ],
    Solutions: [
      "Enterprise AI",
      "Business Intelligence",
      "Team Collaboration",
      "Custom Development",
    ],
    Company: [
      "About Us",
      "Careers",
      "News & Press",
      "Partners",
    ],
    Support: [
      "Documentation",
      "Help Center",
      "Contact Support",
      "Status Page",
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">rezinix.AI</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Transforming businesses through intelligent AI solutions. 
                Making artificial intelligence accessible, practical, and powerful for enterprises worldwide.
              </p>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>© {currentYear} rezinix.AI. All rights reserved.</p>
              <p className="mt-1">
                Built with precision, powered by innovation.
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Enterprise-grade security and compliance
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;