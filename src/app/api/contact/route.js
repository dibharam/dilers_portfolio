import { NextResponse } from "next/server";

// Optional: use Resend to actually send email on Vercel
// 1) npm i resend
// 2) set RESEND_API_KEY, EMAIL_TO, EMAIL_FROM in env
let Resend;
try {
  ({ Resend } = await import("resend"));
} catch {
  // ignore if not installed; we'll fallback to console
}

export async function POST(req) {
  try {
    const { name, email, message, website } = await req.json();

    // basic validation
    if (website) {
      // honeypot tripped → treat as spam but act like success
      return NextResponse.json({ ok: true });
    }
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // If Resend is available and keys exist, send an email
    if (Resend && process.env.RESEND_API_KEY && process.env.EMAIL_TO && process.env.EMAIL_FROM) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `Portfolio contact from ${name}`,
        reply_to: email,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    } else {
      // Fallback: log to server (useful locally)
      console.log("CONTACT_FORM", { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_FORM_ERROR", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
