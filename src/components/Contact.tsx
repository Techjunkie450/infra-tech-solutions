import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Us", details: "hello@infrarisetech.com", description: "Send us an email anytime", href: "mailto:hello@infrarisetech.com" },
    { icon: <Phone className="w-6 h-6" />, title: "Call Us", details: "+91 8769560336", description: "Mon–Fri from 8am to 6pm", href: "tel:+918769560336" },
    { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", details: "Rajsamand 313301, India", description: "Come say hello at our office", href: "https://maps.google.com/?q=Rajsamand+313301" },
    { icon: <Clock className="w-6 h-6" />, title: "Business Hours", details: "Mon – Fri: 8:00 AM – 6:00 PM", description: "Weekend emergency support available", href: null as string | null },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project and explore how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, i) => (
              <Card key={i} className="border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-5">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1 group-hover:underline">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
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
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select id="service" className="w-full p-2 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-ring">
                    <option value="">Select a service</option>
                    <option>Web Design & Development</option>
                    <option>Mobile App Development</option>
                    <option>AWS Cloud Services</option>
                    <option>Azure Cloud Services</option>
                    <option>DevOps Services</option>
                    <option>IT Infrastructure</option>
                    <option>Data Center Solutions</option>
                    <option>Cybersecurity</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project requirements..." className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground py-6 text-base">
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
