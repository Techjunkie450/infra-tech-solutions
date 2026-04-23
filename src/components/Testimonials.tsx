import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "InfraRise built our mobile app from scratch. They understood our vision and delivered on time. The app is now generating $50K+ monthly revenue.",
    author: "Founder",
    role: "Mobile App Company",
    accent: "262 70% 55%",
  },
  {
    quote:
      "Migrated our entire infrastructure to AWS. Cut costs by 35% while improving performance. Their team handled everything end-to-end.",
    author: "CTO",
    role: "Scale-up SaaS",
    accent: "32 95% 50%",
  },
  {
    quote:
      "We started with DevOps consulting. Now they handle our web, mobile, and infrastructure. One vendor we completely trust.",
    author: "VP Engineering",
    role: "Growth Company",
    accent: "160 84% 39%",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes from real partnerships across web, mobile, cloud and infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border hover:shadow-elegant transition-shadow relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(to right, hsl(${t.accent}), hsl(${t.accent} / 0.4))` }}
              />
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8" style={{ color: `hsl(${t.accent})` }} />
                <p className="text-foreground/90 leading-relaxed text-sm md:text-base italic">"{t.quote}"</p>
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};