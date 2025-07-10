
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Workflow
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design & Development",
      description: "Custom websites and web applications built with modern technologies and responsive design.",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AWS Cloud Services",
      description: "Comprehensive AWS cloud solutions for scalable and secure infrastructure.",
      features: ["EC2 & Lambda", "S3 & CloudFront", "RDS & DynamoDB", "Auto Scaling"]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Azure Cloud Platform",
      description: "Microsoft Azure services for enterprise-grade cloud computing solutions.",
      features: ["Azure VM", "Azure Functions", "Cosmos DB", "Azure DevOps"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps Services",
      description: "CI/CD pipelines, automation, and infrastructure as code for streamlined development.",
      features: ["Docker & Kubernetes", "Jenkins/GitHub Actions", "Terraform", "Monitoring & Logging"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "IT Infrastructure",
      description: "Complete IT infrastructure setup and management for businesses of all sizes.",
      features: ["Network Setup", "Security Implementation", "Server Management", "Backup Solutions"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Center Solutions",
      description: "Enterprise data center design, implementation, and maintenance services.",
      features: ["Rack & Stack", "Power & Cooling", "Network Infrastructure", "Disaster Recovery"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      features: ["Penetration Testing", "Security Audits", "Compliance", "Incident Response"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Website Hosting & SSL",
      description: "Reliable web hosting solutions with enterprise-grade SSL certificates and security.",
      features: ["Managed Hosting", "SSL Certificates", "Domain Management", "CDN Integration"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Solutions",
      description: "Cutting-edge artificial intelligence and machine learning implementations for business automation.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements for IT infrastructure feel */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-blue-300 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-48 h-48 rounded-full border border-purple-300 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full border border-cyan-300 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-56 h-56 rounded-full border-2 border-indigo-300 animate-pulse delay-700"></div>
      </div>
      
      {/* Data wave pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="dataWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="url(#dataWave)" className="animate-pulse">
            <animateTransform attributeName="transform" type="translate" values="0 0; 100 0; 0 0" dur="20s" repeatCount="indefinite"/>
          </path>
          <path d="M0,350 Q300,250 600,350 T1200,350 L1200,600 L0,600 Z" fill="url(#dataWave)" className="animate-pulse delay-1000">
            <animateTransform attributeName="transform" type="translate" values="0 0; -100 0; 0 0" dur="25s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end technology solutions to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Zap className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
