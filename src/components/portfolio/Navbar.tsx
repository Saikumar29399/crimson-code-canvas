import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  "home", "about", "skills", "experience", "projects",
  "education", "testimonials", "certifications", "resume", "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.offsetTop - 100 : 0 };
      });
      const current = offsets.reverse().find((s) => window.scrollY >= s.top);
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("home")} className="font-mono text-lg font-bold gradient-text">
          {"<SK />"}
        </button>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`px-3 py-1.5 text-sm font-mono capitalize rounded-md transition-colors ${
                active === s ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4"
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`block w-full text-left px-3 py-2 text-sm font-mono capitalize rounded-md ${
                active === s ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
