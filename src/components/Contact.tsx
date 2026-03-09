import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "ilhamqaidouh22@gmail.com";
const CONTACT_FORM_NAME = "contact";

const Contact = () => {
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim();
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const website = formData.website.trim();

    if (!name || !email || !message) {
      return;
    }

    try {
      setIsSending(true);
      setError(null);
      setSubmitted(false);

      const submitWithNetlifyForms = async () => {
        const encoded = new URLSearchParams({
          "form-name": CONTACT_FORM_NAME,
          name,
          email,
          message,
          website,
        }).toString();

        const netlifyResponse = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: encoded,
        });

        if (!netlifyResponse.ok) {
          throw new Error(`Erreur ${netlifyResponse.status} lors de l'envoi.`);
        }
      };

      if (contactApiUrl) {
        const response = await fetch(contactApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            website,
          }),
        });

        const isJson = response.headers.get("content-type")?.includes("application/json");
        const payload = isJson ? await response.json().catch(() => null) : null;

        if (!response.ok) {
          // Netlify static deploy: if API route doesn't exist, fallback to Netlify Forms.
          if (response.status === 404) {
            await submitWithNetlifyForms();
          } else {
          const fallback =
            response.status >= 500
              ? "API contact indisponible. Verifiez la configuration du backend."
              : `Erreur ${response.status} lors de l'envoi.`;
          throw new Error(payload?.error || fallback);
          }
        }

        if (response.ok && !payload?.ok) {
          throw new Error(payload?.error || "Envoi non confirme par le serveur.");
        }
      } else {
        await submitWithNetlifyForms();
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      const message =
        err instanceof TypeError
          ? "Connexion impossible. Verifiez la configuration de l'envoi."
          : err instanceof Error
            ? err.message
            : "Echec de l'envoi.";
      setError(`${message} Reessayez ou ecrivez-moi directement par email.`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-muted-foreground">
            Interesse par mon profil ? N'hesitez pas a me contacter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 space-y-5">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={18} className="text-primary" />
                {CONTACT_EMAIL}
              </a>
              <a href="tel:+212708612382" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={18} className="text-primary" />
                +212 708 612 382
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                Casablanca, Maroc - Remote / Hybride
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            name={CONTACT_FORM_NAME}
            data-netlify="true"
            netlify-honeypot="website"
            className="glass-card p-6 space-y-4"
          >
            <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
              className="hidden"
              aria-hidden="true"
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            {submitted && <p className="text-xs text-emerald-400">Message envoye avec succes.</p>}
            <button type="submit" disabled={isSending} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
              <Send size={16} />
              {isSending ? "Envoi..." : "Envoyer"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
