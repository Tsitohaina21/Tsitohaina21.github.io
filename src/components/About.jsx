import { motion } from "framer-motion";
import { FiCompass } from "react-icons/fi";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">// à propos</p>
        <h2 className="section-title">Qui suis-je ?</h2>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-ink-600 dark:text-ink-300"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="card p-6">
            <div className="mb-4 flex items-center gap-2 text-accent-600 dark:text-accent-300">
              <FiCompass /> <span className="font-mono text-sm">centres d'intérêt</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <li key={interest} className="tag">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
