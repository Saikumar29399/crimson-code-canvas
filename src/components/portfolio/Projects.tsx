import { motion } from "framer-motion";
import { Globe, ShoppingCart, BarChart3, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    icon: Globe,
    category: "Enterprise",
    title: "Microservices Platform",
    description: "Built a distributed microservices platform handling 10K+ requests/sec with Spring Boot, Kafka, and Kubernetes. Includes service discovery, circuit breakers, and centralized logging.",
    tech: ["Java", "Spring Boot", "Kafka", "Kubernetes", "PostgreSQL"],
  },
  {
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "Full Stack E-Commerce App",
    description: "End-to-end e-commerce application with React frontend, Spring Boot backend, Stripe payments, and real-time inventory management.",
    tech: ["React", "TypeScript", "Spring Boot", "Redis", "Stripe"],
  },
  {
    icon: BarChart3,
    category: "Data",
    title: "Real-Time Analytics Dashboard",
    description: "Dashboard for monitoring application metrics and KPIs with real-time data streaming via WebSockets and interactive D3 visualizations.",
    tech: ["React", "D3.js", "WebSocket", "Spring WebFlux", "MongoDB"],
  },
];

const Projects = () => (
  <section id="projects" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group p-6 rounded-lg bg-card border border-border glow-card flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <project.icon className="w-8 h-8 text-primary" />
              <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">{project.category}</span>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">{project.title}</h4>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
