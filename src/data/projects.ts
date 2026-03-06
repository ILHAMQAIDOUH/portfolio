export interface Project {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "Data/SIG";
  context: string;
  role: string;
  stack: string[];
  features: string[];
  challenges: string;
  results: string;
  company: string;
  period: string;
}

export const projects: Project[] = [
  {
    id: "app-communication",
    title: "App Communication Interne",
    category: "Mobile",
    context: "Application mobile de communication interne pour COSUMAR, developpee lors d'un stage chez DIGITAL FACTORY.",
    role: "Developpeuse Mobile Full Stack",
    stack: ["React Native", "Expo", "PocketBase", "Figma"],
    features: [
      "Messagerie en temps reel",
      "Gestion d'annonces internes",
      "Notifications push",
      "Interface utilisateur intuitive",
      "Systeme d'authentification securise"
    ],
    challenges: "Conception d'une architecture scalable avec PocketBase et gestion de la synchronisation en temps reel.",
    results: "Application livree et deployee avec succes, ameliorant la communication interne de l'entreprise.",
    company: "DIGITAL FACTORY (COSUMAR)",
    period: "Mars -> Juillet 2024"
  },
  {
    id: "a4c-platform",
    title: "Plateforme A4C by OCP",
    category: "Web",
    context: "Plateforme web developpee pour OCP Safi dans le cadre d'un stage de fin d'etudes.",
    role: "Developpeuse Full Stack",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    features: [
      "Dashboard interactif",
      "Gestion des donnees en temps reel",
      "API RESTful complete",
      "Interface responsive",
      "Systeme de rapports automatises"
    ],
    challenges: "Integration de multiples sources de donnees et optimisation des performances du dashboard.",
    results: "Plateforme operationnelle facilitant le suivi et l'analyse des donnees pour l'equipe OCP.",
    company: "OCP Safi",
    period: "Mai -> Juillet 2023"
  },
  {
    id: "tracking-gps",
    title: "Site Tracking GPS",
    category: "Data/SIG",
    context: "Developpement d'un site de tracking GPS pour BC Skills Group.",
    role: "Developpeuse Web",
    stack: ["Python", "HTML", "CSS", "JavaScript", "Leaflet"],
    features: [
      "Suivi GPS en temps reel",
      "Cartographie interactive avec Leaflet",
      "Historique des trajets",
      "Alertes de geofencing",
      "Export des donnees de tracking"
    ],
    challenges: "Gestion du flux de donnees GPS en temps reel et optimisation de l'affichage cartographique.",
    results: "Solution de tracking fonctionnelle deployeee avec succes.",
    company: "BC Skills Group",
    period: "Mai -> Juillet 2022"
  },
  {
    id: "gestion-mutuelles",
    title: "Gestion Dossiers Mutuelles",
    category: "Web",
    context: "Systeme de gestion des dossiers mutuelles pour COSUMAR.",
    role: "Developpeuse Web",
    stack: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "CRUD complet des dossiers",
      "Recherche avancee avec filtres",
      "Generation de rapports PDF",
      "Gestion des roles utilisateurs",
      "Tableau de bord statistique"
    ],
    challenges: "Modelisation complexe de la base de donnees et securisation des donnees sensibles.",
    results: "Digitalisation complete du processus de gestion des mutuelles.",
    company: "COSUMAR",
    period: "Mai -> Juin 2021"
  },
  {
    id: "automation-hydro",
    title: "Automatisation & Integration Hydrologique",
    category: "Data/SIG",
    context:
      "Automatisation de processus, migration de bases de donnees et integration de donnees hydrologiques chez C4E AFRICA. Creation du website de l'entreprise et d'applications web/desktop pour visualiser les resultats des etudes et analyses.",
    role: "Ingenieure IT - Developpement & Integration",
    stack: ["Python", "Node.js", "PostgreSQL", "Docker", "GeoJSON"],
    features: [
      "Scripts d'automatisation de workflows",
      "Migration de bases de donnees complexes",
      "Integration de resultats hydrologiques",
      "Applications web et desktop pour visualisation",
      "Preparation de templates pour injection en base de donnees"
    ],
    challenges:
      "Gestion de volumes importants de donnees geospatiales et garantie de l'integrite lors des migrations et de l'injection finale.",
    results:
      "Processus automatises reduisant le temps de traitement de 60%, migration reussie sans perte de donnees, et livraison d'outils de visualisation pour les etudes et analyses.",
    company: "C4E AFRICA",
    period: "Juin 2025 -> Aujourd'hui"
  }
];
