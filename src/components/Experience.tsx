import { motion } from "framer-motion";

const experiences = [
  {
    title: "Ingénieure IT – Développement & Intégration",
    company: "C4E AFRICA, Casablanca",
    period: "Juin 2025 → Aujourd'hui",
    description: "Développement web/mobile/desktop, scripts d'automatisation, migration de bases de données, conception/tests/optimisation, intégration de résultats hydrologiques, déploiement.",
    tech: ["Python", "Node.js", "PostgreSQL", "Docker"],
    current: true,
  },
  {
    title: "Téléconseillère",
    company: "Entelcia",
    period: "Fév 2025 → Mai 2025",
    description: "Service clientèle et gestion des appels entrants/sortants.",
    tech: [],
    current: false,
  },
  {
    title: "Stage – Développement Mobile",
    company: "DIGITAL FACTORY (COSUMAR)",
    period: "Mars → Juillet 2024",
    description: "Développement d'une application de communication interne avec React Native/Expo et PocketBase. Design UI/UX avec Figma.",
    tech: ["React Native", "Expo", "PocketBase", "Figma"],
    current: false,
  },
  {
    title: "Stage – Développement Web",
    company: "OCP Safi",
    period: "Mai → Juillet 2023",
    description: 'Développement de la plateforme "A4C by OCP" avec la stack MERN.',
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    current: false,
  },
  {
    title: "Stage – Développement Web",
    company: "BC Skills Group",
    period: "Mai → Juillet 2022",
    description: "Développement d'un site de Tracking GPS.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    title: "Stage – Développement Web",
    company: "COSUMAR",
    period: "Mai → Juin 2021",
    description: "Système de gestion des dossiers mutuelles.",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Mon <span className="gradient-text">Parcours</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Un parcours progressif allant des stages aux postes d'ingénierie.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 mt-2 z-10"
                style={{ background: exp.current ? "var(--gradient-primary)" : "hsl(var(--muted-foreground))" }}
              />

              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}>
                <div className="glass-card p-5">
                  {exp.current && (
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2" style={{ background: "var(--gradient-primary)", color: "white" }}>
                      Actuel
                    </span>
                  )}
                  <h3 className="font-heading font-bold text-base mb-1">{exp.title}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  {exp.tech.length > 0 && (
                    <div className={`flex flex-wrap gap-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
