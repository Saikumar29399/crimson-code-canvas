import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} <span className="text-primary">Sai Kumar Kambampati</span>. All rights reserved.
      </p>
      <div className="flex gap-3">
        <a
          href="https://github.com/Saikumar29399"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/saikumar-kambampati-88437227a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
