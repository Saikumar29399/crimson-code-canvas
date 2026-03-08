import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Java Full Stack Developer",
    duration: "2022 – Present",
    points: [
      "Led development of microservices architecture serving 2M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Mentored team of 5 junior developers on best practices",
      "Built real-time data processing pipeline with Kafka and Spring Cloud",
    ],
  },
  {
    company: "CloudFirst Corp.",
    role: "Java Developer",
    duration: "2020 – 2022",
    points: [
      "Developed RESTful APIs for healthcare data management platform",
      "Migrated monolithic application to containerized microservices",
      "Optimized database queries improving response time by 40%",
      "Integrated AWS services (S3, SQS, Lambda) into existing workflows",
    ],
  },
  {
    company: "Digital Innovations LLC",
    role: "Junior Software Engineer",
    duration: "2018 – 2020",
    points: [
      "Built full stack features using Java, Spring MVC, and Angular",
      "Participated in agile ceremonies and code review processes",
      "Implemented automated testing achieving 85% code coverage",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Experience</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Work History</h3>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-20"
            >
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />

              <div className="p-6 rounded-lg bg-card border border-border glow-card">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Building2 className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-foreground">{exp.role}</h4>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="font-mono text-sm text-primary">{exp.company}</span>
                  <span className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
