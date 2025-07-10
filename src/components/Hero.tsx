
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, Server } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating IT infrastructure elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-20 w-5 h-5 bg-indigo-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-500"></div>
        
        {/* Circuit-like connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path d="M100,200 L300,200 L300,400 L500,400" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M700,300 L900,300 L900,500 L1100,500" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse delay-500"/>
          <path d="M200,600 L400,600 L400,100 L600,100" stroke="url(#circuitGrad)" strokeWidth="2" fill="none" className="animate-pulse delay-1000"/>
        </svg>
      </div>

      {/* Data wave background */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1200 200" className="w-full h-32">
          <defs>
            <linearGradient id="heroWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          <path d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z" fill="url(#heroWave)">
            <animateTransform attributeName="transform" type="translate" values="0 0; 50 0; 0 0" dur="15s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Next-Gen IT Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From cutting-edge web design and mobile apps to enterprise cloud infrastructure, AI/ML solutions, and secure hosting - we deliver comprehensive IT solutions that drive innovation and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Web Design</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Mobile Apps</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Cloud Services</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
