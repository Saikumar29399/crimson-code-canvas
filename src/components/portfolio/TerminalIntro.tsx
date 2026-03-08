import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Square, Bug, ChevronRight, FileCode2 } from "lucide-react";

const codeLines = [
  { num: 1, content: '/**', type: 'comment' },
  { num: 2, content: ' * @author Sai Kumar Kambampati', type: 'comment' },
  { num: 3, content: ' * Full Stack Java Developer | AWS Cloud Architect', type: 'comment' },
  { num: 4, content: ' */', type: 'comment' },
  { num: 5, content: 'public class Developer {', type: 'keyword' },
  { num: 6, content: '', type: 'blank' },
  { num: 7, content: '    private final String name = "Sai Kumar Kambampati";', type: 'string' },
  { num: 8, content: '    private final String role = "Full Stack Java Developer";', type: 'string' },
  { num: 9, content: '    private final int yearsExp = 7;', type: 'number' },
  { num: 10, content: '', type: 'blank' },
  { num: 11, content: '    private final String[] skills = {', type: 'keyword' },
  { num: 12, content: '        "Java", "Spring Boot", "Microservices",', type: 'string' },
  { num: 13, content: '        "Angular", "React", "AWS", "Python",', type: 'string' },
  { num: 14, content: '        "Docker", "Kafka", "Kubernetes"', type: 'string' },
  { num: 15, content: '    };', type: 'keyword' },
  { num: 16, content: '', type: 'blank' },
  { num: 17, content: '    public String getStatus() {', type: 'keyword' },
  { num: 18, content: '        return "Open to opportunities ✨";', type: 'string' },
  { num: 19, content: '    }', type: 'keyword' },
  { num: 20, content: '}', type: 'keyword' },
];

const syntaxHighlight = (content: string, type: string) => {
  if (type === 'blank') return <span>&nbsp;</span>;
  if (type === 'comment') return <span className="text-muted-foreground/60 italic">{content}</span>;

  const parts = content.split(/(".*?")/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('"') && part.endsWith('"')) {
          return <span key={i} className="text-green-400">{part}</span>;
        }
        const highlighted = part
          .replace(/(public|class|private|final|return|new|int|void|String|String\[\])/g, '<kw>$1</kw>');
        return (
          <span key={i} dangerouslySetInnerHTML={{
            __html: highlighted
              .replace(/<kw>/g, '<span class="text-primary font-semibold">')
              .replace(/<\/kw>/g, '</span>')
              .replace(/(\d+)/g, '<span class="text-amber-400">$1</span>')
          }} />
        );
      })}
    </span>
  );
};

const TerminalIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 80);
      return () => clearTimeout(t);
    }
  }, [inView, visibleLines]);

  const outputVisible = visibleLines >= codeLines.length;

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-border bg-card overflow-hidden glow-card"
        >
          {/* IDE Title Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <FileCode2 size={14} className="text-primary" />
              <span>Developer.java</span>
              <span className="text-muted-foreground/40">— com.saikumar.portfolio</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-primary/10 rounded text-green-500" title="Run">
                <Play size={14} />
              </button>
              <button className="p-1 hover:bg-primary/10 rounded text-primary" title="Debug">
                <Bug size={14} />
              </button>
              <button className="p-1 hover:bg-primary/10 rounded text-destructive" title="Stop">
                <Square size={12} />
              </button>
            </div>
          </div>

          {/* IDE Tabs */}
          <div className="flex border-b border-border bg-secondary/30">
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-card border-r border-border text-xs font-mono">
              <FileCode2 size={12} className="text-primary" />
              <span className="text-foreground">Developer.java</span>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono text-muted-foreground/50">
              <FileCode2 size={12} />
              <span>Application.java</span>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex">
            <div className="py-4 px-2 bg-secondary/20 border-r border-border text-right select-none min-w-[3rem]">
              {codeLines.slice(0, visibleLines).map((line) => (
                <div key={line.num} className="text-xs font-mono text-muted-foreground/40 leading-6 px-1">
                  {line.num}
                </div>
              ))}
            </div>
            <div className="py-4 px-4 flex-1 overflow-x-auto">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={line.num}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-mono leading-6 whitespace-pre"
                >
                  {syntaxHighlight(line.content, line.type)}
                  {i === visibleLines - 1 && visibleLines < codeLines.length && (
                    <span className="terminal-cursor" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Console Output */}
          {outputVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="border-t border-border"
            >
              <div className="flex items-center gap-2 px-4 py-1.5 bg-secondary/30 border-b border-border">
                <ChevronRight size={12} className="text-primary" />
                <span className="text-xs font-mono text-muted-foreground">Console Output</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1 bg-background/50">
                <p className="text-green-400">✓ Build successful — Developer.java compiled</p>
                <p className="text-muted-foreground">
                  <span className="text-primary">→</span> Running Developer.getStatus()...
                </p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-foreground">
                  Output: <span className="text-green-400">"Open to opportunities ✨"</span>
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-muted-foreground/60">
                  Process finished with exit code 0
                </motion.p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalIntro;
