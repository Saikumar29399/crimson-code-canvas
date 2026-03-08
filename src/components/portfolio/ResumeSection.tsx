import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const ResumeSection = () => (
  <section id="resume" className="py-20 px-6">
    <div className="container mx-auto max-w-2xl text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Resume</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get My Resume</h3>
        <p className="text-muted-foreground mb-8">
          Download or view my complete resume with detailed work history, skills, and accomplishments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.docx"
            download="SaikumarKambampati_Resume.docx"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors glow-card"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="https://docs.google.com/gview?url=https://id-preview--58caf5b1-1cd4-430a-b154-8bf943ff9bfd.lovable.app/resume.docx&embedded=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            <Eye size={18} /> View Online
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
