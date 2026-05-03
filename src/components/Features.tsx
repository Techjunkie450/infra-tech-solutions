import {
  GitBranch, Boxes, ShieldCheck, Activity, Plug, Lock,
  Workflow, Server, Globe2,
} from "lucide-react";

const features = [
  {
    Icon: Workflow,
    title: "Pipelines",
    desc: "Drop-in CI/CD across Jenkins, GitHub Actions, GitLab and ArgoCD with policy gates and signed builds.",
  },
  {
    Icon: Boxes,
    title: "Kubernetes",
    desc: "Managed EKS, AKS and GKE control planes with Helm, GitOps, autoscaling and one-click rollbacks.",
  },
  {
    Icon: ShieldCheck,
    title: "Patching",
    desc: "Zero-downtime patching for RHEL, SUSE, Ubuntu and CentOS fleets with full audit trails.",
  },
  {
    Icon: Activity,
    title: "Observability",
    desc: "Unified metrics, logs and traces with SLO tracking, anomaly detection and incident routing.",
  },
  {
    Icon: Lock,
    title: "Security",
    desc: "Image scanning, SBOMs, secret rotation, RBAC and compliance reporting (SOC2, ISO 27001, HIPAA).",
  },
  {
    Icon: Server,
    title: "SAP on SUSE",
    desc: "Production-grade SAP HANA on SUSE Linux Enterprise with HA clusters and certified maintenance.",
  },
  {
    Icon: Plug,
    title: "Integrations",
    desc: "100+ integrations: AWS, Azure, GCP, Datadog, Slack, PagerDuty, Vault, Snyk, Terraform Cloud.",
  },
  {
    Icon: Globe2,
    title: "Multi-region",
    desc: "Deploy across regions and clouds with traffic shifting, canaries and blue/green out of the box.",
  },
  {
    Icon: GitBranch,
    title: "GitOps native",
    desc: "Every change is a pull request. Drift detection, preview environments and automatic reconciliation.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Platform</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything your SRE team needs, in one platform.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
            InfraRise Cloud replaces a dozen point tools with one cohesive control plane — so engineers stop
            stitching pipelines and start shipping reliable software.
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