import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiAlertCircle,
  FiChevronLeft,
  FiChevronRight,
  FiX,
} from "react-icons/fi";

/**
 * Carte détaillée d'un projet : image (ou espace réservé), description,
 * technologies, fonctionnalités, difficultés rencontrées, et liens.
 */
export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const mediaItems =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : Array.isArray(project.image)
      ? project.image
      : project.image
      ? [project.image]
      : [];

  const currentMedia = mediaItems[activeImageIndex];
  const currentImageSrc =
    typeof currentMedia === "string"
      ? currentMedia
      : currentMedia?.src ?? currentMedia?.default ?? null;
  const currentImageAlt =
    typeof currentMedia === "string"
      ? `Aperçu du projet ${project.title}`
      : currentMedia?.alt ?? currentMedia?.default?.alt ?? `Aperçu du projet ${project.title}`;

  const showPreviousImage = () => {
    if (mediaItems.length <= 1) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    if (mediaItems.length <= 1) return;
    setActiveImageIndex((prev) =>
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  };

  const openZoom = () => {
    setIsZoomOpen(true);
  };

  const closeZoom = () => {
    setIsZoomOpen(false);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="card grid overflow-hidden md:grid-cols-2"
    >
      {/* Illustration (ou emplacement réservé si aucune image n'est fournie) */}
      <div
        className={`relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-accent-500/10 to-ink-900/5 dark:from-accent-500/10 dark:to-white/5 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        {currentImageSrc ? (
          <>
            <img
              src={currentImageSrc}
              alt={currentImageAlt}
              loading="lazy"
              onClick={() => setIsZoomOpen(true)}
              className="h-full w-full cursor-zoom-in object-contain bg-white/80"
            />

            {mediaItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                  aria-label="Afficher l'image précédente"
                >
                  <FiChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
                  aria-label="Afficher l'image suivante"
                >
                  <FiChevronRight size={18} />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === activeImageIndex
                          ? "bg-white"
                          : "bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Afficher l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 text-ink-400 dark:text-ink-500">
            <FiCode size={36} />
            <span className="font-mono text-xs">
              capture d'écran à ajouter
            </span>
          </div>
        )}
      </div>

      <div className={`p-8 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <p className="font-mono text-xs text-accent-500 dark:text-accent-300">
          {project.subtitle}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold text-ink-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <h4 className="mb-2 font-display text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
            Fonctionnalités principales
          </h4>
          <ul className="space-y-1.5">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-ink-600 dark:text-ink-300"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="mt-5 flex gap-2 rounded-lg bg-ink-50 p-3 text-sm text-ink-500 dark:bg-ink-800/60 dark:text-ink-400">
          <FiAlertCircle className="mt-0.5 flex-shrink-0" size={16} />
          <div>
            <span className="font-semibold text-ink-600 dark:text-ink-300">
              Difficultés rencontrées :{" "}
            </span>
            {project.difficulties}
          </div>
        </div> */}

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <FiGithub /> Code source
            </a>
          ) : (
            <span className="btn-secondary cursor-not-allowed opacity-60">
              <FiGithub /> Lien GitHub à ajouter
            </span>
          )}
          
        </div>
      </div>

      {/* Zoom modal */}
      <AnimatePresence>
        {isZoomOpen && currentImageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setIsZoomOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsZoomOpen(false)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition hover:bg-white"
                aria-label="Fermer la vue zoom"
              >
                <FiX size={18} />
              </button>

              <img
                src={currentImageSrc}
                alt={currentImageAlt}
                className="max-h-[85vh] w-full rounded-xl object-contain"
              />

              {mediaItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPreviousImage();
                    }}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition hover:bg-white"
                    aria-label="Image précédente"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNextImage();
                    }}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg transition hover:bg-white"
                    aria-label="Image suivante"
                  >
                    <FiChevronRight size={18} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
