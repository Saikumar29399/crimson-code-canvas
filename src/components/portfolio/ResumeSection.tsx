import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

// GitHub raw URL — update this when you upload a new resume
const RESUME_RAW_URL =
  "https://raw.githubusercontent.com/Saikumar29399/SaiKumarKampampatiResume/main/SaikumarResume38.docx";

const RESUME_VIEW_URL = `https://docs.google.com/gview?url=${encodeURIComponent(RESUME_RAW_URL)}&embedded=true`;

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
            href={RESUME_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            <Eye size={18} /> View Resume
          </a>
          <a
            href={RESUME_RAW_URL}
            download="SaikumarKambampati_Resume.docx"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors glow-card"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
