import {
  GitBranch, Boxes, ShieldCheck, Activity, Plug, Lock,
  Workflow, Server, Globe2,
} from "lucide-react";

const features = [
  {
    Icon: Workflow,
    title: "CI/CD Pipelines",
    desc: "We design and operate CI/CD pipelines on Jenkins, GitHub Actions, GitLab and ArgoCD — with policy gates and signed builds.",
  },
  {
    Icon: Boxes,
    title: "Kubernetes Ops",
    desc: "We set up and manage EKS, AKS and GKE clusters with Helm, GitOps, autoscaling and zero-downtime rollouts.",
  },
  {
    Icon: ShieldCheck,
    title: "Linux Patching",
    desc: "Scheduled, zero-downtime patching for RHEL, SUSE, Ubuntu and CentOS fleets with full audit trails.",
  },
  {
    Icon: Activity,
    title: "Monitoring & SRE",
    desc: "We instrument metrics, logs and traces — Prometheus, Grafana, Datadog — and set SLOs your team can actually live with.",
  },
  {
    Icon: Lock,
    title: "Cloud Security",
    desc: "Image scanning, SBOMs, secret rotation, RBAC and compliance hardening for SOC 2, ISO 27001 and HIPAA.",
  },
  {
    Icon: Server,
    title: "SAP on SUSE",
    desc: "Production-grade SAP HANA on SUSE Linux Enterprise — HA clusters, kernel patching and certified maintenance.",
  },
  {
    Icon: Plug,
    title: "Web & App Dev",
    desc: "Modern websites in React/Next.js and cross-platform mobile apps in React Native and Flutter — built to scale.",
  },
  {
    Icon: Globe2,
    title: "Multi-cloud",
    desc: "We architect across AWS, Azure and GCP — multi-region failover, traffic shifting and cost-optimized landing zones.",
  },
  {
    Icon: GitBranch,
    title: "Infrastructure as Code",
    desc: "Terraform, Ansible and GitOps workflows so every change is a pull request — reviewed, versioned and reproducible.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything your SRE team needs — delivered as a service.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
            We bring the tooling, the expertise and the on-call coverage. You get a senior engineering
            team that owns your infrastructure end-to-end — without the cost of hiring one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="group relative bg-card p-7 hover:bg-secondary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};