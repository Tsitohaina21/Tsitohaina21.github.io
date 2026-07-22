import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import profilePhoto from "../assets/Tsitohaina1.png";

const ROLES = [
  "Étudiant en Informatique",
  "Développeur Full Stack",
];

/** Petit effet "machine à écrire" qui alterne entre les intitulés du profil. */
function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="section grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">// bonjour, je m'appelle</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.fullName}
          </h1>

          <div className="mt-4 h-8 font-mono text-lg text-accent-600 dark:text-accent-300 sm:text-xl">
            {typed}
            <span className="blinking-cursor">_</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a href={profile.cvFile} download className="btn-secondary">
              <FiDownload /> Télécharger mon CV
            </a>
            <a href="#contact" className="btn-secondary">
              <FiMail /> Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-400 to-accent-700 opacity-20 blur-2xl" />
          <div className="relative aspect-square w-64 overflow-hidden rounded-[2rem] border border-ink-100 bg-ink-50 shadow-card dark:border-ink-800 dark:bg-ink-900 sm:w-80">
            <img
              src={profilePhoto}
              alt={`Photo de ${profile.fullName}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-ink-100 bg-white px-4 py-2 font-mono text-xs text-ink-600 shadow-card dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300">
            statut: <span className="text-accent-500">disponible pour stage</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Défiler vers la section suivante"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 dark:text-ink-500"
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
}
