import { Card, CardContent } from "@/components/ui/card";
import { Layers, BadgeDollarSign, UserCheck, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "One Trusted Partner",
    desc: "Stop juggling 5+ vendors for different services. One partner for your complete tech stack — web, mobile, cloud, security, everything.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    desc: "No hidden costs. We're upfront about what you'll pay. Flexible terms that work for startups and enterprises.",
  },
  {
    icon: UserCheck,
    title: "Founder-Involved",
    desc: "Our founders work directly with your team — not handing you off to junior developers or outsourced teams. Real expertise, real commitment.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    desc: "8+ companies have scaled with us. Real customers, measurable outcomes. 25+ years combined engineering experience.",
  },
];

export const WhyChoose = () => {
  return (
    <section id="why-choose" className="relative py-20 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Companies Choose <span className="text-gradient-primary">InfraRise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            One partner for your complete technology stack. Founder-led delivery, transparent pricing, proven results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-border hover:shadow-elegant transition-all hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};