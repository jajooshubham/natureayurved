import "dotenv/config";
import nodemailer from "nodemailer";

export class ContactEmailNotConfiguredError extends Error {}

type ContactEmailInput = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

export async function sendContactEmail(input: ContactEmailInput) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("SMTP is not configured — missing SMTP_HOST/SMTP_USER/SMTP_PASS env vars.");
    throw new ContactEmailNotConfiguredError();
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const { firstName, lastName, email, company, interest, message } = input;
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

  await transporter.sendMail({
    from: `"NatureExpert Website" <${SMTP_FROM || SMTP_USER}>`,
    to: CONTACT_TO_EMAIL || SMTP_USER,
    replyTo: email,
    subject,
    text,
  });
}
