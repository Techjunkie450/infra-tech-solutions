
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, Server, Quote, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20 overflow-hidden">
      {/* Enhanced IT Infrastructure Background */}
      <div className="absolute inset-0">
        {/* Animated Matrix Code Rain */}
        <div className="absolute inset-0 opacity-15">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono text-green-400"
              style={{
                left: `${(i * 4) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animation: 'matrix-rain 12s linear infinite'
              }}
            >
              {Array.from({ length: 30 }).map((_, j) => (
                <div key={j} className="mb-1 opacity-80">
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Server Data Streams */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                top: `${15 + i * 12}%`,
                width: '300px',
                animationDelay: `${i * 1.5}s`,
                animation: 'data-stream 20s linear infinite'
              }}
            />
          ))}
        </div>

        {/* Network Grid Infrastructure */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
          <defs>
            <pattern id="networkGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#06b6d4" opacity="0.6"/>
              <line x1="10" y1="10" x2="30" y2="10" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
              <line x1="10" y1="10" x2="10" y2="30" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4"/>
            </pattern>
            <animateTransform attributeName="patternTransform" type="translate" values="0 0; 20 20; 0 0" dur="30s" repeatCount="indefinite"/>
          </defs>
          <rect width="100%" height="100%" fill="url(#networkGrid)"/>
        </svg>

        {/* Floating Server Icons */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-sm opacity-60 animate-pulse"/>
            </div>
          ))}
        </div>

        {/* Advanced Circuit Board Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1400 900">
          <defs>
            <linearGradient id="circuitFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          
          {/* Main Data Highways */}
          <path d="M0,200 L200,200 L200,400 L400,400 L400,600 L600,600 L600,300 L800,300 L800,500 L1000,500 L1000,200 L1200,200 L1200,700 L1400,700" 
                stroke="url(#circuitFlow)" strokeWidth="3" fill="none" className="animate-pulse">
            <animate attributeName="stroke-dasharray" values="0,2000;2000,0;0,2000" dur="25s" repeatCount="indefinite"/>
          </path>
          
          <path d="M0,600 L300,600 L300,150 L600,150 L600,450 L900,450 L900,100 L1200,100 L1200,650 L1400,650" 
                stroke="url(#circuitFlow)" strokeWidth="2" fill="none" className="animate-pulse delay-1000">
            <animate attributeName="stroke-dasharray" values="0,2000;2000,0;0,2000" dur="30s" repeatCount="indefinite"/>
          </path>
          
          {/* Network Nodes */}
          <circle cx="200" cy="200" r="6" fill="url(#circuitFlow)" className="animate-pulse"/>
          <circle cx="400" cy="400" r="5" fill="url(#circuitFlow)" className="animate-pulse delay-500"/>
          <circle cx="600" cy="300" r="4" fill="url(#circuitFlow)" className="animate-pulse delay-1000"/>
          <circle cx="800" cy="500" r="5" fill="url(#circuitFlow)" className="animate-pulse delay-1500"/>
          <circle cx="1000" cy="200" r="6" fill="url(#circuitFlow)" className="animate-pulse delay-2000"/>
          
          {/* Data Packets */}
          <rect x="150" y="195" width="10" height="10" fill="#06b6d4" rx="2" className="animate-pulse">
            <animateTransform attributeName="transform" type="translate" values="0 0; 1200 0; 0 0" dur="15s" repeatCount="indefinite"/>
          </rect>
          <rect x="250" y="595" width="8" height="8" fill="#3b82f6" rx="2" className="animate-pulse delay-700">
            <animateTransform attributeName="transform" type="translate" values="0 0; 1000 -500; 0 0" dur="20s" repeatCount="indefinite"/>
          </rect>
        </svg>

        {/* Cloud Infrastructure Symbols */}
        <div className="absolute inset-0 opacity-20">
          {['☁', '⚡', '🔒', '📡', '⚙️'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-2xl text-cyan-400 animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {symbol}
            </div>
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
