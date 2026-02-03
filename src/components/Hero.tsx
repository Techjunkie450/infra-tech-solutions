
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, Server, Quote, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 overflow-hidden">
      {/* Tech Gadgets Background */}
      <div className="absolute inset-0">
        {/* Floating Tech Gadgets */}
        <div className="absolute inset-0 opacity-30">
          {/* Laptop */}
          <div className="absolute animate-float" style={{ left: '5%', top: '15%', animationDelay: '0s' }}>
            <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="12" rx="2" />
              <path d="M1 16h22l-1 4H2l-1-4z" />
              <path d="M6 8h12M6 11h8" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          
          {/* Smartphone */}
          <div className="absolute animate-float" style={{ left: '85%', top: '20%', animationDelay: '1s' }}>
            <svg className="w-12 h-12 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* Server Rack */}
          <div className="absolute animate-float" style={{ left: '15%', top: '70%', animationDelay: '2s' }}>
            <svg className="w-14 h-14 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="6" rx="1" />
              <rect x="2" y="9" width="20" height="6" rx="1" />
              <rect x="2" y="16" width="20" height="6" rx="1" />
              <circle cx="6" cy="5" r="1" fill="currentColor" />
              <circle cx="6" cy="12" r="1" fill="currentColor" />
              <circle cx="6" cy="19" r="1" fill="currentColor" />
            </svg>
          </div>
          
          {/* Cloud Icon */}
          <div className="absolute animate-float" style={{ left: '80%', top: '65%', animationDelay: '0.5s' }}>
            <svg className="w-20 h-20 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
          </div>
          
          {/* CPU Chip */}
          <div className="absolute animate-float" style={{ left: '45%', top: '8%', animationDelay: '1.5s' }}>
            <svg className="w-14 h-14 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <rect x="8" y="8" width="8" height="8" rx="1" />
              <line x1="2" y1="9" x2="4" y2="9" />
              <line x1="2" y1="15" x2="4" y2="15" />
              <line x1="20" y1="9" x2="22" y2="9" />
              <line x1="20" y1="15" x2="22" y2="15" />
              <line x1="9" y1="2" x2="9" y2="4" />
              <line x1="15" y1="2" x2="15" y2="4" />
              <line x1="9" y1="20" x2="9" y2="22" />
              <line x1="15" y1="20" x2="15" y2="22" />
            </svg>
          </div>
          
          {/* Router/Wifi */}
          <div className="absolute animate-float" style={{ left: '70%', top: '35%', animationDelay: '2.5s' }}>
            <svg className="w-12 h-12 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12.55a11 11 0 0114 0" />
              <path d="M8.53 16.11a6 6 0 016.95 0" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
          </div>
          
          {/* Database */}
          <div className="absolute animate-float" style={{ left: '25%', top: '40%', animationDelay: '3s' }}>
            <svg className="w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
          </div>
          
          {/* Security Shield */}
          <div className="absolute animate-float" style={{ left: '60%', top: '75%', animationDelay: '1.2s' }}>
            <svg className="w-12 h-12 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          
          {/* Monitor */}
          <div className="absolute animate-float" style={{ left: '35%', top: '80%', animationDelay: '0.8s' }}>
            <svg className="w-14 h-14 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          
          {/* Code Brackets */}
          <div className="absolute animate-float" style={{ left: '92%', top: '45%', animationDelay: '2.2s' }}>
            <svg className="w-10 h-10 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="16,18 22,12 16,6" />
              <polyline points="8,6 2,12 8,18" />
            </svg>
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1400 900">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <path d="M70,135 Q400,300 630,72" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="10s" repeatCount="indefinite"/>
          </path>
          <path d="M1190,180 Q900,400 980,585" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="12s" repeatCount="indefinite"/>
          </path>
          <path d="M210,630 Q500,500 840,675" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="15s" repeatCount="indefinite"/>
          </path>
          <path d="M350,360 Q600,200 980,315" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="8,8">
            <animate attributeName="stroke-dashoffset" values="0;-100" dur="8s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* Glowing Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Data Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 opacity-30">
        <svg viewBox="0 0 1200 300" className="w-full h-48">
          <defs>
            <linearGradient id="heroWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9"/>
              <stop offset="33%" stopColor="#8b5cf6" stopOpacity="0.9"/>
              <stop offset="66%" stopColor="#06b6d4" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9"/>
            </linearGradient>
          </defs>
          <path d="M0,150 Q300,100 600,150 T1200,150 L1200,300 L0,300 Z" fill="url(#heroWave)">
            <animateTransform attributeName="transform" type="translate" values="0 0; 100 0; 0 0" dur="20s" repeatCount="indefinite"/>
          </path>
          <path d="M0,180 Q300,130 600,180 T1200,180 L1200,300 L0,300 Z" fill="url(#heroWave)" opacity="0.7">
            <animateTransform attributeName="transform" type="translate" values="0 0; -100 0; 0 0" dur="25s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Professional Tagline */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-cyan-400 font-semibold font-inter tracking-wide uppercase">
              Powering Scalable Tech Infrastructure
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-white leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next-Gen IT Solutions
              </span>
            </h1>
          </div>
          
          {/* Enhanced Service Description */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter">
              From cutting-edge web design and mobile apps to enterprise cloud infrastructure, AI/ML solutions, and secure hosting - we deliver comprehensive IT solutions that drive innovation and growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto text-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                <Globe className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 font-poppins mb-2">Web & Mobile Solutions</h3>
                <p className="text-sm text-gray-600 font-inter">Custom websites, progressive web apps, and native mobile applications built with modern frameworks and responsive design.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                <Cloud className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 font-poppins mb-2">Cloud & Infrastructure</h3>
                <p className="text-sm text-gray-600 font-inter">AWS and Azure cloud services, DevOps automation, and enterprise-grade infrastructure management for scalable operations.</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                <Server className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900 font-poppins mb-2">Network & Security</h3>
                <p className="text-sm text-gray-600 font-inter">Data center solutions, cybersecurity, SSL certificates, and comprehensive IT infrastructure for business continuity.</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold font-inter group shadow-xl"
            >
              <Quote className="mr-2 w-5 h-5" />
              Get Free Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold font-inter shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Contact Us
            </Button>
          </div>
          
          {/* Enhanced Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300 font-inter">Web Design</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300 font-inter">Mobile Apps</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300 font-inter">Cloud Services</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Server className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-300 font-inter">Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
