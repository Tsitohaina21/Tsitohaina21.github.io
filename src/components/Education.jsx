import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section bg-ink-50/60 dark:bg-ink-900/30">
      <p className="eyebrow">// formation</p>
      <h2 className="section-title">Mon parcours académique</h2>

      <div className="relative mt-12 ml-3 space-y-10 border-l-2 border-ink-200 pl-8 dark:border-ink-800">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white shadow-card">
              <FiBookOpen size={14} />
            </span>
            <p className="font-mono text-xs text-accent-500 dark:text-accent-300">
              {item.period}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-white">
              {item.degree}
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-400">{item.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
