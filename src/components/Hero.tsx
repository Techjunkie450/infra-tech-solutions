
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, Server, Quote, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 overflow-hidden">
      {/* Advanced Background Encoding Effects */}
      <div className="absolute inset-0 opacity-10">
        {/* Binary Rain Effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-blue-500"
              style={{
                left: `${(i * 7) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animation: 'binary-rain 8s linear infinite'
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j} className="mb-2">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Data Flow Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                width: '200px',
                animationDelay: `${i * 2}s`,
                animation: 'data-flow 15s linear infinite'
              }}
            />
          ))}
        </div>

        {/* Hexagonal Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="10" height="8.66" patternUnits="userSpaceOnUse">
              <polygon points="5,0 10,2.89 10,6.93 5,9.82 0,6.93 0,2.89" fill="none" stroke="url(#hexGradient)" strokeWidth="0.1"/>
            </pattern>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)"/>
        </svg>

        {/* Floating Network Nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Circuit Connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <path d="M100,200 L300,200 L300,400 L500,400 L500,600" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M700,150 L900,150 L900,350 L1100,350 L1100,550" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse delay-500"/>
          <path d="M200,650 L400,650 L400,450 L600,450 L600,250" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse delay-1000"/>
          <circle cx="300" cy="200" r="4" fill="url(#circuitGrad)" className="animate-pulse"/>
          <circle cx="500" cy="400" r="4" fill="url(#circuitGrad)" className="animate-pulse delay-300"/>
          <circle cx="900" cy="350" r="4" fill="url(#circuitGrad)" className="animate-pulse delay-700"/>
        </svg>
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
            <p className="text-lg md:text-xl text-blue-600 font-semibold font-inter tracking-wide uppercase">
              Powering Scalable Tech Infrastructure
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-gray-900 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Next-Gen IT Solutions
              </span>
            </h1>
          </div>
          
          {/* Enhanced Service Description */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-inter">
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
              <span className="text-sm font-semibold text-gray-700 font-inter">Web Design</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 font-inter">Mobile Apps</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 font-inter">Cloud Services</span>
            </div>
            
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Server className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700 font-inter">Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
