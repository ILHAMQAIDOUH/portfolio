import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["PHP", "Python", "Java", "Node.js", "Express.js", "Spring Boot", "C"],
  },
  {
    title: "Base de données",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Oracle", "PocketBase"],
  },
  {
    title: "DevOps & Outils",
    skills: ["Docker", "Ubuntu", "Windows Server", "Git/GitHub", "Agile/Scrum"],
  },
  {
    title: "Design & Modélisation",
    skills: ["UML/Merise", "Figma", "Canva"],
  },
  {
    title: "Web Mapping / SIG",
    skills: ["Leaflet", "OpenLayers", "GeoJSON", "Turf.js", "DEM/MNT"],
  },
];

const Skills = () => {
  return (
    <section id="competences" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            <span className="gradient-text">Compétences</span> Techniques
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Un stack technique diversifié couvrant l'ensemble du cycle de développement.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="overflow-hidden mb-12 py-4">
          <div className="flex animate-marquee gap-4 w-max">
            {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
              <span key={`${skill}-${i}`} className="tech-chip whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-heading font-bold text-lg mb-4 gradient-text">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-chip text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
