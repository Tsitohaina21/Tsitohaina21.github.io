# Portfolio — Tsitohaina Ramanamidona

Portfolio professionnel généré à partir du CV, construit avec **React + Vite + Tailwind CSS + Framer Motion + React Icons**.

## Installation

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

Le dossier `dist/` généré peut être déployé sur Vercel, Netlify, GitHub Pages, etc.

## Structure du projet

```
src/
  components/     # Un composant par section (Hero, About, Skills, Projects, ...)
  context/        # Contexte du thème clair/sombre
  data/           # portfolioData.js — TOUTES les infos du CV, à un seul endroit
  assets/         # Photo de profil extraite du CV
public/
  CV_Tsitohaina_Ramanamidona.docx   # CV téléchargeable depuis le bouton du Hero
```

## Personnaliser le contenu

Toutes les informations (nom, bio, compétences, projets, formation,
certifications, contacts) sont centralisées dans
`src/data/portfolioData.js`. Il suffit de modifier ce fichier pour mettre
le portfolio à jour — aucun autre fichier n'a besoin d'être touché pour
un simple changement de contenu.

## Données à compléter

Certaines informations n'étaient pas présentes dans le CV d'origine et ont
été laissées en emplacement réservé :

- Lien LinkedIn (`profile.linkedin`)
- Liens GitHub / démo pour chaque projet individuel
- Captures d'écran des projets (`project.image`)
- Difficultés rencontrées pour chaque projet
- Expérience professionnelle en entreprise (section actuellement vide)

## Ajouter une capture d'écran à un projet

1. Placez l'image dans `src/assets/`.
2. Importez-la en haut de `src/components/Projects.jsx` ou directement
   dans `portfolioData.js` avec un `import`.
3. Renseignez le champ `image` du projet correspondant.

## Formulaire de contact

Le formulaire ouvre actuellement le client mail de l'utilisateur avec le
message pré-rempli (`mailto:`). Pour un envoi silencieux depuis le
formulaire, branchez un service comme Formspree, EmailJS ou une route API
personnalisée dans `handleSubmit` (`src/components/Contact.jsx`).
