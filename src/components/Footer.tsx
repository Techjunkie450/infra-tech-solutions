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
    <footer className="relative bg-gradient-to-br from-secondary via-background to-secondary border-t border-border text-foreground overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold text-gradient-primary">InfraRise Technologies</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Transforming businesses through innovative technology solutions — cloud, web, mobile, DevOps, AI/ML and more.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-10 h-10 bg-secondary border border-border rounded-full flex items-center justify-center text-foreground hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-foreground">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-foreground">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-foreground">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:hello@infrarisetech.com" className="flex items-center space-x-3 text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@infrarisetech.com</span>
              </a>
              <a href="tel:+918769560336" className="flex items-center space-x-3 text-muted-foreground hover:text-primary">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 8769560336</span>
              </a>
              <a href="https://maps.google.com/?q=Rajsamand+313301" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 text-muted-foreground hover:text-primary">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>Rajsamand 313301, India</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} InfraRise Technologies. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
