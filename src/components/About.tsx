
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Award className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support Available" },
    { icon: <Globe className="w-8 h-8" />, number: "50+", label: "Countries Served" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InfraRise Technologies</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a leading technology consulting firm specializing in digital transformation, cloud infrastructure, and custom software development. With over a decade of experience, we help businesses leverage cutting-edge technology to achieve their goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified experts delivers enterprise-grade solutions across web development, mobile applications, cloud platforms (AWS & Azure), DevOps automation, and comprehensive IT infrastructure services.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-2">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Proven Expertise</h4>
                    <p className="text-white/80">Industry-certified professionals with deep technical knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Scalable Solutions</h4>
                    <p className="text-white/80">Future-ready architecture that grows with your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-white/80">Round-the-clock monitoring and support services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
