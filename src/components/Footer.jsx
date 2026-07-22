import { FiGithub, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-white py-8 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8 lg:px-12">
        <p className="font-mono text-xs text-ink-400 dark:text-ink-500">
          © {year} {profile.fullName}.
        </p>
        <div className="flex items-center gap-4 text-ink-400 dark:text-ink-500">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent-500"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="E-mail"
            className="transition-colors hover:text-accent-500"
          >
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
