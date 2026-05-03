import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, CheckCircle2, GitBranch, Boxes, ShieldCheck } from "lucide-react";

const codeLines = [
  { p: "$", c: "infrarise deploy --env=prod", color: "text-accent" },
  { p: ">", c: "✓ Provisioning EKS cluster (eu-west-1)", color: "text-emerald-400" },
  { p: ">", c: "✓ Applying Terraform plan · 42 resources", color: "text-emerald-400" },
  { p: ">", c: "✓ Running CI pipeline · 18 checks passed", color: "text-emerald-400" },
  { p: ">", c: "✓ Patching SUSE nodes · 0 downtime", color: "text-emerald-400" },
  { p: ">", c: "→ Rolling out v2.14.0 · canary 10%", color: "text-sky-400" },
  { p: ">", c: "✓ Deployed in 1m 47s", color: "text-emerald-400" },
];

export const Product = () => {
  return (
    <section id="product" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background grid + glow (Stripe/Qdrant inspired) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              How we work · End-to-end engagement
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              An extension of your <span className="text-gradient-animated">engineering team</span>.
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              We don't sell a tool. We embed with your team to architect, automate and operate the
              systems that run your business — across AWS, Azure, Kubernetes, SUSE Linux and beyond.
            </p>

            <ul className="space-y-2 max-w-lg">
              {[
                { Icon: GitBranch, t: "We design CI/CD pipelines on Jenkins, GitHub Actions & GitLab" },
                { Icon: Boxes, t: "We deploy & operate Kubernetes clusters on EKS, AKS and GKE" },
                { Icon: ShieldCheck, t: "We patch & maintain RHEL, SUSE and Ubuntu server fleets" },
              ].map(({ Icon, t }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                  <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-95 group">
                <a href="#contact">
                  Start a project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2">
                <a href="#services">See our services</a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground font-mono pt-2">
              No obligation · Free 30-min architecture review
            </p>
          </div>

          {/* Right: terminal */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-border bg-[hsl(222_47%_8%)] shadow-2xl overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-white/50">
                  <Terminal className="w-3 h-3" />
                  client-prod · managed by InfraRise
                </div>
                <span className="text-[10px] font-mono text-white/40">zsh</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-[13px] leading-relaxed">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex gap-3"
                    style={{ animation: `fadeSlideIn 0.4s ${i * 0.15}s both` }}
                  >
                    <span className="text-white/30 select-none">{line.p}</span>
                    <span className={line.color}>{line.c}</span>
                  </div>
                ))}
                <div className="flex gap-3 mt-1">
                  <span className="text-white/30">$</span>
                  <span className="w-2 h-4 bg-white/70 inline-block" style={{ animation: "blink 1s steps(2) infinite" }} />
                </div>
              </div>

              {/* Status footer */}
              <div className="grid grid-cols-3 border-t border-white/10 bg-black/20 text-[11px] font-mono">
                <div className="px-4 py-2.5 border-r border-white/10">
                  <p className="text-white/40 uppercase tracking-wider text-[9px]">Uptime</p>
                  <p className="text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 99.99%
                  </p>
                </div>
                <div className="px-4 py-2.5 border-r border-white/10">
                  <p className="text-white/40 uppercase tracking-wider text-[9px]">Deploys / day</p>
                  <p className="text-sky-400 font-bold mt-0.5">240+</p>
                </div>
                <div className="px-4 py-2.5">
                  <p className="text-white/40 uppercase tracking-wider text-[9px]">MTTR</p>
                  <p className="text-primary-glow font-bold mt-0.5">&lt; 4 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};