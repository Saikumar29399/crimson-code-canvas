import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  { prompt: "$ whoami", output: "Sai Kumar Kambampati" },
  { prompt: "$ cat role.txt", output: "Full Stack Java Developer" },
  { prompt: "$ cat about.txt", output: "7+ years of IT experience building scalable enterprise applications using Java, Spring Boot, Microservices, Angular, React, and AWS cloud technologies." },
  { prompt: "$ ls skills/", output: "Java  Spring-Boot  Angular  React  AWS  Docker  Kafka  Kubernetes  Oracle  MongoDB  Jenkins" },
  { prompt: "$ echo $STATUS", output: "Open to opportunities ✨" },
];

const TerminalIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (visibleLines < lines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 600);
      return () => clearTimeout(t);
    }
  }, [inView, visibleLines]);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card overflow-hidden glow-card"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">sai@portfolio:~</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-3">
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-primary">{line.prompt}</p>
                <p className="text-muted-foreground ml-2">{line.output}</p>
              </motion.div>
            ))}
            {visibleLines < lines.length && (
              <p className="text-primary terminal-cursor" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalIntro;
