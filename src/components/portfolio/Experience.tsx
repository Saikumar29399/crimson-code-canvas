import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Bank Of America, Newark, DE",
    role: "Full Stack Java Developer",
    duration: "April 2024 – Present",
    points: [
      "Developed and maintained Java-based backend applications built on microservices architecture supporting enterprise banking systems",
      "Implemented event-driven communication using Apache Kafka for asynchronous data exchange between microservices",
      "Led migration of 20+ microservices from JBoss VM-based deployments to OpenShift container platform",
      "Built enterprise integration flows using Spring Integration and high-volume batch processing with Spring Batch",
      "Implemented Redis-based caching strategies to reduce database load and improve response times",
      "Implemented CI/CD pipelines using Jenkins and used Ansible for infrastructure automation",
    ],
  },
  {
    company: "Bayer Crop Science, St. Louis, MO",
    role: "Full Stack Java Developer",
    duration: "June 2021 – April 2024",
    points: [
      "Built interactive modern user interfaces using Angular 13 with TypeScript",
      "Designed and developed Spring Apache Kafka based Microservices for inventory event processing",
      "Secured Spring Boot RESTful APIs with JSON Web Tokens (JWTs) for authentication",
      "Used Docker for containerization and deployed applications on AWS services like EC2 and S3",
      "Composed and executed MongoDB scripts and wrote complex SQL queries for Oracle database",
    ],
  },
  {
    company: "Abbott, Chicago, IL",
    role: "Full Stack Java Developer",
    duration: "January 2020 – May 2021",
    points: [
      "Developed UI components using Angular 9 with dependency injection, models, and data binding",
      "Built Spring Boot microservices and converted monolithic app to microservices architecture",
      "Developed microservices-based independent APIs using REST connecting to Postgres and MongoDB",
      "Deployed Spring Boot based microservices on Docker and Amazon EC2 containers",
    ],
  },
  {
    company: "Western Union, San Francisco, CA",
    role: "Java Developer",
    duration: "February 2017 – December 2019",
    points: [
      "Designed and developed user interactive web pages using HTML5, CSS, TypeScript, Bootstrap, and Angular 2/4",
      "Designed and developed Microservices business components and RESTful service endpoints using Spring",
      "Implemented Hibernate ORM for mapping data representation from MVC model to Oracle relational data",
      "Worked with Apache Tomcat and used Jenkins for continuous integration",
    ],
  },
  {
    company: "Agero Inc, Boston, MA",
    role: "Java Developer",
    duration: "January 2016 – January 2017",
    points: [
      "Developed server-side utilities using J2EE technologies — Servlets, JSP, JDBC",
      "Built application layer using Struts framework with J2EE design patterns",
      "Wrote SQL queries, stored procedures, triggers, and functions",
      "Implemented test-first programming approach using JUnit and JMock",
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
