
import { useState } from "react";
import { Menu, X, Server, Quote, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import infrariseLogo from "@/assets/infrarise-logo.png";

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
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-gray-700 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Professional Logo */}
          <div className="flex items-center space-x-3">
            <img src={infrariseLogo} alt="InfRaRise Technologies" className="h-12 w-auto" />
            <div>
              <h1 className="text-2xl font-bold font-poppins text-white">
                <span>Infra</span><span className="text-cyan-400">R</span><span>ise</span>
              </h1>
              <p className="text-xs bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent font-bold font-inter">TECHNOLOGIES</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg text-sm font-medium font-inter transition-all duration-200 hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-inter"
            >
              <Quote className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-inter">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-gray-600">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-cyan-400 px-3 py-3 rounded-lg text-base font-medium font-inter hover:bg-slate-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-inter"
                >
                  <Quote className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-inter">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
