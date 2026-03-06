const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Ilham Qaidouh. Tous droits réservés.</p>
      <div className="flex gap-6">
        <a href="mailto:ilhamqaidouh22@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        <a href="tel:+212708612382" className="hover:text-foreground transition-colors">Téléphone</a>
      </div>
    </div>
  </footer>
);

export default Footer;
