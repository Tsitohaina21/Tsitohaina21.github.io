// -----------------------------------------------------------------------
// Toutes les informations proviennent directement du CV fourni.
// Les champs marqués "À compléter" correspondent à des données absentes
// du CV d'origine : aucune information n'a été inventée.
// -----------------------------------------------------------------------

import dolibarrBack from "../assets/dolibarrBackoffice.png";
import dolibarrFront from "../assets/dolibarrFrontoffice.png";
import myWallet from "../assets/wallet.png";
import todo from "../assets/todo.png";
import taxiBrousse from "../assets/taxibrousse.png";
import profilpic from "../assets/Tsitohaina1.png";

export const profile = {
  firstName: "Tsitohaina",
  lastName: "Ramanamidona",
  fullName: "Tsitohaina Ramanamidona",
  title: "Étudiant en Informatique – Développeur Full Stack",
  tagline:
    "Étudiant en informatique motivé, passionné par le développement web et les nouvelles technologies. Je recherche un stage afin de contribuer à des projets concrets tout en développant mes compétences techniques.",
  photo: [profilpic], // src/assets/profile.png (photo extraite du CV)
  email: "tsitoramanamidona@gmail.com",
  phone: "032 76 495 78 / 034 20 370 95",
  address: "Lgt34 Cité des profs Andranovory",
  github: "https://github.com/Tsitohaina21",
  linkedin: null,
  cvFile: "/CV_Tsitohaina_L3.docx",
};

export const about = {
  paragraphs: [
    "Actuellement en Licence 3 Informatique à l'ITU Antananarivo, je me forme au développement Full Stack en travaillant aussi bien sur des projets académiques que personnels.",
    "Curieux et autonome, j'aime explorer de nouvelles technologies et transformer des idées en applications concrètes, du backend à l'interface utilisateur.",
    "Mon objectif est de rejoindre une équipe pour un stage où je pourrai contribuer à des projets réels, apprendre des professionnels du secteur et continuer à progresser techniquement.",
  ],
  interests: ["Sport automobile", "Musique", "Art culinaire", "Jeux vidéo"],
};

export const skills = {
  languages: [
    { name: "JavaScript / TypeScript" },
    { name: "Java" },
    { name: "PHP" },
    { name: "HTML5 / CSS3" },
  ],
  frameworks: [
    { name: "Spring Boot" },
    { name: "Laravel" },
    { name: "React" },
  ],
  databases: [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "SQLite" },
  ],
  tools: [
    { name: "VS Code" },
    { name: "Docker" },
    { name: "XAMPP" },
    { name: "Git / GitHub" },
  ],
  soft: [
    "Capacité d'adaptation",
    "Sens de l'organisation",
    "Autonomie",
    "Capacité d'apprentissage",
  ],
  spokenLanguages: [
    { name: "Malgache", level: "Maternelle", value: 100 },
    { name: "Français", level: "Courant", value: 90 },
    { name: "Anglais", level: "Avancé", value: 75 },
  ],
};

// Projets tirés de la section "Expériences" du CV (il s'agit de projets
// universitaires et personnels ; aucune expérience en entreprise n'est
// mentionnée dans le CV d'origine).
export const projects = [
  {
    id: "dolibarr",
    title: "Intégration API Dolibarr",
    subtitle: "Projet universitaire",
    description:
      "Application React/TypeScript connectée à l'ERP Dolibarr via son API REST, permettant de synchroniser des données et d'étendre l'outil avec des pages personnalisées.",
    features: [
      "Développement d'une application React/TypeScript se connectant à Dolibarr via son API REST",
      "Synchronisation des données avec l'ERP Dolibarr",
      "Ajout de pages et fonctionnalités personnalisées dans l'application",
    ],
    tech: ["React", "TypeScript", "API REST", "Dolibarr"],
    difficulties:
      "Non précisé dans le CV — pourra être complété ultérieurement.",
    github: null, // Non précisé pour ce projet — à compléter
    demo: null,
    image: null,
    images: [dolibarrBack, dolibarrFront],
  },
  {
    id: "taxibrousse",
    title: "TaxiBrousse",
    subtitle: "Système de gestion pour compagnie de transport — Projet universitaire",
    description:
      "Application web de gestion pour une compagnie de transport : trajets, réservations, véhicules, clients, facturation et statistiques.",
    features: [
      "Développement d'une application web avec Spring Boot, Thymeleaf et PostgreSQL pour la gestion des trajets, réservations, véhicules et clients",
      "Module de facturation, de suivi des paiements et de statistiques (revenus par voiture, chiffre d'affaires)",
      "Système de gestion des campagnes publicitaires pour des sociétés partenaires",
    ],
    tech: ["Spring Boot", "Thymeleaf", "PostgreSQL"],
    difficulties:
      "Non précisé dans le CV — pourra être complété ultérieurement.",
    github: null,
    demo: null,
    image: [taxiBrousse],
  },
  {
    id: "mywallet",
    title: "MyWallet",
    subtitle: "Application de gestion de finances personnelles — Projet personnel fullstack",
    description:
      "Application fullstack de suivi budgétaire avec authentification sécurisée, tableau de bord graphique et conteneurisation Docker.",
    features: [
      "Développement d'un frontend React/TypeScript et d'une API REST sécurisée en Spring Boot avec authentification JWT",
      "Gestion des revenus/dépenses par catégories, tableau de bord avec graphiques et suivi de budget",
      "Base de données MySQL, conteneurisation avec Docker",
    ],
    tech: ["React", "TypeScript", "Spring Boot", "JWT", "MySQL", "Docker"],
    difficulties:
      "Non précisé dans le CV — pourra être complété ultérieurement.",
    github: "https://github.com/Tsitohaina21/MyWallet",
    demo: null,
    image: [myWallet],
  },
  {
    id: "todo-app",
    title: "To-Do App",
    subtitle: "Application de gestion de tâches — Projet personnel fullstack",
    description:
      "Application de gestion de tâches avec authentification, CRUD complet et sécurisation des données par utilisateur.",
    features: [
      "Application Laravel/Tailwind avec authentification et CRUD des tâches (filtres, recherche, tri)",
      "Mise à jour du statut en AJAX, autorisations par Policy pour sécuriser les données par utilisateur",
      "Modélisation de la base de données avec migrations Eloquent (SQLite)",
    ],
    tech: ["Laravel", "Tailwind CSS", "SQLite", "AJAX"],
    difficulties:
      "Non précisé dans le CV — pourra être complété ultérieurement.",
    github: "https://github.com/Tsitohaina21/todo-app",
    demo: null,
    image: [todo],
  },
];

export const education = [
  {
    id: "l3",
    degree: "Licence 3 — Informatique",
    school: "ITU Antananarivo",
    period: "2023 – en cours",
  },
  {
    id: "bac",
    degree: "Baccalauréat série D",
    school: "Saint Michel Amparibe",
    period: "2023",
  },
];

// Aucune expérience professionnelle en entreprise n'est mentionnée dans
// le CV : cette section reste volontairement vide et pourra être
// complétée après un premier stage.
export const experiences = [];

export const certifications = [
  {
    id: "etp",
    name: "English Teaching Program — A1 Certificate",
    issuer: "ETP Antsahavola",
    date: null, // Non précisé dans le CV
  },
];
