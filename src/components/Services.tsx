
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
  Cpu
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
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50">
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
