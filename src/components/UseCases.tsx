import { useState } from "react";
import { Rocket, Building2, ShieldCheck, Database } from "lucide-react";

const cases = [
  {
    Icon: Rocket,
    key: "startups",
    label: "Startups",
    title: "Ship to production from day one.",
    desc: "Spin up cloud-native infra, CI/CD and observability in hours, not quarters. Stay focused on building product while InfraRise Cloud handles the platform.",
    bullets: ["One-command environment provisioning", "Preview envs for every PR", "Auto-scaling EKS / AKS clusters"],
  },
  {
    Icon: Building2,
    key: "enterprise",
    label: "Enterprise",
    title: "Modernize legacy estates without the risk.",
    desc: "Bring SAP, RHEL and SUSE workloads under a single control plane. Add policy, audit and compliance without rewriting your stack.",
    bullets: ["SAP on SUSE Linux HA clusters", "Centralized RBAC & audit logs", "Hybrid AWS + Azure + on-prem"],
  },
  {
    Icon: ShieldCheck,
    key: "regulated",
    label: "Regulated",
    title: "Compliance built into every deploy.",
    desc: "Continuous controls for SOC 2, ISO 27001, HIPAA and PCI. Every change is signed, scanned and traceable end-to-end.",
    bullets: ["Signed builds & SBOMs", "Automatic CVE remediation", "Tamper-proof audit trail"],
  },
  {
    Icon: Database,
    key: "data",
    label: "Data & AI",
    title: "Production-grade infra for ML workloads.",
    desc: "GPU-backed Kubernetes, vector store integrations and reproducible pipelines for training and serving — without the YAML.",
    bullets: ["GPU node pools on demand", "Model registry & rollouts", "Cost guardrails per workload"],
  },
];

export const UseCases = () => {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="use-cases" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Use cases</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Built for the teams running production.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {cases.map((tab, i) => {
              const Icon = tab.Icon;
              const isActive = i === active;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(i)}
                  className={`shrink-0 flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors border ${
                    isActive
                      ? "bg-primary/10 border-primary/40 text-primary"
                      : "border-transparent text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            key={c.key}
            className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm"
            style={{ animation: "fadeSlideIn 0.4s ease-out" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{c.title}</h3>
            <p className="text-base text-muted-foreground mt-3 leading-relaxed max-w-2xl">{c.desc}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {c.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground/90 rounded-lg border border-border bg-secondary/40 px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};