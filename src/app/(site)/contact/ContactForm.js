"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    const form = e.currentTarget;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      website: form.website.value.trim(), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");

      setStatus({ state: "success", message: "Message sent. I’ll get back to you soon!" });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Failed to send message" });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
      {/* honeypot (hidden for humans) */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block text-sm text-zinc-600 mb-1" htmlFor="name">Name</label>
        <input id="name" name="name" required
               className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigoBrand" />
      </div>

      <div>
        <label className="block text-sm text-zinc-600 mb-1" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required
               className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigoBrand" />
      </div>

      <div>
        <label className="block text-sm text-zinc-600 mb-1" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required
                  className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigoBrand" />
      </div>

      <button type="submit"
              disabled={status.state === "loading"}
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-indigoBrand text-white disabled:opacity-60">
        {status.state === "loading" ? "Sending…" : "Send message"}
      </button>

      {status.message ? (
        <p className={
          status.state === "success" ? "text-green-600" :
          status.state === "error" ? "text-red-600" : "text-zinc-600"
        }>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
