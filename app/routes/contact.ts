import type { Route } from "./+types/contact";
import { ContactEmailNotConfiguredError, sendContactEmail } from "../utils/sendContactEmail.server";

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

  try {
    await sendContactEmail({ firstName, lastName, email, company, interest, message });
    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof ContactEmailNotConfiguredError) {
      return Response.json(
        { ok: false, error: "Email sending is not configured yet. Please try again later." },
        { status: 500 }
      );
    }
    console.error("Failed to send contact email", error);
    return Response.json(
      { ok: false, error: "Something went wrong sending your message. Please try again later." },
      { status: 502 }
    );
  }
}
