import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, message, website } = await req.json();
    if (website) return NextResponse.json({ ok: true });
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { RESEND_API_KEY, EMAIL_FROM, EMAIL_TO } = process.env;
    if (RESEND_API_KEY && EMAIL_FROM && EMAIL_TO) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `Portfolio contact from ${name}`,
        reply_to: email,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
    } else {
      console.log("CONTACT_FORM", { name, email, message });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_FORM_ERROR", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
