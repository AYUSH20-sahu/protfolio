import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim() ?? user;
  const to = process.env.CONTACT_TO_EMAIL?.trim() ?? user;

  if (!host || !user || !password || !from || !to || Number.isNaN(port)) {
    return null;
  }

  return {
    host,
    port,
    secure,
    user,
    password,
    from,
    to
  };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const smtpConfig = readSmtpConfig();

  if (!smtpConfig) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] submission received without SMTP config", {
        name,
        email,
        subject
      });

      return NextResponse.json({
        ok: true,
        message:
          "Contact form is in development mode. SMTP is not configured yet."
      });
    }

    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASSWORD, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL."
      },
      { status: 500 }
    );
  }

  const transport = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.password
    }
  });

  await transport.sendMail({
    from: `Ayush Sahu Portfolio <${smtpConfig.from}>`,
    to: smtpConfig.to,
    replyTo: email,
    subject: `[Portfolio Contact] ${subject}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <div style="margin-top: 20px; padding: 16px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
          ${escapeHtml(message).replace(/\n/g, "<br />")}
        </div>
      </div>
    `
  });

  const supabase = getSupabaseAdminClient();

  if (supabase) {
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      subject,
      message,
      source: "website",
      status: "new"
    });

    if (error) {
      console.warn("[contact] failed to store submission", error.message);
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out. Your message was delivered successfully."
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
