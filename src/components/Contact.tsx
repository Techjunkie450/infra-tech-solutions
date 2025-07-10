
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "contact@infrarise.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Tech Street, Silicon Valley, CA 94000",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Weekend emergency support available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design & Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="cloud-aws">AWS Cloud Services</option>
                    <option value="cloud-azure">Azure Cloud Services</option>
                    <option value="devops">DevOps Services</option>
                    <option value="infrastructure">IT Infrastructure</option>
                    <option value="datacenter">Data Center Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
