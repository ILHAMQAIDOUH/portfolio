import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/profil.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-start md:items-center px-4 md:px-8 pt-24 md:pt-28 pb-8 md:pb-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-28 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(250, 85%, 65%) 0%, transparent 70%)" }}
          animate={{ x: [0, 28, -8, 0], y: [0, 24, -12, 0], scale: [1, 1.1, 0.96, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 w-[30rem] h-[30rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(210, 100%, 55%) 0%, transparent 70%)" }}
          animate={{ x: [0, -22, 10, 0], y: [0, -20, 8, 0], scale: [1, 0.92, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsla(210, 100%, 80%, 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsla(210, 100%, 80%, 0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 tech-chip mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Disponible - Casablanca / Remote / Hybride
          </motion.span>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4">
            Ilham <span className="gradient-text">Qaidouh</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-2 font-medium">
            Ing&eacute;nieure en Informatique &amp; Syst&egrave;mes d&apos;Information
          </motion.p>

          <motion.p variants={itemVariants} className="text-base text-muted-foreground mb-8 max-w-xl">
            D&eacute;veloppeuse Full Stack passionn&eacute;e par le web et mobile, actuellement &agrave; la recherche d&apos;une opportunit&eacute; dans le d&eacute;veloppement.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a href="#projets" className="btn-primary" whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Briefcase size={18} />
              Voir mes projets
            </motion.a>
            <motion.a href="#contact" className="btn-outline" whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Me contacter
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 mt-10 max-w-md">
            {[
              { value: "3+", label: "Ann&eacute;es d&apos;exp." },
              { value: "5+", label: "Projets livr&eacute;s" },
              { value: "15+", label: "Technologies" },
            ].map((stat) => (
              <motion.div key={stat.label} whileHover={{ y: -4 }} className="glass-card px-4 py-3 text-center">
                <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-5 rounded-full opacity-45 blur-2xl"
              style={{ background: "conic-gradient(from 0deg, hsl(250, 85%, 65%), hsl(210, 100%, 55%), hsl(180, 80%, 50%), hsl(250, 85%, 65%))" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-primary/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            <motion.div whileHover={{ scale: 1.03 }} className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden gradient-border glow-effect">
              <img
                src={heroPortrait}
                alt="Ilham Qaidouh - Developpeuse Full Stack"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-3 md:-right-4 glass-card px-4 py-2 text-sm font-medium"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles size={14} className="text-accent" />
                Full Stack Developer
              </span>
            </motion.div>

            <motion.div
              className="absolute top-6 -left-5 hidden md:block glass-card px-3 py-2 text-xs font-semibold"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              React | Node | QA
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 9, 0], opacity: [0.55, 1, 0.55] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default Hero;
