import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Server, 
  GitBranch, 
  Database,
  Shield,
  Zap,
  Monitor,
  Lock,
  Brain,
  ArrowRight
} from "lucide-react";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const transform3D = isHovered
    ? `perspective(1000px) rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg) scale3d(1.05, 1.05, 1.05)`
    : isVisible
    ? "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)"
    : "perspective(1000px) rotateY(25deg) rotateX(5deg) translateX(120px) scale3d(0.9, 0.9, 0.9)";

  const glowX = (mousePos.x + 0.5) * 100;
  const glowY = (mousePos.y + 0.5) * 100;

  return (
    <div
      ref={cardRef}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      style={{
        transform: transform3D,
        opacity: isVisible ? 1 : 0,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(59,130,246,0.5), rgba(139,92,246,0.3), transparent 70%)`,
        }}
      />
      
      {/* Card */}
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/80 backdrop-blur-xl p-6 h-full overflow-hidden">
        {/* Inner glow following mouse */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(59,130,246,0.15), transparent 60%)`,
          }}
        />
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%, rgba(139,92,246,0.1) 100%)",
          }}
        />

        {/* Number badge */}
        <div className="absolute top-4 right-4 text-xs font-mono text-white/20 group-hover:text-blue-400/50 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Icon */}
        <div className="relative z-10 mb-5">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:border-blue-400/40 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-lg font-bold text-white mb-2 font-poppins group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-sm text-gray-400 mb-4 leading-relaxed font-inter">
          {service.description}
        </p>

        {/* Features */}
        <ul className="relative z-10 space-y-2 mb-5">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 font-inter"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <Zap className="w-3 h-3 text-blue-500/60 group-hover:text-blue-400 mr-2 flex-shrink-0 transition-colors" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="relative z-10">
          <button className="flex items-center text-sm text-blue-400/70 group-hover:text-blue-300 font-inter transition-all duration-300 group-hover:translate-x-1">
            Learn More
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.3 }
    );

    const header = document.getElementById("services-header");
    if (header) observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Web Design & Development",
      description: "Custom websites and web applications built with modern technologies, responsive design, and optimized performance.",
      features: ["React & Next.js Development", "Progressive Web Apps (PWA)", "E-commerce Solutions", "CMS Integration & Management"]
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      features: ["React Native Development", "Flutter Cross-Platform", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "AWS Cloud Services",
      description: "Comprehensive AWS cloud solutions for scalable, secure, and cost-effective infrastructure management.",
      features: ["EC2 & Lambda Functions", "S3 Storage & CloudFront CDN", "RDS & DynamoDB Management", "Auto Scaling & Load Balancing"]
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: "Azure Cloud Platform",
      description: "Microsoft Azure services for enterprise-grade cloud computing with integrated security and compliance.",
      features: ["Azure Virtual Machines", "Azure Functions & Logic Apps", "Cosmos DB & SQL Database", "Azure DevOps Integration"]
    },
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: "DevOps Services",
      description: "CI/CD pipelines, automation, and infrastructure as code for streamlined development cycles.",
      features: ["Docker & Kubernetes", "Jenkins/GitHub Actions", "Terraform Infrastructure", "Monitoring & Logging Solutions"]
    },
    {
      icon: <Server className="w-7 h-7" />,
      title: "IT Infrastructure",
      description: "Complete IT infrastructure setup and management with proactive monitoring and maintenance.",
      features: ["Network Setup & Configuration", "Security Implementation", "Server Management", "Backup & Recovery Solutions"]
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Data Center Solutions",
      description: "Enterprise data center design, implementation, and maintenance with high availability.",
      features: ["Rack & Stack Services", "Power & Cooling Systems", "Network Infrastructure", "Disaster Recovery Planning"]
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets with threat detection.",
      features: ["Penetration Testing", "Security Audits & Assessments", "Compliance Management", "24/7 Incident Response"]
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Website Hosting & SSL",
      description: "Reliable web hosting with enterprise-grade SSL certificates and 99.9% uptime guarantee.",
      features: ["Managed Hosting Services", "SSL Certificates & Security", "Domain Management", "Global CDN Integration"]
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI & ML Solutions",
      description: "Cutting-edge AI and machine learning implementations for business automation and insights.",
      features: ["Custom ML Models", "Natural Language Processing", "Computer Vision Solutions", "Predictive Analytics"]
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[200px]" />

      {/* Scanning line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          style={{
            animation: "scanline 8s linear infinite",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          id="services-header"
          className="text-center mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6">
            Technology{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-inter leading-relaxed">
            End-to-end technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-inter px-8 py-6 text-base rounded-xl border-0"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
};
