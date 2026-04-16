import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { 
  Globe, Smartphone, Cloud, Server, GitBranch, Database,
  Shield, Monitor, Lock, Brain, ArrowRight, Zap
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Web Design & Development",
    description: "Custom websites and web applications built with modern technologies, responsive design, and optimized performance for maximum user engagement.",
    features: ["React & Next.js Development", "Progressive Web Apps (PWA)", "E-commerce Solutions", "CMS Integration & Management"],
    color: "#3b82f6",
    keyword: "WEB DEVELOPMENT"
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience and robust functionality.",
    features: ["React Native Development", "Flutter Cross-Platform", "Native iOS/Android", "App Store Deployment"],
    color: "#8b5cf6",
    keyword: "MOBILE APPS"
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "AWS Cloud Services",
    description: "Comprehensive AWS cloud solutions for scalable, secure, and cost-effective infrastructure management with 24/7 monitoring.",
    features: ["EC2 & Lambda Functions", "S3 Storage & CloudFront CDN", "RDS & DynamoDB Management", "Auto Scaling & Load Balancing"],
    color: "#f59e0b",
    keyword: "AWS CLOUD"
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    title: "Azure Cloud Platform",
    description: "Microsoft Azure services for enterprise-grade cloud computing solutions with integrated security and compliance features.",
    features: ["Azure Virtual Machines", "Azure Functions & Logic Apps", "Cosmos DB & SQL Database", "Azure DevOps Integration"],
    color: "#06b6d4",
    keyword: "AZURE CLOUD"
  },
  {
    icon: <GitBranch className="w-10 h-10" />,
    title: "DevOps Services",
    description: "CI/CD pipelines, automation, and infrastructure as code for streamlined development and rapid deployment cycles.",
    features: ["Docker & Kubernetes", "Jenkins/GitHub Actions", "Terraform Infrastructure", "Monitoring & Logging Solutions"],
    color: "#10b981",
    keyword: "DEVOPS"
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "IT Infrastructure",
    description: "Complete IT infrastructure setup and management for businesses with proactive monitoring and maintenance support.",
    features: ["Network Setup & Configuration", "Security Implementation", "Server Management", "Backup & Recovery Solutions"],
    color: "#ef4444",
    keyword: "INFRASTRUCTURE"
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Data Center Solutions",
    description: "Enterprise data center design, implementation, and maintenance services with high availability and disaster recovery.",
    features: ["Rack & Stack Services", "Power & Cooling Systems", "Network Infrastructure", "Disaster Recovery Planning"],
    color: "#ec4899",
    keyword: "DATA CENTER"
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets with threat detection and compliance management.",
    features: ["Penetration Testing", "Security Audits & Assessments", "Compliance Management", "24/7 Incident Response"],
    color: "#f97316",
    keyword: "CYBERSECURITY"
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Website Hosting & SSL",
    description: "Reliable web hosting solutions with enterprise-grade SSL certificates, CDN integration, and 99.9% uptime guarantee.",
    features: ["Managed Hosting Services", "SSL Certificates & Security", "Domain Management", "Global CDN Integration"],
    color: "#14b8a6",
    keyword: "HOSTING & SSL"
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI & ML Solutions",
    description: "Cutting-edge artificial intelligence and machine learning implementations for business automation and data insights.",
    features: ["Custom ML Models", "Natural Language Processing", "Computer Vision Solutions", "Predictive Analytics"],
    color: "#a855f7",
    keyword: "AI & ML"
  }
];

// 3D Rotating Tech Cube
const TechCube = ({ progress, activeColor }: { progress: number; activeColor: string }) => {
  const rotateY = progress * 360;
  const rotateX = Math.sin(progress * Math.PI * 2) * 15;
  
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64" style={{ perspective: "800px" }}>
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-[80px] opacity-40 transition-colors duration-700"
        style={{ backgroundColor: activeColor }}
      />
      
      {/* Cube */}
      <div
        className="w-full h-full relative transition-transform duration-100"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        }}
      >
        {/* Cube faces */}
        {["front", "back", "right", "left", "top", "bottom"].map((face, i) => {
          const transforms: Record<string, string> = {
            front: "translateZ(80px) md:translateZ(128px)",
            back: "rotateY(180deg) translateZ(80px)",
            right: "rotateY(90deg) translateZ(80px)",
            left: "rotateY(-90deg) translateZ(80px)",
            top: "rotateX(90deg) translateZ(80px)",
            bottom: "rotateX(-90deg) translateZ(80px)",
          };
          const transformValues: Record<string, string> = {
            front: `translateZ(${window.innerWidth >= 768 ? 128 : 96}px)`,
            back: `rotateY(180deg) translateZ(${window.innerWidth >= 768 ? 128 : 96}px)`,
            right: `rotateY(90deg) translateZ(${window.innerWidth >= 768 ? 128 : 96}px)`,
            left: `rotateY(-90deg) translateZ(${window.innerWidth >= 768 ? 128 : 96}px)`,
            top: `rotateX(90deg) translateZ(${window.innerWidth >= 768 ? 128 : 96}px)`,
            bottom: `rotateX(-90deg) translateZ(${window.innerWidth >= 768 ? 128 : 96}px)`,
          };
          
          return (
            <div
              key={face}
              className="absolute inset-4 md:inset-0 rounded-2xl border backdrop-blur-sm flex items-center justify-center"
              style={{
                transform: transformValues[face],
                backfaceVisibility: "hidden",
                borderColor: `${activeColor}30`,
                background: `linear-gradient(135deg, ${activeColor}15, ${activeColor}05)`,
                boxShadow: `inset 0 0 30px ${activeColor}10, 0 0 20px ${activeColor}08`,
                transition: "border-color 0.7s, background 0.7s, box-shadow 0.7s",
              }}
            >
              {/* Circuit pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                <line x1="20" y1="50" x2="80" y2="50" stroke={activeColor} strokeWidth="0.5" />
                <line x1="50" y1="20" x2="50" y2="80" stroke={activeColor} strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill={activeColor} opacity="0.5" />
                <circle cx="20" cy="50" r="2" fill={activeColor} opacity="0.3" />
                <circle cx="80" cy="50" r="2" fill={activeColor} opacity="0.3" />
                <circle cx="50" cy="20" r="2" fill={activeColor} opacity="0.3" />
                <circle cx="50" cy="80" r="2" fill={activeColor} opacity="0.3" />
                <rect x="35" y="35" width="30" height="30" rx="3" fill="none" stroke={activeColor} strokeWidth="0.5" opacity="0.4" />
              </svg>
              
              {/* Face icon */}
              <div className="relative z-10 opacity-60" style={{ color: activeColor }}>
                {services[i % services.length]?.icon}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Orbiting particles */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: activeColor,
            boxShadow: `0 0 10px ${activeColor}`,
            top: `${50 + Math.sin((rotateY / 57.3) + i * 1.57) * 45}%`,
            left: `${50 + Math.cos((rotateY / 57.3) + i * 1.57) * 45}%`,
            opacity: 0.6,
            transition: "background-color 0.7s, box-shadow 0.7s",
          }}
        />
      ))}
    </div>
  );
};

// Progress dots on the right side
const ProgressNav = ({ activeIndex, total }: { activeIndex: number; total: number }) => (
  <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
        {i === activeIndex && (
          <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest hidden md:block">
            {services[i]?.keyword}
          </span>
        )}
        <div
          className="transition-all duration-500 rounded-full"
          style={{
            width: i === activeIndex ? "12px" : "6px",
            height: i === activeIndex ? "12px" : "6px",
            backgroundColor: i === activeIndex ? services[i]?.color : "rgba(255,255,255,0.2)",
            boxShadow: i === activeIndex ? `0 0 12px ${services[i]?.color}` : "none",
          }}
        />
      </div>
    ))}
  </div>
);

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // Calculate how far we've scrolled through the section
    const scrolled = -rect.top;
    const totalScrollable = sectionHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    
    setScrollProgress(progress);
    
    // Determine active service
    const serviceIndex = Math.min(
      services.length - 1,
      Math.floor(progress * services.length)
    );
    setActiveIndex(serviceIndex);
    
    // Check if in view
    setIsInView(rect.top < viewportHeight && rect.bottom > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const activeService = services[activeIndex];
  const serviceProgress = (scrollProgress * services.length) - activeIndex;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#050508]"
      style={{ height: `${(services.length + 1) * 100}vh` }}
    >
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ opacity: isInView ? 0.03 : 0 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Animated background glow */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${activeService?.color}08 0%, transparent 70%)`,
            opacity: isInView ? 1 : 0,
          }}
        />

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l border-t transition-colors duration-700" style={{ borderColor: `${activeService?.color}40` }} />
        <div className="absolute top-4 right-4 w-8 h-8 border-r border-t transition-colors duration-700" style={{ borderColor: `${activeService?.color}40` }} />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b transition-colors duration-700" style={{ borderColor: `${activeService?.color}40` }} />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b transition-colors duration-700" style={{ borderColor: `${activeService?.color}40` }} />

        {/* Progress nav */}
        {isInView && <ProgressNav activeIndex={activeIndex} total={services.length} />}

        {/* Section number (left side) */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20">
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-center">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent" style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${activeService?.color}60)` }} />
              <div className="my-2 font-mono text-2xl font-bold transition-colors duration-700" style={{ color: activeService?.color }}>
                {String(activeIndex + 1).padStart(2, "0")}
              </div>
              <div className="w-[1px] h-12" style={{ backgroundImage: `linear-gradient(to bottom, ${activeService?.color}60, transparent)` }} />
            </div>
          </div>
        </div>

        {/* Main content layout */}
        <div className="h-full flex items-center justify-center px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center max-w-7xl w-full">
            
            {/* Left: Service info */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <div
                key={activeIndex}
                className="space-y-6"
                style={{
                  animation: "slideInFromRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
              >
                {/* Service number badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-white/5"
                  style={{ borderColor: `${activeService?.color}30` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeService?.color }} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: activeService?.color }}>
                    {activeService?.keyword}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-4xl font-bold font-poppins text-white leading-tight">
                  {activeService?.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 font-inter leading-relaxed max-w-md">
                  {activeService?.description}
                </p>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    className="flex items-center gap-2 text-sm font-inter transition-all duration-300 mx-auto md:mx-0 group"
                    style={{ color: activeService?.color }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Center: 3D Tech Cube */}
            <div className="order-1 md:order-2 flex items-center justify-center">
              <TechCube
                progress={scrollProgress}
                activeColor={activeService?.color || "#3b82f6"}
              />
            </div>

            {/* Right: Features */}
            <div className="order-3 text-center md:text-right">
              <div
                key={`features-${activeIndex}`}
                style={{
                  animation: "slideInFromLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
              >
                <ul className="space-y-4">
                  {activeService?.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 justify-center md:justify-end text-sm md:text-base"
                      style={{
                        animation: `fadeSlideIn 0.5s ${idx * 0.1}s cubic-bezier(0.16, 1, 0.3, 1) both`,
                      }}
                    >
                      <span className="text-gray-300 font-inter">{feature}</span>
                      <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 border"
                        style={{ 
                          borderColor: `${activeService?.color}30`,
                          backgroundColor: `${activeService?.color}10`,
                        }}
                      >
                        <Zap className="w-3 h-3" style={{ color: activeService?.color }} />
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Service icon large */}
                <div className="mt-8 flex justify-center md:justify-end">
                  <div
                    className="w-16 h-16 rounded-xl border flex items-center justify-center transition-all duration-700"
                    style={{
                      borderColor: `${activeService?.color}20`,
                      backgroundColor: `${activeService?.color}08`,
                      color: activeService?.color,
                      boxShadow: `0 0 30px ${activeService?.color}15`,
                    }}
                  >
                    {activeService?.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${scrollProgress * 100}%`,
              background: `linear-gradient(to right, ${activeService?.color}, ${services[(activeIndex + 1) % services.length]?.color})`,
              boxShadow: `0 0 10px ${activeService?.color}60`,
            }}
          />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">
          Scroll to explore • {activeIndex + 1}/{services.length}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
