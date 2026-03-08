import { motion } from "framer-motion";
import { Building2, Leaf, Heart, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    icon: Building2,
    category: "Banking",
    title: "Enterprise Banking Microservices",
    description: "Developed and maintained Java-based microservices architecture for enterprise banking systems at Bank of America. Migrated 20+ services to OpenShift with event-driven Kafka communication and Redis caching.",
    tech: ["Java", "Spring Boot", "Kafka", "OpenShift", "Redis", "Oracle"],
  },
  {
    icon: Leaf,
    category: "Agriculture",
    title: "Crop Science Platform",
    description: "Built interactive Angular 13 frontends and Spring Boot microservices for inventory event processing at Bayer Crop Science. Integrated AWS services and secured APIs with JWT authentication.",
    tech: ["Angular 13", "Spring Boot", "Kafka", "AWS", "Docker", "MongoDB"],
  },
  {
    icon: Heart,
    category: "Healthcare",
    title: "Healthcare Data Management",
    description: "Developed microservices-based APIs at Abbott connecting to Postgres and MongoDB. Converted monolithic application to microservices architecture with Docker and AWS EC2 deployments.",
    tech: ["Angular 9", "Spring Boot", "Postgres", "MongoDB", "Docker", "AWS"],
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
