"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setState("success");
      setMessage("Thanks for reaching out. I’ll get back to you soon.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Something went wrong. Please email directly instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" type="text" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
      </div>

      <div className="mt-4">
        <Field
          label="Subject"
          name="subject"
          type="text"
          placeholder="Project inquiry"
          required
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm text-slate-300" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell me what you’d like to build."
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? "Sending..." : "Send message"}
        </button>
        <a
          href="mailto:ayush@example.com"
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
        >
          Email directly
        </a>
      </div>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            state === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/40 focus:outline-none"
      />
    </div>
  );
}
