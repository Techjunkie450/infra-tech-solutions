import { useState } from "react";
import { Rocket, Building2, ShieldCheck, Database } from "lucide-react";

const cases = [
  {
    Icon: Rocket,
    key: "startups",
    label: "Startups",
    title: "Ship to production from day one.",
    desc: "We set up your cloud-native infra, CI/CD and observability in days, not quarters — so your founders and engineers can stay focused on building product, not plumbing.",
    bullets: ["One-command environment provisioning", "Preview envs for every PR", "Auto-scaling EKS / AKS clusters"],
  },
  {
    Icon: Building2,
    key: "enterprise",
    label: "Enterprise",
    title: "Modernize legacy estates without the risk.",
    desc: "We help you migrate and modernize SAP, RHEL and SUSE workloads — adding policy, audit and compliance without rewriting your stack or disrupting business.",
    bullets: ["SAP on SUSE Linux HA clusters", "Centralized RBAC & audit logs", "Hybrid AWS + Azure + on-prem"],
  },
  {
    Icon: ShieldCheck,
    key: "regulated",
    label: "Regulated",
    title: "Compliance built into every deploy.",
    desc: "We implement continuous controls for SOC 2, ISO 27001, HIPAA and PCI — so every change is signed, scanned and traceable end-to-end.",
    bullets: ["Signed builds & SBOMs", "Automatic CVE remediation", "Tamper-proof audit trail"],
  },
  {
    Icon: Database,
    key: "data",
    label: "Data & AI",
    title: "Production-grade infra for ML workloads.",
    desc: "We build GPU-backed Kubernetes, vector store integrations and reproducible pipelines for training and serving — so your data team ships models, not tickets.",
    bullets: ["GPU node pools on demand", "Model registry & rollouts", "Cost guardrails per workload"],
  },
];

export const UseCases = () => {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="use-cases" className="relative py-10 md:py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 mb-6 items-end">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Trusted by teams running production.
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you're a startup shipping your first product, an enterprise modernizing decades
            of legacy estate, or a regulated team fighting through audits — we tailor the engagement
            to where you are today and where you want to be next quarter.
          </p>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-6">
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
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary">
                  <c.Icon className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider">{c.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{c.title}</h3>
                <p className="text-base text-muted-foreground mt-3 leading-relaxed">{c.desc}</p>
              </div>
              <ul className="space-y-3">
                {c.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground/90 rounded-lg border border-border bg-secondary/40 px-4 py-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};