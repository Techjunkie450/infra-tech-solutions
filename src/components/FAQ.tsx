import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you provide DevOps services and Kubernetes consulting?",
    a: "Yes. We deliver end-to-end DevOps services including Kubernetes cluster setup, Docker containerization, Terraform infrastructure-as-code, Jenkins/GitHub Actions CI/CD pipeline setup, observability and 24/7 SRE support.",
  },
  {
    q: "Can you handle Linux administration and SAP on SUSE Linux?",
    a: "Absolutely. Our team specializes in Linux administration, SUSE Linux Enterprise Server (SLES) upgrades, SAP on SUSE Linux deployments, kernel tuning, server patching & maintenance, and high-availability cluster configuration.",
  },
  {
    q: "What if we only need one service, not full-stack?",
    a: "Perfect. We work with clients on a single service or the full portfolio. Pick what you need now and scale up as you grow.",
  },
  {
    q: "How do you work differently than traditional agencies?",
    a: "Our founders stay involved. We're hands-on, not handing projects off to junior teams. We care about outcomes — not just deliverables.",
  },
  {
    q: "What's your experience with specific tech stacks?",
    a: "We specialize in React, Next.js, React Native, Flutter, AWS, Azure, Kubernetes, Docker, Terraform, Jenkins, Linux/SUSE administration, and modern full-stack technologies. Ask about your specific needs.",
  },
  {
    q: "Do you do long-term retainer work or just projects?",
    a: "Both. Project-based work, retainer partnerships, and dedicated teams — flexible arrangements that fit your needs.",
  },
  {
    q: "What's the timeline for a typical project?",
    a: "Web apps: 6–12 weeks. Mobile apps: 8–16 weeks. Infrastructure projects vary by scope. Let's discuss your specifics on a call.",
  },
  {
    q: "Can you scale with us as we grow?",
    a: "Yes. Start with one service, add more as needed. Many clients started with one project and now have us handling multiple services.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 bg-gradient-soft overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">Common questions about working with InfraRise.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-xl bg-card px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};