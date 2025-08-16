
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Code,
  Palette,
  Cpu,
  Lock,
  Brain,
  Workflow,
  ArrowRight,
  Quote
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design & Development",
      description: "Custom websites and web applications built with modern technologies, responsive design, and optimized performance for maximum user engagement.",
      features: ["React & Next.js Development", "Progressive Web Apps (PWA)", "E-commerce Solutions", "CMS Integration & Management"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience and robust functionality.",
      features: ["React Native Development", "Flutter Cross-Platform", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Cloud Services",
      description: "Comprehensive AWS cloud solutions for scalable, secure, and cost-effective infrastructure management with 24/7 monitoring.",
      features: ["EC2 & Lambda Functions", "S3 Storage & CloudFront CDN", "RDS & DynamoDB Management", "Auto Scaling & Load Balancing"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Azure Cloud Platform",
      description: "Microsoft Azure services for enterprise-grade cloud computing solutions with integrated security and compliance features.",
      features: ["Azure Virtual Machines", "Azure Functions & Logic Apps", "Cosmos DB & SQL Database", "Azure DevOps Integration"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps Services",
      description: "CI/CD pipelines, automation, and infrastructure as code for streamlined development and rapid deployment cycles.",
      features: ["Docker & Kubernetes", "Jenkins/GitHub Actions", "Terraform Infrastructure", "Monitoring & Logging Solutions"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Complete IT infrastructure setup and management for businesses with proactive monitoring and maintenance support.",
      features: ["Network Setup & Configuration", "Security Implementation", "Server Management", "Backup & Recovery Solutions"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Center Solutions",
      description: "Enterprise data center design, implementation, and maintenance services with high availability and disaster recovery.",
      features: ["Rack & Stack Services", "Power & Cooling Systems", "Network Infrastructure", "Disaster Recovery Planning"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets with threat detection and compliance management.",
      features: ["Penetration Testing", "Security Audits & Assessments", "Compliance Management", "24/7 Incident Response"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Website Hosting & SSL",
      description: "Reliable web hosting solutions with enterprise-grade SSL certificates, CDN integration, and 99.9% uptime guarantee.",
      features: ["Managed Hosting Services", "SSL Certificates & Security", "Domain Management", "Global CDN Integration"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Solutions",
      description: "Cutting-edge artificial intelligence and machine learning implementations for business automation and data insights.",
      features: ["Custom ML Models", "Natural Language Processing", "Computer Vision Solutions", "Predictive Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced Background Encoding Elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Matrix-style background */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-green-500"
              style={{
                left: `${(i * 12.5) % 100}%`,
                animationDelay: `${i * 1.2}s`,
                animation: 'binary-rain 12s linear infinite'
              }}
            >
              {Array.from({ length: 25 }).map((_, j) => (
                <div key={j} className="mb-1 opacity-60">
                  {['if', 'def', 'var', 'int', 'str', 'API', 'SQL', 'TCP', 'HTTP', 'JSON'][Math.floor(Math.random() * 10)]}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Network topology background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          
          {/* Network connections */}
          <g stroke="url(#networkGrad)" strokeWidth="1" fill="none">
            <path d="M100,100 L300,200 L500,150 L700,300 L900,250" className="animate-pulse"/>
            <path d="M150,400 L350,350 L550,450 L750,400 L950,500" className="animate-pulse delay-500"/>
            <path d="M200,700 L400,600 L600,750 L800,650 L900,800" className="animate-pulse delay-1000"/>
          </g>
          
          {/* Network nodes */}
          <g fill="url(#networkGrad)">
            <circle cx="100" cy="100" r="3" className="animate-pulse"/>
            <circle cx="300" cy="200" r="3" className="animate-pulse delay-300"/>
            <circle cx="500" cy="150" r="3" className="animate-pulse delay-600"/>
            <circle cx="700" cy="300" r="3" className="animate-pulse delay-900"/>
            <circle cx="900" cy="250" r="3" className="animate-pulse delay-1200"/>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <p className="text-lg text-blue-600 font-semibold font-inter tracking-wide uppercase">
              Professional IT Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              We provide end-to-end technology solutions to help your business thrive in the digital age with cutting-edge infrastructure and expert support.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm relative overflow-hidden">
              {/* Card background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id={`cardPattern${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="#3b82f6"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#cardPattern${index})`}/>
                </svg>
              </div>
              
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold font-poppins text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-inter leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 font-inter">
                      <Zap className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 font-inter"
                  >
                    <Quote className="w-4 h-4 mr-1" />
                    Quote
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-inter"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold font-poppins mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg font-inter mb-6 opacity-90">Let's discuss your technology needs and find the perfect solution for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 font-inter"
            >
              <Quote className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-inter"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
