import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data/portfolioData";

const contactLinks = [
  { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.split(" / ")[0].replace(/\s/g, "")}` },
  { icon: FiMapPin, label: profile.address, href: null },
  { icon: FiGithub, label: "github.com/Tsitohaina21", href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ouvre le client mail de l'utilisateur avec le message pré-rempli.
    // À remplacer par un appel API / service d'envoi si besoin.
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <p className="eyebrow">// contact</p>
      <h2 className="section-title">Discutons de votre projet</h2>
      <p className="mt-3 max-w-2xl text-sm text-ink-500 dark:text-ink-400">
        Une opportunité de stage, une question sur un projet ? N'hésitez pas
        à me contacter.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card flex items-center gap-3 p-4 text-sm text-ink-700 transition-colors hover:border-accent-400 dark:text-ink-200"
                >
                  <Icon className="text-accent-500" />
                  {label}
                </a>
              ) : (
                <div className="card flex items-center gap-3 p-4 text-sm text-ink-700 dark:text-ink-200">
                  <Icon className="text-accent-500" />
                  {label}
                </div>
              )}
            </li>
          ))}
        </motion.ul>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card space-y-4 p-6"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-medium text-ink-500 dark:text-ink-400">
              Nom
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors focus:border-accent-500 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-ink-500 dark:text-ink-400">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors focus:border-accent-500 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
              placeholder="vous@exemple.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-xs font-medium text-ink-500 dark:text-ink-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors focus:border-accent-500 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100"
              placeholder="Votre message..."
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            <FiSend /> Envoyer le message
          </button>
          {sent && (
            <p className="text-center text-xs text-accent-600 dark:text-accent-300">
              Votre client mail va s'ouvrir pour finaliser l'envoi.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
