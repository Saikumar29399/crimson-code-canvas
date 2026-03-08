import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Award, GraduationCap, MapPin } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Years Experience", value: 6, suffix: "+" },
  { icon: Award, label: "Certifications", value: 5, suffix: "" },
  { icon: GraduationCap, label: "Degree", value: "MS", suffix: "", isText: true },
  { icon: MapPin, label: "Location", value: "USA", suffix: "", isText: true },
];

const AnimatedCounter = ({ target, suffix, isText }: { target: number | string; suffix: string; isText?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || isText) return;
    let start = 0;
    const end = target as number;
    const duration = 1500;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, isText]);

  return (
    <span ref={ref} className="text-3xl font-bold gradient-text">
      {isText ? (target as string) : count}
      {suffix}
    </span>
  );
};

const AboutMe = () => (
  <section id="about" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// About Me</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Who I Am</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm <span className="text-foreground font-semibold">Sai Kumar Kambampati</span>, a Java Full Stack Developer 
            with a passion for building robust, scalable, and efficient enterprise applications.
          </p>
          <p>
            With over 6 years of experience spanning backend systems with Java and Spring Boot to modern 
            frontend development with React and TypeScript, I bring a comprehensive approach to software engineering.
          </p>
          <p>
            I specialize in designing microservices architectures, implementing CI/CD pipelines, and deploying 
            cloud-native applications on AWS and Azure. My goal is to write clean, maintainable code that 
            delivers real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-lg bg-card border border-border glow-card text-center"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isText={stat.isText} />
              <p className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
