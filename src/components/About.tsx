import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe, CheckCircle2 } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users className="w-7 h-7" />, number: "500+", label: "Projects Completed" },
    { icon: <Award className="w-7 h-7" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Clock className="w-7 h-7" />, number: "24/7", label: "Support Available" },
    { icon: <Globe className="w-7 h-7" />, number: "50+", label: "Countries Served" },
  ];

  const benefits = [
    { title: "Proven Expertise", desc: "Industry-certified professionals with deep technical knowledge." },
    { title: "Scalable Solutions", desc: "Future-ready architecture that grows with your business." },
    { title: "24/7 Support", desc: "Round-the-clock monitoring and incident response services." },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient-primary">InfraRise Technologies</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We are a leading technology consulting firm specializing in digital transformation, cloud infrastructure, and custom software development. With over a decade of experience, we help businesses leverage cutting-edge technology to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified experts delivers enterprise-grade solutions across web, mobile, AWS & Azure cloud, DevOps, AI/ML, and IT infrastructure services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Card key={i} className="text-center p-2 border-border hover:shadow-elegant transition-shadow">
                  <CardContent className="space-y-2 p-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <div className="relative bg-gradient-primary rounded-2xl p-8 text-primary-foreground shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-primary-foreground" />
                    <div>
                      <h4 className="font-semibold">{b.title}</h4>
                      <p className="text-primary-foreground/80 text-sm">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
