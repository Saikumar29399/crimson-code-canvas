import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Texas at Dallas",
    year: "2016 – 2018",
    details: "Specialized in Software Engineering and Distributed Systems. GPA: 3.8/4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "JNTU Hyderabad",
    year: "2012 – 2016",
    details: "Focus on Data Structures, Algorithms, and Database Management Systems.",
  },
];

const Education = () => (
  <section id="education" className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Education</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Academic Background</h3>
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-lg bg-card border border-border glow-card flex gap-5"
          >
            <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground">{edu.degree}</h4>
              <p className="font-mono text-sm text-primary">{edu.school}</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">{edu.year}</p>
              <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
