import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Smartphone,
  Globe,
  GitBranch,
  Shield,
  Brain,
  Calendar,
  Sparkles,
  Bot,
  Cpu,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const cubeFaces = [
  { Icon: Globe, label: "WEB DEV", color: "224 76% 48%" },
  { Icon: Smartphone, label: "MOBILE APPS", color: "262 70% 55%" },
  { Icon: Cloud, label: "AWS CLOUD", color: "190 95% 45%" },
  { Icon: GitBranch, label: "DEVOPS", color: "160 84% 39%" },
  { Icon: Shield, label: "SECURITY", color: "20 90% 55%" },
  { Icon: Brain, label: "AI / ML", color: "280 75% 60%" },
];

const HeroVisual = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 0 });

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
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

      {/* AI Assistant glass card */}
      <div
        className="absolute top-2 left-0 md:left-2 glass rounded-2xl px-4 py-3 shadow-lg z-20"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent border-2 border-card" style={{ animation: "blink 2s ease-in-out infinite" }} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">AI Assistant</p>
            <p className="text-sm font-bold text-foreground flex items-center gap-1">
              Online <Sparkles className="w-3 h-3 text-accent" />
            </p>
          </div>
        </div>
      </div>

      {/* Neural / ML chip */}
      <div
        className="absolute top-6 right-0 md:right-2 glass rounded-2xl px-4 py-3 shadow-lg z-20"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}
      >
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-primary" />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Neural Engine</p>
            <p className="text-sm font-bold text-foreground">ML Ready</p>
          </div>
        </div>
      </div>

      {/* Automation badge */}
      <div
        className="absolute bottom-6 left-0 md:left-2 glass rounded-2xl px-4 py-3 shadow-lg z-20"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "2s" }}
      >
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold text-foreground">Auto-Scale</span>
        </div>
      </div>

      {/* DevOps badge */}
      <div
        className="absolute bottom-10 right-0 md:right-4 glass rounded-2xl px-4 py-3 shadow-lg z-20"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-foreground">CI / CD</span>
        </div>
      </div>

      {/* Orbiting AI nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-2 h-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute w-3 h-3 rounded-full bg-accent shadow-glow"
              style={{
                animation: `orbit 12s linear infinite`,
                animationDelay: `${i * -4}s`,
              }}
            />
          ))}
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
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "hsl(var(--primary-glow) / 0.2)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div className="space-y-7 text-center lg:text-left" style={{ animation: "fadeSlideIn 0.8s ease-out" }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Technology Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">DevOps, Linux & Kubernetes Services for</span>
              <span className="block text-gradient-animated">Growing Companies</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              DevOps services, Linux administration, Kubernetes, SAP on SUSE Linux, CI/CD pipeline
              setup, server patching & maintenance, website and mobile app development — one trusted
              partner for your entire technology stack.
            </p>

            {/* Capability chips (replaces company-count proof points) */}
            <ul className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-xl mx-auto lg:mx-0">
              {[
                { Icon: Bot, text: "AI & Automation" },
                { Icon: Cloud, text: "Cloud Infrastructure" },
                { Icon: GitBranch, text: "DevOps & CI/CD" },
                { Icon: Shield, text: "Security First" },
              ].map(({ Icon, text }, i) => (
                <li
                  key={i}
                  className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs md:text-sm font-medium text-foreground/90"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-primary hover:opacity-95 text-primary-foreground px-8 py-6 text-base font-semibold shadow-elegant group animate-pulse-glow transition-transform hover:scale-105"
              >
                <a href="#contact">
                  <Calendar className="mr-2 w-5 h-5" />
                  Discuss Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold transition-all"
              >
                <a href="#portfolio">View Case Studies</a>
              </Button>
            </div>
          </div>

          {/* Visual column */}
          <div
            className="flex items-center justify-center min-h-[480px]"
            style={{ animation: "fadeSlideIn 1s ease-out 0.2s both" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};