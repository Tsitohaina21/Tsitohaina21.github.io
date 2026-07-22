import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiTool,
  FiLayers,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";
import { skills } from "../data/portfolioData";

const categories = [
  { key: "languages", title: "Langages", icon: FiCode, items: skills.languages },
  { key: "frameworks", title: "Frameworks", icon: FiLayers, items: skills.frameworks },
  { key: "databases", title: "Bases de données", icon: FiDatabase, items: skills.databases },
  { key: "tools", title: "Outils", icon: FiTool, items: skills.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-ink-50/60 dark:bg-ink-900/30">
      <p className="eyebrow">// compétences</p>
      <h2 className="section-title">Ce que je maîtrise</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(({ key, title, icon: Icon, items }, idx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="card p-6"
          >
            <div className="mb-4 flex items-center gap-2 text-accent-600 dark:text-accent-300">
              <Icon size={18} />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
                {title}
              </h3>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-lg bg-ink-50 px-3 py-2 text-sm text-ink-700 dark:bg-ink-800 dark:text-ink-200"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-accent-600 dark:text-accent-300">
            <FiUsers size={18} />
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
              Savoir-être
            </h3>
          </div>
          <ul className="flex flex-wrap gap-2">
            {skills.soft.map((item) => (
              <li key={item} className="tag">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Langues parlées */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-accent-600 dark:text-accent-300">
            <FiGlobe size={18} />
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">
              Langues
            </h3>
          </div>
          <div className="space-y-4">
            {skills.spokenLanguages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1 flex justify-between text-sm text-ink-700 dark:text-ink-200">
                  <span>{lang.name}</span>
                  <span className="text-ink-400 dark:text-ink-500">{lang.level}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-accent-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
