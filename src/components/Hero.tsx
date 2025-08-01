
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, Server, Quote, Phone, Code, Database, Shield } from "lucide-react";
import citySkylineBg from "@/assets/city-skyline-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* City Skyline Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${citySkylineBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* IT Infrastructure Background Effects */}
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
            <p className="text-lg md:text-xl text-cyan-400 font-semibold font-inter tracking-wide uppercase mb-4">
              Building Customized IT Solutions
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins text-white leading-tight mb-6">
              Innovative <span className="underline decoration-cyan-400">Responsive</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                IT Solutions
              </span>
              <span className="block text-white">for your promising future.</span>
            </h1>
          </div>
          
          {/* Enhanced Service Description */}
          <div className="space-y-4">
            
            {/* Service Cards matching KanSoft style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-poppins mb-3">Software Development</h3>
                <p className="text-gray-300 font-inter">Trusted software development partner since 2015</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-poppins mb-3">AI & Data Analytics</h3>
                <p className="text-gray-300 font-inter">Business Transformation through innovative solution.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-poppins mb-3">Power of Cloud</h3>
                <p className="text-gray-300 font-inter">Harnessing the power of cloud to build a strong digital ecosystem</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold font-inter group shadow-2xl rounded-full"
            >
              <Quote className="mr-3 w-6 h-6" />
              Get Free Quote
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-12 py-6 text-xl font-bold font-inter shadow-2xl bg-transparent rounded-full"
            >
              <Phone className="mr-3 w-6 h-6" />
              Contact Us
            </Button>
          </div>
          
          {/* Remove the enhanced service icons section since we have the service cards above */}
        </div>
      </div>
    </section>
  );
};
