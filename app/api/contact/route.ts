import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const Schema = z.object({
  firstName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(180),
});

export async function POST(req: Request) {
  const data = await req.json();
  const parsed = Schema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Gmail (use App Password with 2FA)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  const { firstName, email, phone, message } = parsed.data;

  const to = process.env.CONTACT_EMAIL;
  const from = process.env.EMAIL_FROM;

  if (!to || !from) {
    return NextResponse.json(
      { ok: false, error: "Email is not configured" },
      { status: 500 }
    );
  }

  const subject = `New contact form submission from ${firstName}`;
  const text = [
    `Name: ${firstName}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,Arial,sans-serif;background:#f6f7f9;padding:18px">
      <div style="max-width:640px;margin:auto;background:#ffffff;border-radius:12px;padding:18px;border:1px solid #e5e7eb">
        <h2 style="margin:0 0 12px;font-size:18px;">New contact form submission</h2>
        <p style="margin:0 0 6px;"><strong>Name:</strong> ${firstName}</p>
        <p style="margin:0 0 6px;"><strong>Email:</strong> ${email}</p>
        ${phone ? `<p style="margin:0 0 6px;"><strong>Phone:</strong> ${phone}</p>` : ""}
        <div style="margin-top:10px;padding:12px;background:#f9fafb;border-left:4px solid #d6a108;border-radius:6px;white-space:pre-wrap;color:#111827;">
          ${message}
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      to,
      from,           // send from your Gmail
      replyTo: email, // end-user email
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}