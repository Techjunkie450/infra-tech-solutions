import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Phone, Trash2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

type QuickReply = { label: string; value: string };
type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  quickReplies?: QuickReply[];
  ts?: number;
};

const PHONE = "+918769560336";
const WHATSAPP = "918769560336";
const EMAIL = "hello@infrarisetech.com";
const STORAGE_KEY = "infrabot:history:v1";
const SEEN_KEY = "infrabot:seen:v1";

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
      { label: "📱 Call Now", value: "call" },
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
  call: () => {
    window.location.href = `tel:${PHONE}`;
    return {
      id: crypto.randomUUID(),
      role: "bot",
      content: "Dialing +91 8769560336… 📞 We're available Mon–Fri, 8am–6pm IST.",
      quickReplies: [
        { label: "WhatsApp Instead", value: "whatsapp" },
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
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [{ ...flow.start(), ts: Date.now() }];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Message[];
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch {}
    return [{ ...flow.start(), ts: Date.now() }];
  });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [unread, setUnread] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, typing]);

  // Persist conversation
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {}
  }, [messages]);

  // Show welcome teaser on first visit after a short delay
  useEffect(() => {
    const seen = localStorage.getItem(SEEN_KEY);
    if (seen) return;
    const t = setTimeout(() => setShowTeaser(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (open) {
      setUnread(0);
      setShowTeaser(false);
      localStorage.setItem(SEEN_KEY, "1");
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const pushBotMessage = (msg: Message, delay = 600) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { ...msg, ts: Date.now() }]);
      if (!open) setUnread((u) => u + 1);
    }, delay);
  };

  const handleAction = (value: string) => {
    const next = flow[value];
    if (!next) return;
    pushBotMessage(next());
  };

  const handleQuickReply = (qr: QuickReply) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: qr.label, ts: Date.now() },
    ]);
    handleAction(qr.value);
  };

  const handleSend = () => {
    const trimmed = input.trim().slice(0, 300);
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", content: trimmed, ts: Date.now() },
    ]);
    setInput("");
    const key = matchKeyword(trimmed);
    if (!key) {
      pushBotMessage({
        id: crypto.randomUUID(),
        role: "bot",
        content:
          "I didn't quite catch that. Here's how I can help — pick an option below or try keywords like 'cloud', 'devops', 'pricing', 'contact':",
        quickReplies: flow.start().quickReplies,
      });
    } else {
      handleAction(key);
    }
  };

  const handleClear = () => {
    const fresh = { ...flow.start(), ts: Date.now() };
    setMessages([fresh]);
  };

  const formatTime = (ts?: number) => {
    if (!ts) return "";
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Welcome teaser bubble */}
      {!open && showTeaser && (
        <div className="fixed bottom-24 right-6 z-[60] max-w-[260px] animate-in slide-in-from-bottom-2 fade-in duration-500">
          <button
            onClick={() => setOpen(true)}
            className="relative bg-card border border-border shadow-elegant rounded-2xl rounded-br-sm px-4 py-3 text-left hover:shadow-glow transition-shadow"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTeaser(false);
                localStorage.setItem(SEEN_KEY, "1");
              }}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">InfraBot</span>
            </div>
            <p className="text-sm text-foreground leading-snug">
              👋 Need help with cloud, DevOps, or a website? Ask me anything!
            </p>
          </button>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 relative",
          "bg-gradient-primary text-primary-foreground animate-pulse-glow"
        )}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center border-2 border-background">
            {unread}
          </span>
        )}
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
                {typing ? "Typing…" : "Online · Replies instantly"}
              </div>
            </div>
            <a
              href={`tel:${PHONE}`}
              aria-label="Call us"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={handleClear}
              aria-label="Clear conversation"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              title="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
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
                    <div className={cn("max-w-[75%]", m.role === "user" ? "items-end" : "items-start", "flex flex-col gap-0.5")}>
                      <div
                        className={cn(
                          "rounded-2xl px-3.5 py-2 text-sm whitespace-pre-line",
                          m.role === "bot"
                            ? "bg-secondary text-foreground rounded-tl-sm"
                            : "bg-primary text-primary-foreground rounded-tr-sm"
                        )}
                      >
                        {m.content}
                      </div>
                      {m.ts && (
                        <span className="text-[10px] text-muted-foreground px-1">{formatTime(m.ts)}</span>
                      )}
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
              {typing && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-secondary text-foreground rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/70 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border/60 bg-background/80 p-2 flex gap-2">
            <input
              ref={inputRef}
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
