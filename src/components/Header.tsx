import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import cvFile from "@/assets/CV-ILHAM QAIDOUH.pdf";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Competences" },
  { href: "#experience", label: "Experiences" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
    >
      <nav
        className={`mx-auto max-w-6xl overflow-hidden rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-primary/30 bg-background/80 shadow-[0_18px_45px_hsla(250,85%,65%,0.2)] backdrop-blur-xl"
            : "border-white/10 bg-background/45 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3 md:px-6">
          <a href="#accueil" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-primary/45 bg-primary/20">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(210,100%,55%,0.45),transparent_65%)]" />
              <span className="relative font-heading text-sm font-bold text-white">IQ</span>
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-heading text-base font-semibold tracking-wide text-foreground">Ilham Portfolio</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-primary/80">Full Stack</span>
            </span>
          </a>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-background/30 px-2 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/15 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
              Disponible
            </span>
            <a href={cvFile} target="_blank" rel="noopener noreferrer" download="CV-ILHAM QAIDOUH.pdf" className="btn-primary text-sm !px-4 !py-2">
              <Download size={14} />
              Telecharger CV
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto inline-flex rounded-xl border border-white/15 bg-background/35 p-2 text-foreground transition-colors hover:bg-primary/15 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-background/80 px-4 pb-4 backdrop-blur-xl md:hidden"
            >
              <div className="mb-3 mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
                <Sparkles size={13} />
                Navigation rapide
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-white/10 bg-background/35 px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-ILHAM QAIDOUH.pdf"
                className="btn-primary mt-4 w-full text-sm !py-2.5"
                onClick={() => setIsOpen(false)}
              >
                <Download size={14} />
                Telecharger CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
