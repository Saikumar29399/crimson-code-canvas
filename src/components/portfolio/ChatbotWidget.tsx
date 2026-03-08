import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const predefinedAnswers: Record<string, string> = {
  default: "Hi! I'm Sai's AI assistant. Ask me about his experience, skills, or projects!",
  experience: "Sai has 6+ years of experience as a Java Full Stack Developer across enterprise, healthcare, and cloud-native projects.",
  skills: "Sai excels in Java, Spring Boot, React, TypeScript, AWS, Docker, Kubernetes, and CI/CD pipelines.",
  projects: "Sai has built microservices platforms, e-commerce apps, and real-time analytics dashboards. Check the Projects section!",
  contact: "You can reach Sai through the Contact form on this page, or email him directly.",
  education: "Sai holds an MS in Computer Science from UT Dallas and a B.Tech from JNTU Hyderabad.",
};

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (lower.includes("experience") || lower.includes("work")) return predefinedAnswers.experience;
  if (lower.includes("skill") || lower.includes("tech")) return predefinedAnswers.skills;
  if (lower.includes("project")) return predefinedAnswers.projects;
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) return predefinedAnswers.contact;
  if (lower.includes("education") || lower.includes("degree") || lower.includes("university")) return predefinedAnswers.education;
  return predefinedAnswers.default;
};

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: predefinedAnswers.default },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getResponse(userMsg) }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 max-h-96 bg-card border border-border rounded-lg overflow-hidden glow-card flex flex-col"
          >
            <div className="px-4 py-3 bg-primary/10 border-b border-border flex items-center justify-between">
              <span className="font-mono text-sm text-primary">AI Assistant</span>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-60">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm font-mono"
              />
              <button onClick={send} className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-glow"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
};

export default ChatbotWidget;
