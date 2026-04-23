import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe, CheckCircle2 } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <Users className="w-7 h-7" />, number: "8+", label: "Companies Trust Us" },
    { icon: <Award className="w-7 h-7" />, number: "50+", label: "Projects Delivered" },
    { icon: <Clock className="w-7 h-7" />, number: "24/7", label: "Critical Support" },
    { icon: <Globe className="w-7 h-7" />, number: "25+", label: "Years Combined Exp." },
  ];

  const benefits = [
    { title: "One Trusted Partner", desc: "Web, mobile, cloud, security — all under one roof. No more juggling 5+ vendors." },
    { title: "Founder-Led Delivery", desc: "Our founders are hands-on with every client. Real engineers, real ownership." },
    { title: "Transparent & Flexible", desc: "Honest pricing, no long-term lock-ins, 24/7 critical support when you need it." },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gradient-primary">InfraRise Technologies</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We started InfraRise because growing companies waste time and money juggling 5+ vendors for different tech needs. We're the one trusted partner for your entire stack — built and led by engineers who've shipped at scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From web and mobile apps to AWS/Azure cloud, DevOps, Linux/SUSE administration, CI/CD, security and AI/ML — founders stay involved end-to-end. Honest pricing, flexible terms, real partnership.
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
