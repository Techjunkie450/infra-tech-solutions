import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type QuickReply = { label: string; value: string };
type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  quickReplies?: QuickReply[];
};

const PHONE = "+918769560336";
const WHATSAPP = "918769560336";
const EMAIL = "hello@infrarisetech.com";

const flow: Record<string, () => Message> = {
  start: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "👋 Hi! I'm InfraBot, your assistant from InfraRise Technologies. How can I help you today?",
    quickReplies: [
      { label: "🛠️ Our Services", value: "services" },
      { label: "💰 Pricing & Quote", value: "pricing" },
      { label: "📞 Contact Us", value: "contact" },
      { label: "🏢 About InfraRise", value: "about" },
    ],
  }),
  services: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "We offer end-to-end technology services. Pick a category to learn more:",
    quickReplies: [
      { label: "DevOps & CI/CD", value: "devops" },
      { label: "Linux & SUSE", value: "linux" },
      { label: "AWS / Azure Cloud", value: "cloud" },
      { label: "Web & Mobile Dev", value: "webmobile" },
      { label: "Cybersecurity", value: "security" },
      { label: "AI / ML Solutions", value: "aiml" },
      { label: "← Back", value: "start" },
    ],
  }),
  devops: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "🚀 DevOps & CI/CD: We design CI/CD pipelines (Jenkins, GitHub Actions, GitLab), containerize with Docker, orchestrate with Kubernetes, and automate infra with Terraform & Ansible — cutting deploy time from hours to minutes.",
    quickReplies: [
      { label: "Get a Quote", value: "pricing" },
      { label: "Talk to Expert", value: "contact" },
      { label: "← Services", value: "services" },
    ],
  }),
  linux: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "🐧 Linux & SUSE: Server administration, SUSE Linux upgrades, SAP on SUSE, kernel patching, performance tuning, and 24/7 server management for mission-critical workloads.",
    quickReplies: [
      { label: "Get a Quote", value: "pricing" },
      { label: "Talk to Expert", value: "contact" },
      { label: "← Services", value: "services" },
    ],
  }),
  cloud: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "☁️ Cloud Services: AWS (EC2, Lambda, S3, RDS) and Azure (VMs, Functions, Cosmos DB) architecture, migration, cost optimization (avg 30–40% savings), and managed operations.",
    quickReplies: [
      { label: "Get a Quote", value: "pricing" },
      { label: "Talk to Expert", value: "contact" },
      { label: "← Services", value: "services" },
    ],
  }),
  webmobile: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "💻 Web & Mobile: Modern web apps with React / Next.js and cross-platform mobile apps with React Native & Flutter. SEO-ready, fast, and scalable.",
    quickReplies: [
      { label: "Get a Quote", value: "pricing" },
      { label: "Talk to Expert", value: "contact" },
      { label: "← Services", value: "services" },
    ],
  }),
  security: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "🛡️ Cybersecurity: Penetration testing, security audits, compliance (SOC 2, ISO 27001, HIPAA), and 24/7 incident response to keep your infrastructure safe.",
    quickReplies: [
      { label: "Get a Quote", value: "pricing" },
      { label: "Talk to Expert", value: "contact" },
      { label: "← Services", value: "services" },
    ],
  }),
  aiml: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "🤖 AI / ML: Custom ML models, NLP, computer vision, predictive analytics, and AI assistants integrated into your products and workflows.",
    quickReplies: [
      { label: "Get a Quote", value: "pricing" },
      { label: "Talk to Expert", value: "contact" },
      { label: "← Services", value: "services" },
    ],
  }),
  pricing: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "💰 We offer transparent, project-based pricing tailored to your scope. Share your requirement and we'll send a free, no-obligation quote within 4 hours.",
    quickReplies: [
      { label: "Request Free Quote", value: "contact" },
      { label: "WhatsApp Us", value: "whatsapp" },
      { label: "← Back", value: "start" },
    ],
  }),
  contact: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "📞 You can reach our team via:\n\n• Email: hello@infrarisetech.com\n• Phone: +91-8769560336\n• WhatsApp: instant chat\n\nOr fill the contact form on this page.",
    quickReplies: [
      { label: "💬 WhatsApp", value: "whatsapp" },
      { label: "✉️ Email Us", value: "email" },
      { label: "📋 Open Contact Form", value: "form" },
      { label: "← Back", value: "start" },
    ],
  }),
  about: () => ({
    id: crypto.randomUUID(),
    role: "bot",
    content:
      "🏢 InfraRise Technologies is a full-service tech partner — founded by engineers with 25+ years combined experience across DevOps, cloud, Linux, web, mobile, security, and AI/ML. One trusted partner for your entire stack.",
    quickReplies: [
      { label: "View Services", value: "services" },
      { label: "Contact Us", value: "contact" },
      { label: "← Back", value: "start" },
    ],
  }),
  whatsapp: () => {
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        "Hi InfraRise! I'd like to discuss a project."
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
    return {
      id: crypto.randomUUID(),
      role: "bot",
      content: "Opening WhatsApp… 💬 Anything else I can help with?",
      quickReplies: [
        { label: "Services", value: "services" },
        { label: "Contact", value: "contact" },
        { label: "← Start", value: "start" },
      ],
    };
  },
  email: () => {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Project Inquiry"
    )}`;
    return {
      id: crypto.randomUUID(),
      role: "bot",
      content: "Opening your email app… ✉️ Anything else?",
      quickReplies: [
        { label: "Services", value: "services" },
        { label: "← Start", value: "start" },
      ],
    };
  },
  form: () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
    return {
      id: crypto.randomUUID(),
      role: "bot",
      content: "Scrolled to the contact form below 👇",
      quickReplies: [{ label: "← Start", value: "start" }],
    };
  },
};

function matchKeyword(text: string): string | null {
  const t = text.toLowerCase();
  if (/(price|pricing|cost|quote|budget)/.test(t)) return "pricing";
  if (/(devops|ci\/?cd|jenkins|kubernetes|docker|terraform)/.test(t)) return "devops";
  if (/(linux|suse|sap|server|patch)/.test(t)) return "linux";
  if (/(aws|azure|cloud|migration)/.test(t)) return "cloud";
  if (/(web|mobile|app|react|flutter|website)/.test(t)) return "webmobile";
  if (/(security|cyber|pentest|compliance|audit)/.test(t)) return "security";
  if (/(ai|ml|machine|learning|nlp|chatbot)/.test(t)) return "aiml";
  if (/(contact|reach|call|phone|email|whatsapp)/.test(t)) return "contact";
  if (/(about|who|company|team)/.test(t)) return "about";
  if (/(service|offer|do you|what)/.test(t)) return "services";
  if (/(hi|hello|hey|start|menu)/.test(t)) return "start";
  return null;
}

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([flow.start()]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleAction = (value: string) => {
    const next = flow[value];
    if (!next) return;
    setTimeout(() => setMessages((prev) => [...prev, next()]), 250);
  };

  const handleQuickReply = (qr: QuickReply) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: qr.label },
    ]);
    handleAction(qr.value);
  };

  const handleSend = () => {
    const trimmed = input.trim().slice(0, 300);
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: trimmed },
    ]);
    setInput("");
    const key = matchKeyword(trimmed) ?? "start";
    if (!matchKeyword(trimmed)) {
      setTimeout(
        () =>
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              role: "bot",
              content:
                "I didn't quite catch that. Here's how I can help — pick an option:",
              quickReplies: flow.start().quickReplies,
            },
          ]),
        300
      );
    } else {
      handleAction(key);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110",
          "bg-gradient-primary text-primary-foreground animate-pulse-glow"
        )}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className={cn(
            "fixed z-[59] glass border border-border/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden",
            "bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[560px] max-h-[80vh]",
            "animate-in slide-in-from-bottom-4 fade-in duration-300"
          )}
        >
          {/* Header */}
          <div className="bg-gradient-primary text-primary-foreground px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">InfraBot</div>
              <div className="text-xs opacity-90 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Online · Replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 bg-background/50">
            <div ref={scrollRef} className="p-4 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className="space-y-2">
                  <div
                    className={cn(
                      "flex gap-2",
                      m.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {m.role === "bot" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[75%] rounded-2xl px-3.5 py-2 text-sm whitespace-pre-line",
                        m.role === "bot"
                          ? "bg-secondary text-foreground rounded-tl-sm"
                          : "bg-primary text-primary-foreground rounded-tr-sm"
                      )}
                    >
                      {m.content}
                    </div>
                    {m.role === "user" && (
                      <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-foreground" />
                      </div>
                    )}
                  </div>
                  {m.quickReplies && (
                    <div className="flex flex-wrap gap-2 pl-9">
                      {m.quickReplies.map((qr) => (
                        <button
                          key={qr.value}
                          onClick={() => handleQuickReply(qr)}
                          className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border/60 bg-background/80 p-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, 300))}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message…"
              maxLength={300}
              className="flex-1 px-3 py-2 text-sm rounded-lg bg-secondary border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <Button
              size="icon"
              onClick={handleSend}
              className="bg-gradient-primary text-primary-foreground"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
