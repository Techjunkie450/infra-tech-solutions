import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Server } from "lucide-react";

export const Footer = () => {
  const services = [
    "Web Design & Development",
    "Mobile App Development",
    "AWS Cloud Services",
    "Azure Cloud Services",
    "DevOps Services",
    "IT Infrastructure",
    "Data Center Solutions",
    "Cybersecurity",
    "Website Hosting & SSL",
    "AI & ML Solutions",
  ];

  const company = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-gradient-primary">InfraRise Technologies</h2>
            </div>
            <p className="text-background/70 leading-relaxed text-sm">
              Transforming businesses through innovative technology solutions — cloud, web, mobile, DevOps, AI/ML and more.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-background/70 hover:text-background text-sm transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-background/70 hover:text-background text-sm transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:hello@infrarisetech.com" className="flex items-center space-x-3 text-background/70 hover:text-background">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@infrarisetech.com</span>
              </a>
              <a href="tel:+918769560336" className="flex items-center space-x-3 text-background/70 hover:text-background">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 8769560336</span>
              </a>
              <a href="https://maps.google.com/?q=Rajsamand+313301" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 text-background/70 hover:text-background">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Rajsamand 313301, India</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">© {new Date().getFullYear()} InfraRise Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
