import { useState } from "react";
import { Menu, X, Server, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-lg border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center space-x-3" aria-label="InfraRise Technologies home">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md">
              <Server className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-poppins text-gradient-primary">InfraRise</h1>
              <p className="text-xs text-muted-foreground font-medium">Technologies</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-md">
              <a href="#contact"><Phone className="w-4 h-4 mr-2" />Contact Us</a>
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-foreground/80 hover:text-primary px-3 py-3 rounded-lg text-base font-medium hover:bg-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="w-full bg-gradient-primary text-primary-foreground mt-2">
                <a href="#contact"><Phone className="w-4 h-4 mr-2" />Contact Us</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
