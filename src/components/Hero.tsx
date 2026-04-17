import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, Server, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-soft"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary-glow/20 blur-3xl" style={{ background: "hsl(var(--primary-glow) / 0.2)" }} />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {[
          { Icon: Globe, left: "6%", top: "18%", delay: "0s", color: "text-primary" },
          { Icon: Smartphone, left: "88%", top: "22%", delay: "1s", color: "text-accent" },
          { Icon: Server, left: "12%", top: "70%", delay: "2s", color: "text-primary" },
          { Icon: Cloud, left: "82%", top: "68%", delay: "0.5s", color: "text-accent" },
        ].map(({ Icon, left, top, delay, color }, i) => (
          <div key={i} className="absolute" style={{ left, top, animation: `float 6s ease-in-out infinite`, animationDelay: delay }}>
            <Icon className={`w-14 h-14 ${color}`} strokeWidth={1.4} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8" style={{ animation: "fadeSlideIn 0.8s ease-out" }}>
          <p className="text-sm md:text-base text-primary font-semibold tracking-[0.2em] uppercase">
            Powering Scalable Tech Infrastructure
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Transform Your Business with
            <span className="block text-gradient-primary">Next-Gen IT Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From custom web & mobile apps to enterprise cloud infrastructure, AI/ML, DevOps, and cybersecurity — InfraRise Technologies delivers end-to-end IT solutions that drive real growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-elegant group">
              <a href="#services">Explore Services <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold">
              <a href="#contact"><Phone className="mr-2 w-5 h-5" />Contact Us</a>
            </Button>
          </div>

          {/* Service highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { Icon: Globe, label: "Web Design" },
              { Icon: Smartphone, label: "Mobile Apps" },
              { Icon: Cloud, label: "Cloud Services" },
              { Icon: Server, label: "Infrastructure" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center space-y-3 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
