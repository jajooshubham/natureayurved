import "dotenv/config";
import nodemailer from "nodemailer";
import type { Route } from "./+types/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") {
    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  const formData = await request.formData();
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const interest = String(formData.get("interest") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!firstName || !email) {
    return Response.json({ ok: false, error: "Please fill in your name and email." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP is not configured — missing SMTP_HOST/SMTP_USER/SMTP_PASS env vars.");
    return Response.json(
      { ok: false, error: "Email sending is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fullName = [firstName, lastName].filter(Boolean).join(" ");
  const subject = `New enquiry from ${fullName}${company ? ` — ${company}` : ""}`;
  const text = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    interest ? `Interested in: ${interest}` : null,
    "",
    "Message:",
    message || "(no message provided)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `"NatureExpert Website" <${SMTP_FROM || SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || SMTP_USER,
      replyTo: email,
      subject,
      text,
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return Response.json(
      { ok: false, error: "Something went wrong sending your message. Please try again later." },
      { status: 502 }
    );
  }
}
