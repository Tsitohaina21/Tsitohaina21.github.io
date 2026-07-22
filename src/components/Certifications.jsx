import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-ink-50/60 dark:bg-ink-900/30">
      <p className="eyebrow">// certifications</p>
      <h2 className="section-title">Ce qui valide mes compétences</h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card flex items-start gap-4 p-6"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-300">
              <FiAward size={18} />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
