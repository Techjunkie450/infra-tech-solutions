import { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with React, Node.js, and AWS infrastructure.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Mobile App",
    category: "Mobile Development",
    description: "Secure mobile app with biometric authentication and seamless UX.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    tags: ["React Native", "Firebase", "Biometrics"],
  },
  {
    title: "Cloud Migration Project",
    category: "Cloud Services",
    description: "Enterprise cloud migration from on-premise to AWS with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "DevOps Automation",
    category: "DevOps",
    description: "CI/CD pipeline implementation reducing deployment time by 80%.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=500&fit=crop",
    tags: ["Jenkins", "Docker", "Kubernetes"],
  },
  {
    title: "Data Center Setup",
    category: "Infrastructure",
    description: "Complete data center design and implementation for financial services.",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=800&h=500&fit=crop",
    tags: ["Networking", "Security", "Backup"],
  },
  {
    title: "Healthcare Portal",
    category: "Web Development",
    description: "HIPAA-compliant patient management system with telemedicine features.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    tags: ["Vue.js", "Python", "Azure", "HIPAA"],
  },
];

export const Portfolio = () => {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);
  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);

  // Auto rotate
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const getOffset = (i: number) => {
    let diff = i - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their technology infrastructure.
          </p>
        </div>

        {/* Coverflow slider */}
        <div className="relative h-[480px] md:h-[520px]" style={{ perspective: "1400px" }}>
          <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
            {projects.map((project, i) => {
              const offset = getOffset(i);
              const abs = Math.abs(offset);
              const isVisible = abs <= 2;
              const translateX = offset * 280;
              const rotateY = offset * -25;
              const scale = offset === 0 ? 1 : 0.85 - abs * 0.05;
              const zIndex = total - abs;
              const opacity = isVisible ? (offset === 0 ? 1 : 0.6) : 0;

              return (
                <Card
                  key={i}
                  onClick={() => setActive(i)}
                  className="absolute w-[300px] md:w-[420px] cursor-pointer border-border bg-card shadow-elegant transition-all duration-700 ease-out overflow-hidden"
                  style={{
                    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transformStyle: "preserve-3d",
                  }}
                  aria-hidden={offset !== 0}
                >
                  <div className="relative overflow-hidden h-48 md:h-56">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} project by InfraRise Technologies`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-semibold text-primary bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {offset === 0 && (
                      <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground">
                        <a href="#contact">View Details <ExternalLink className="w-4 h-4 ml-1" /></a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-background border border-border shadow-elegant flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-background border border-border shadow-elegant flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-gradient-primary" : "w-2 bg-border hover:bg-muted-foreground"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
