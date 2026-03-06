import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const formations = [
  {
    title: "Ingénieur en Informatique & Systèmes d'Information",
    institution: "Université Privée de Marrakech",
    period: "2022 – 2024",
    icon: GraduationCap,
  },
  {
    title: "Licence en Informatique",
    institution: "Université",
    period: "2021 – 2022",
    icon: GraduationCap,
  },
  {
    title: "DUT en Génie Informatique",
    institution: "Université",
    period: "2018 – 2021",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "Formation SAP S/4HANA",
    period: "Février → Mai 2025",
    icon: Award,
  },
  {
    title: "Digitalisation des processus",
    period: "Depuis Septembre 2025 (en cours)",
    icon: Award,
  },
];

const Education = () => {
  return (
    <section id="formation" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Formation & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Formations */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Formation
            </h3>
            <div className="space-y-4">
              {formations.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <h4 className="font-heading font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-primary font-medium">{f.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <h4 className="font-heading font-bold text-sm mb-1">{c.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{c.period}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <h3 className="font-heading font-bold text-xl mt-8 mb-6">🌐 Langues</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { lang: "Arabe", level: "Maternelle" },
                { lang: "Français", level: "B2" },
                { lang: "Anglais", level: "Professionnel" },
              ].map((l) => (
                <div key={l.lang} className="tech-chip">
                  <span className="font-semibold">{l.lang}</span>
                  <span className="text-muted-foreground">— {l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
