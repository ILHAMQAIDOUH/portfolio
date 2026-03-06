import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { z } from "zod";

const app = express();
const port = Number(process.env.PORT || process.env.CONTACT_API_PORT || 8788);

const resendApiKey = (process.env.RESEND_API_KEY || "").trim();
const toEmail = process.env.CONTACT_TO_EMAIL || "ilhamqaidouh22@gmail.com";
const customFromEmail = (process.env.CONTACT_FROM_EMAIL || "").trim();
const gmailUser = (process.env.GMAIL_USER || toEmail).trim();
const rawGmailPassword = (process.env.GMAIL_APP_PASSWORD || "").trim();

const hasValidResendKey = resendApiKey.startsWith("re_");
const gmailPasswordFromFallback = hasValidResendKey ? "" : resendApiKey;
const gmailAppPassword = (rawGmailPassword || gmailPasswordFromFallback).replace(/\s+/g, "");
const hasValidGmailConfig = gmailUser.length > 0 && gmailAppPassword.length > 0;
const provider = hasValidResendKey ? "resend" : hasValidGmailConfig ? "gmail" : "none";
const fromEmail =
  provider === "gmail"
    ? `Portfolio Contact <${gmailUser}>`
    : customFromEmail || "Portfolio Contact <onboarding@resend.dev>";

const resend = hasValidResendKey ? new Resend(resendApiKey) : null;
const gmailTransporter = hasValidGmailConfig
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })
  : null;

app.use(express.json({ limit: "50kb" }));

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  if (provider === "none") {
    res.status(500).json({
      ok: false,
      error:
        "Email service is not configured. Use RESEND_API_KEY (re_...) or set GMAIL_USER + GMAIL_APP_PASSWORD in .env.",
    });
    return;
  }

  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      ok: false,
      error: "Invalid form data.",
    });
    return;
  }

  const { name, email, message, website } = parsed.data;

  // Honeypot field used to silently block most bots.
  if (website && website.trim().length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  try {
    const submittedAt = new Date().toISOString();
    const html = `
      <h2>Nouveau message portfolio</h2>
      <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Date:</strong> ${escapeHtml(submittedAt)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `;

    const text = [
      "Nouveau message portfolio",
      `Nom: ${name}`,
      `Email: ${email}`,
      `Date: ${submittedAt}`,
      "",
      "Message:",
      message,
    ].join("\n");

    if (provider === "resend") {
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `Portfolio Contact - ${name}`,
        html,
        text,
      });

      if (error) {
        const providerMessage =
          typeof error.message === "string" && error.message.length > 0 ? error.message : "Email provider error.";
        res.status(502).json({
          ok: false,
          error: providerMessage,
        });
        return;
      }
    } else {
      await gmailTransporter.sendMail({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `Portfolio Contact - ${name}`,
        html,
        text,
      });
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    res.status(500).json({
      ok: false,
      error: "Unexpected server error.",
    });
  }
});

const server = app.listen(port, () => {
  console.log(`[contact-api] running on http://localhost:${port}`);
  if (provider === "resend") {
    console.log("[contact-api] email provider: resend");
  } else if (provider === "gmail") {
    console.log("[contact-api] email provider: gmail smtp");
  } else {
    console.warn("[contact-api] no valid email provider configured.");
  }
});

server.on("close", () => {
  console.warn("[contact-api] server closed.");
});

// Keeps the API process alive in shells where child processes exit when idle.
const keepAlive = setInterval(() => {}, 60 * 60 * 1000);

process.on("SIGTERM", () => {
  clearInterval(keepAlive);
  server.close(() => process.exit(0));
});

process.on("SIGINT", () => {
  clearInterval(keepAlive);
  server.close(() => process.exit(0));
});

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
