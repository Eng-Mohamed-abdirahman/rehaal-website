import { NextResponse } from 'next/server';
import { z } from 'zod';
import { packages } from '../../data/packages';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const BookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  notes: z.string().optional().default(''),
  packageId: z.coerce.number().int().positive(),
  travelers: z.coerce.number().int().min(1).max(10),
  payment: z.enum(['full', 'deposit']),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = BookingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const { fullName, email, phone, notes, packageId, travelers, payment } = parsed.data;

  const pkg = packages.find((p) => p.id === Number(packageId));
  if (!pkg) return NextResponse.json({ ok: false, error: 'Package not found' }, { status: 404 });

  const pricePerPerson = pkg.priceFrom;
  const total = pricePerPerson * travelers;

  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
  const EMAIL_FROM = process.env.EMAIL_FROM;
  const EMAIL_PASSWORD = (process.env.EMAIL_PASSWORD || '').replace(/\s+/g, '');

  const subject = `New booking request: ${pkg.title} (${travelers} ${travelers === 1 ? 'person' : 'people'})`;
  const text = [
    `Time: ${new Date().toISOString()}`,
    `Package: ${pkg.title} (#${pkg.id})`,
    `Dates: ${pkg.dates}`,
    `Duration: ${pkg.duration}`,
    `Price per person: ${pricePerPerson} USD`,
    `Travelers: ${travelers}`,
    `Total: ${total} USD`,
    `Payment option: ${payment === 'full' ? 'Pay in Full' : 'Pay in installments'}`,
    '',
    `Full name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    `Notes:\n${notes || '-'}`,
  ].join('\n');

  if (CONTACT_EMAIL && EMAIL_FROM && EMAIL_PASSWORD) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: EMAIL_FROM, pass: EMAIL_PASSWORD },
      });

      await transporter.sendMail({
        from: `"Rehaal Bookings" <${EMAIL_FROM}>`,
        to: CONTACT_EMAIL,
        subject,
        text,
      });
    } catch (err) {
      console.error('Email send failed:', err);
      return NextResponse.json({ ok: false, error: 'Email send failed' }, { status: 500 });
    }
  } else {
    console.log('[BOOKING REQUEST]\n' + text);
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ ok: false, error: 'Method not allowed' }, { status: 405 });
}