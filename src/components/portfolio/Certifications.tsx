import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const certs = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2023" },
  { name: "Oracle Certified Professional Java SE 11", issuer: "Oracle", year: "2022" },
  { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2023" },
  { name: "Azure Developer Associate (AZ-204)", issuer: "Microsoft", year: "2022" },
  { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2023" },
];

const Certifications = () => (
  <section id="certifications" className="py-20 px-6">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-widest uppercase">// Certifications</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground">Credentials</h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border glow-card"
          >
            <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
              <p className="font-mono text-xs text-primary">{cert.issuer}</p>
              <p className="font-mono text-xs text-muted-foreground">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
