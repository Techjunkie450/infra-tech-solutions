import { useEffect, useRef, useState, useCallback } from "react";
import {
  Globe, Smartphone, Cloud, Server, GitBranch, Database,
  Shield, Monitor, Lock, Brain, ArrowRight, Check
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Web Design & Development",
    description: "Custom websites and web applications built with modern technologies, responsive design, and optimized performance for maximum user engagement.",
    features: ["React & Next.js Development", "Progressive Web Apps (PWA)", "E-commerce Solutions", "CMS Integration & Management"],
    color: "224 76% 48%",
    keyword: "WEB DEVELOPMENT",
  },
  {
    icon: <Smartphone className="w-10 h-10" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience and robust functionality.",
    features: ["React Native Development", "Flutter Cross-Platform", "Native iOS/Android", "App Store Deployment"],
    color: "262 70% 55%",
    keyword: "MOBILE APPS",
  },
  {
    icon: <Cloud className="w-10 h-10" />,
    title: "AWS Cloud Services",
    description: "Comprehensive AWS cloud solutions for scalable, secure, and cost-effective infrastructure management with 24/7 monitoring.",
    features: ["EC2 & Lambda Functions", "S3 Storage & CloudFront CDN", "RDS & DynamoDB Management", "Auto Scaling & Load Balancing"],
    color: "32 95% 50%",
    keyword: "AWS CLOUD",
  },
  {
    icon: <Monitor className="w-10 h-10" />,
    title: "Azure Cloud Platform",
    description: "Microsoft Azure services for enterprise-grade cloud computing solutions with integrated security and compliance features.",
    features: ["Azure Virtual Machines", "Azure Functions & Logic Apps", "Cosmos DB & SQL Database", "Azure DevOps Integration"],
    color: "190 95% 45%",
    keyword: "AZURE CLOUD",
  },
  {
    icon: <GitBranch className="w-10 h-10" />,
    title: "DevOps Services",
    description: "CI/CD pipelines, automation, and infrastructure as code for streamlined development and rapid deployment cycles.",
    features: ["Docker & Kubernetes", "Jenkins/GitHub Actions", "Terraform Infrastructure", "Monitoring & Logging Solutions"],
    color: "160 84% 39%",
    keyword: "DEVOPS",
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: "IT Infrastructure",
    description: "Complete IT infrastructure setup and management for businesses with proactive monitoring and maintenance support.",
    features: ["Network Setup & Configuration", "Security Implementation", "Server Management", "Backup & Recovery Solutions"],
    color: "0 75% 55%",
    keyword: "INFRASTRUCTURE",
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: "Data Center Solutions",
    description: "Enterprise data center design, implementation, and maintenance services with high availability and disaster recovery.",
    features: ["Rack & Stack Services", "Power & Cooling Systems", "Network Infrastructure", "Disaster Recovery Planning"],
    color: "330 80% 55%",
    keyword: "DATA CENTER",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets with threat detection and compliance management.",
    features: ["Penetration Testing", "Security Audits & Assessments", "Compliance Management", "24/7 Incident Response"],
    color: "20 90% 55%",
    keyword: "CYBERSECURITY",
  },
  {
    icon: <Lock className="w-10 h-10" />,
    title: "Website Hosting & SSL",
    description: "Reliable web hosting solutions with enterprise-grade SSL certificates, CDN integration, and 99.9% uptime guarantee.",
    features: ["Managed Hosting Services", "SSL Certificates & Security", "Domain Management", "Global CDN Integration"],
    color: "175 80% 40%",
    keyword: "HOSTING & SSL",
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI & ML Solutions",
    description: "Cutting-edge artificial intelligence and machine learning implementations for business automation and data insights.",
    features: ["Custom ML Models", "Natural Language Processing", "Computer Vision Solutions", "Predictive Analytics"],
    color: "280 75% 60%",
    keyword: "AI & ML",
  },
];

// 3D Rotating Tech Cube — light theme
const TechCube = ({ progress, accentHsl }: { progress: number; accentHsl: string }) => {
  const rotateY = progress * 360;
  const rotateX = Math.sin(progress * Math.PI * 2) * 15;

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64" style={{ perspective: "800px" }}>
      <div
        className="absolute inset-0 rounded-full blur-[80px] opacity-40 transition-colors duration-700"
        style={{ backgroundColor: `hsl(${accentHsl} / 0.45)` }}
      />
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        }}
      >
        {["front", "back", "right", "left", "top", "bottom"].map((face, i) => {
          const t: Record<string, string> = {
            front: "translateZ(110px)",
            back: "rotateY(180deg) translateZ(110px)",
            right: "rotateY(90deg) translateZ(110px)",
            left: "rotateY(-90deg) translateZ(110px)",
            top: "rotateX(90deg) translateZ(110px)",
            bottom: "rotateX(-90deg) translateZ(110px)",
          };
          return (
            <div
              key={face}
              className="absolute inset-0 rounded-2xl border backdrop-blur-sm flex items-center justify-center"
              style={{
                transform: t[face],
                backfaceVisibility: "hidden",
                borderColor: `hsl(${accentHsl} / 0.35)`,
                background: `linear-gradient(135deg, hsl(${accentHsl} / 0.12), hsl(${accentHsl} / 0.04))`,
                boxShadow: `inset 0 0 30px hsl(${accentHsl} / 0.15), 0 0 25px hsl(${accentHsl} / 0.18)`,
                transition: "border-color 0.7s, background 0.7s, box-shadow 0.7s",
              }}
            >
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                <line x1="20" y1="50" x2="80" y2="50" stroke={`hsl(${accentHsl})`} strokeWidth="0.5" />
                <line x1="50" y1="20" x2="50" y2="80" stroke={`hsl(${accentHsl})`} strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill={`hsl(${accentHsl})`} opacity="0.6" />
                <rect x="35" y="35" width="30" height="30" rx="3" fill="none" stroke={`hsl(${accentHsl})`} strokeWidth="0.5" opacity="0.5" />
              </svg>
              <div className="relative z-10" style={{ color: `hsl(${accentHsl})` }}>
                {services[i % services.length]?.icon}
              </div>
            </div>
          );
        })}
      </div>

      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: `hsl(${accentHsl})`,
            boxShadow: `0 0 10px hsl(${accentHsl})`,
            top: `${50 + Math.sin((rotateY / 57.3) + i * 1.57) * 45}%`,
            left: `${50 + Math.cos((rotateY / 57.3) + i * 1.57) * 45}%`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

const ProgressNav = ({ activeIndex, total }: { activeIndex: number; total: number }) => (
  <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
        {i === activeIndex && (
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest hidden md:block">
            {services[i]?.keyword}
          </span>
        )}
        <div
          className="transition-all duration-500 rounded-full"
          style={{
            width: i === activeIndex ? "12px" : "6px",
            height: i === activeIndex ? "12px" : "6px",
            backgroundColor: i === activeIndex ? `hsl(${services[i]?.color})` : "hsl(var(--border))",
            boxShadow: i === activeIndex ? `0 0 12px hsl(${services[i]?.color})` : "none",
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
    const scrolled = -rect.top;
    const totalScrollable = sectionHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
    setScrollProgress(progress);
    const serviceIndex = Math.min(services.length - 1, Math.floor(progress * services.length));
    setActiveIndex(serviceIndex);
    setIsInView(rect.top < viewportHeight && rect.bottom > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const activeService = services[activeIndex];
  const accent = activeService?.color || "224 76% 48%";

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-gradient-soft"
      style={{ height: `${(services.length + 1) * 100}vh` }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Accent ambient glow */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, hsl(${accent} / 0.12) 0%, transparent 70%)`,
            opacity: isInView ? 1 : 0,
          }}
        />

        {/* Corner ticks */}
        {(["top-4 left-4 border-l border-t", "top-4 right-4 border-r border-t", "bottom-4 left-4 border-l border-b", "bottom-4 right-4 border-r border-b"] as const).map((cls, i) => (
          <div key={i} className={`absolute w-8 h-8 transition-colors duration-700 ${cls}`} style={{ borderColor: `hsl(${accent} / 0.5)` }} />
        ))}

        {isInView && <ProgressNav activeIndex={activeIndex} total={services.length} />}

        {/* Section number */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
          <div className="w-[1px] h-12" style={{ backgroundImage: `linear-gradient(to bottom, transparent, hsl(${accent} / 0.6))` }} />
          <div className="my-2 font-mono text-2xl font-bold transition-colors duration-700" style={{ color: `hsl(${accent})` }}>
            {String(activeIndex + 1).padStart(2, "0")}
          </div>
          <div className="w-[1px] h-12" style={{ backgroundImage: `linear-gradient(to bottom, hsl(${accent} / 0.6), transparent)` }} />
        </div>

        {/* Header */}
        <div className="absolute top-10 md:top-14 left-1/2 -translate-x-1/2 text-center px-4 z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mt-2">Scroll to explore our full capabilities</p>
        </div>

        {/* Main layout */}
        <div className="h-full flex items-center justify-center px-4 md:px-20 pt-24 md:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center max-w-7xl w-full">
            {/* Left: info */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <div key={activeIndex} className="space-y-5" style={{ animation: "slideInFromRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards" }}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/60"
                  style={{ borderColor: `hsl(${accent} / 0.4)` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: `hsl(${accent})` }} />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: `hsl(${accent})` }}>
                    {activeService?.keyword}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">{activeService?.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                  {activeService?.description}
                </p>
                <div className="pt-1">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium group" style={{ color: `hsl(${accent})` }}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Center: cube */}
            <div className="order-1 md:order-2 flex items-center justify-center">
              <TechCube progress={scrollProgress} accentHsl={accent} />
            </div>

            {/* Right: features */}
            <div className="order-3 text-center md:text-right">
              <div key={`f-${activeIndex}`} style={{ animation: "slideInFromLeft 0.6s cubic-bezier(0.16,1,0.3,1) forwards" }}>
                <ul className="space-y-3">
                  {activeService?.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 justify-center md:justify-end text-sm md:text-base"
                      style={{ animation: `fadeSlideIn 0.5s ${idx * 0.08}s cubic-bezier(0.16,1,0.3,1) both` }}
                    >
                      <span className="text-foreground font-medium">{feature}</span>
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 border"
                        style={{ borderColor: `hsl(${accent} / 0.4)`, backgroundColor: `hsl(${accent} / 0.12)` }}
                      >
                        <Check className="w-3.5 h-3.5" style={{ color: `hsl(${accent})` }} />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex justify-center md:justify-end">
                  <div
                    className="w-16 h-16 rounded-xl border flex items-center justify-center transition-all duration-700"
                    style={{
                      borderColor: `hsl(${accent} / 0.35)`,
                      backgroundColor: `hsl(${accent} / 0.1)`,
                      color: `hsl(${accent})`,
                      boxShadow: `0 0 30px hsl(${accent} / 0.25)`,
                    }}
                  >
                    {activeService?.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-border">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${scrollProgress * 100}%`,
              background: `linear-gradient(to right, hsl(${accent}), hsl(${services[(activeIndex + 1) % services.length]?.color}))`,
              boxShadow: `0 0 10px hsl(${accent} / 0.6)`,
            }}
          />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
          Scroll to explore • {activeIndex + 1}/{services.length}
        </div>
      </div>
    </section>
  );
};
