import { Quote } from "lucide-react";

const logos = [
  "Helix", "Northwind", "Lumen", "Quanta", "Arclight", "Vertex", "Beacon", "Orbit",
];

export const Customers = () => {
  return (
    <section id="customers" className="relative py-24 md:py-28 bg-gradient-soft border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10">
          Trusted by engineering teams worldwide
        </p>

        {/* Logo wall (text marks for now — swap for real logos when provided) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-border rounded-xl overflow-hidden border border-border mb-16">
          {logos.map((l) => (
            <div
              key={l}
              className="bg-card flex items-center justify-center py-7 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="font-poppins font-bold text-lg tracking-tight">{l}</span>
            </div>
          ))}
        </div>

        {/* Featured quote */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm">
          <Quote className="w-8 h-8 text-primary mb-5" />
          <p className="text-xl md:text-2xl font-medium text-foreground leading-snug tracking-tight">
            “InfraRise gave our SRE team a single control plane for pipelines, Kubernetes and SUSE patching.
            We cut deploy time from 40 minutes to under 2, and our on-call alerts dropped by 70%.”
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Anika Rao</p>
              <p className="text-xs text-muted-foreground">VP Engineering · Helix Logistics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};