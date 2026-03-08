import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Mitchell",
    role: "Engineering Manager, Tech Solutions Inc.",
    text: "Sai is one of the most dedicated engineers I've worked with. His ability to architect complex systems while keeping the codebase clean is remarkable. He consistently delivers ahead of schedule.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Developer, CloudFirst Corp.",
    text: "Working alongside Sai was a great experience. He has a knack for breaking down complex problems into manageable pieces and his mentoring helped our entire team level up.",
  },
  {
    name: "David Chen",
    role: "Tech Lead, Digital Innovations LLC",
    text: "Sai brought incredible energy and technical depth to our team. His contributions to our CI/CD pipeline and cloud migration were instrumental in our success.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-6">
    <div className="container mx-auto max-w-6xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Testimonials</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">What People Say</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 rounded-lg bg-card border border-border glow-card"
          >
            <Quote className="w-6 h-6 text-primary mb-4" />
            <p className="text-sm text-muted-foreground mb-5 italic leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="font-mono text-xs text-primary">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
