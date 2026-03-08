import { motion } from "framer-motion";
import { Cloud, Box, FileCode, GitBranch, Code2, Database } from "lucide-react";

const categories = [
  {
    title: "Backend",
    icon: FileCode,
    skills: [
      { name: "Java/Spring Boot", level: 95 },
      { name: "Microservices", level: 92 },
      { name: "Hibernate/JPA", level: 90 },
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "Angular 2-13", level: 88 },
      { name: "React/TypeScript", level: 85 },
      { name: "HTML/CSS/JS", level: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3, SNS)", level: 88 },
      { name: "Docker/OpenShift", level: 85 },
      { name: "Jenkins CI/CD", level: 88 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "Oracle/MySQL/Postgres", level: 90 },
      { name: "MongoDB/Cassandra", level: 82 },
      { name: "Redis", level: 78 },
    ],
  },
  {
    title: "Messaging",
    icon: Box,
    skills: [
      { name: "Apache Kafka", level: 85 },
      { name: "RabbitMQ/ActiveMQ", level: 75 },
      { name: "Spring Integration", level: 80 },
    ],
  },
  {
    title: "Tools & Testing",
    icon: GitBranch,
    skills: [
      { name: "Git/Bitbucket/SVN", level: 90 },
      { name: "Maven/Gradle/Ant", level: 88 },
      { name: "JUnit/Mockito", level: 85 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="p-6 rounded-lg bg-card border border-border glow-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <cat.icon className="w-5 h-5 text-primary" />
              <h4 className="font-mono font-semibold text-foreground">{cat.title}</h4>
            </div>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <span className="font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full skill-bar-bg overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full skill-bar-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
