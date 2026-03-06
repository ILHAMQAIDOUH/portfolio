import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

const categories = ["Tous", "Web", "Mobile", "Data/SIG"] as const;
type CategoryFilter = (typeof categories)[number];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="glass-card p-6 group cursor-pointer"
  >
    <div className="flex items-start justify-between mb-4">
      <span className="tech-chip text-xs">{project.category}</span>
      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
    </div>
    <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-sm text-muted-foreground mb-3">{project.company} - {project.period}</p>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.context}</p>
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.stack.slice(0, 4).map((t) => (
        <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
          {t}
        </span>
      ))}
      {project.stack.length > 4 && (
        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
          +{project.stack.length - 4}
        </span>
      )}
    </div>
    <div className="text-xs text-muted-foreground">
      <strong className="text-foreground">Resultat :</strong> {project.results}
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState<CategoryFilter>("Tous");

  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projets" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Une selection de projets realises en entreprise, couvrant le web, mobile et data/sig.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat ? "btn-primary !py-2 !px-4" : "tech-chip"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
