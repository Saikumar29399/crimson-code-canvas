import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const techSkills = [
  { category: "Languages", items: "Java/J2EE, SQL" },
  { category: "Web Technologies", items: "HTML, CSS, TypeScript, JavaScript, jQuery, Bootstrap, AJAX" },
  { category: "JS/TS Frameworks", items: "AngularJS, Angular 2/4/6/8/11/13, React, Node" },
  { category: "Java/J2EE", items: "Spring MVC, Spring Boot, Spring Security, Spring Data, Spring Batch, Hibernate, Struts, SOAP, REST" },
  { category: "Databases", items: "Oracle, MySQL, Postgres, SQL Server, Cassandra, MongoDB" },
  { category: "DevOps & Cloud", items: "AWS (EC2, S3, SNS, CloudWatch), Docker, OpenShift, Jenkins, Ansible" },
  { category: "Tools", items: "Git, Bitbucket, SVN, Maven, Gradle, Ant, JUnit, Postman, SOAPUI, Swagger" },
  { category: "IDEs", items: "IntelliJ, Eclipse, VS Code, Spring Tool Suite" },
];

const Certifications = () => (
  <section id="certifications" className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Technical Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Skills Summary</h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {techSkills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border glow-card"
          >
            <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-sm">{skill.category}</h4>
              <p className="text-xs text-muted-foreground mt-1">{skill.items}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
