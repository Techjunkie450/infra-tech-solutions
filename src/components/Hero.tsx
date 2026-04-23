import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Smartphone, Globe, GitBranch, Shield, Brain, Calendar, Sparkles, Bot, Cpu, Zap, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const cubeFaces = [
  { Icon: Globe, label: "WEB DEV", color: "224 76% 48%" },
  { Icon: Smartphone, label: "MOBILE APPS", color: "262 70% 55%" },
  { Icon: Cloud, label: "AWS CLOUD", color: "190 95% 45%" },
  { Icon: GitBranch, label: "DEVOPS", color: "160 84% 39%" },
  { Icon: Shield, label: "SECURITY", color: "20 90% 55%" },
  { Icon: Brain, label: "AI / ML", color: "280 75% 60%" },
];

const HeroCube = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 0 });

  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      setRotation({ x: -15 + Math.sin(t * 0.6) * 10, y: t * 25 });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const transforms = [
    "translateZ(120px)",
    "rotateY(180deg) translateZ(120px)",
    "rotateY(90deg) translateZ(120px)",
    "rotateY(-90deg) translateZ(120px)",
    "rotateX(90deg) translateZ(120px)",
    "rotateX(-90deg) translateZ(120px)",
  ];

  return (
    <div className="relative w-full flex items-center justify-center" style={{ perspective: "1200px" }}>
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-primary/30 blur-[100px]" />
      </div>

      {/* Floating service tags around cube */}
      <div className="absolute top-4 left-2 md:left-8 bg-card border border-border rounded-xl px-4 py-3 shadow-md backdrop-blur-sm" style={{ animation: "float 6s ease-in-out infinite" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Award className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Projects</p>
            <p className="text-sm font-bold text-foreground">50+ shipped</p>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-2 md:right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-md backdrop-blur-sm" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}>
        <p className="text-xs text-muted-foreground">24/7</p>
        <p className="text-sm font-bold text-foreground">critical support</p>
      </div>

      <div className="absolute bottom-6 left-0 md:left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-md backdrop-blur-sm" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <Users className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Trusted by</p>
            <p className="text-sm font-bold text-foreground">8+ companies</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-0 md:right-8 bg-card border border-border rounded-xl px-4 py-3 shadow-md backdrop-blur-sm" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "0.5s" }}>
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-foreground">Full-Stack</span>
        </div>
      </div>

      {/* Cube */}
      <div className="relative w-56 h-56 md:w-64 md:h-64" style={{ perspective: "1000px" }}>
        <div
          className="w-full h-full relative transition-transform duration-100"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {cubeFaces.map((face, i) => {
            const Icon = face.Icon;
            return (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 backdrop-blur-md"
                style={{
                  transform: transforms[i],
                  backfaceVisibility: "hidden",
                  borderColor: `hsl(${face.color} / 0.45)`,
                  background: `linear-gradient(135deg, hsl(${face.color} / 0.15), hsl(${face.color} / 0.05))`,
                  boxShadow: `inset 0 0 40px hsl(${face.color} / 0.2), 0 0 30px hsl(${face.color} / 0.25)`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `hsl(${face.color} / 0.2)`, color: `hsl(${face.color})` }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <span
                  className="text-xs md:text-sm font-bold tracking-[0.15em] font-mono"
                  style={{ color: `hsl(${face.color})` }}
                >
                  {face.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-soft"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl" style={{ background: "hsl(var(--primary-glow) / 0.2)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="space-y-7 text-center lg:text-left" style={{ animation: "fadeSlideIn 0.8s ease-out" }}>
            <p className="text-xs md:text-sm text-primary font-semibold tracking-[0.2em] uppercase">
              Full-Service Technology Partner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Complete Technology Solutions for
              <span className="block text-gradient-primary">Growing Companies</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              From web apps to cloud infrastructure. One trusted partner for all your tech needs.{" "}
              <span className="font-semibold text-foreground">8+ companies</span> trust InfraRise for their entire technology stack.
            </p>

            {/* Proof points */}
            <ul className="space-y-3 max-w-xl mx-auto lg:mx-0">
              {[
                { Icon: Briefcase, text: "8+ companies trust us across all services" },
                { Icon: Award, text: "50+ successful projects completed" },
                { Icon: Users, text: "Founded by full-stack engineers • 25+ years combined experience" },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                  <span className="mt-0.5 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-elegant group">
                <a href="#contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold">
                <a href="#portfolio">View Case Studies</a>
              </Button>
            </div>
          </div>

          {/* Cube column */}
          <div className="flex items-center justify-center min-h-[480px]" style={{ animation: "fadeSlideIn 1s ease-out 0.2s both" }}>
            <HeroCube />
          </div>
        </div>
      </div>
    </section>
  );
};
