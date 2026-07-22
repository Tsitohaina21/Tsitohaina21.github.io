import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  if (experiences.length === 0) {
    return (
      <section id="experience" className="section">
        <p className="eyebrow">// expériences professionnelles</p>
        <h2 className="section-title">En entreprise</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card mt-10 flex flex-col items-center gap-3 p-10 text-center"
        >
          <FiBriefcase size={28} className="text-accent-500" />
          <p className="max-w-md text-sm text-ink-500 dark:text-ink-400">
            Aucune expérience professionnelle en entreprise n'est encore
            renseignée dans mon CV — cet espace sera complété après mon
            premier stage. En attendant, retrouvez mes réalisations dans la
            section{" "}
            <a href="#projects" className="text-accent-600 underline dark:text-accent-300">
              Projets
            </a>
            .
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="experience" className="section">
      <p className="eyebrow">// expériences professionnelles</p>
      <h2 className="section-title">En entreprise</h2>
      <div className="mt-10 space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="card p-6">
            <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              {exp.company} — {exp.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
