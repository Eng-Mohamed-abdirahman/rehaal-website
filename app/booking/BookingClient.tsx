'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { Send } from 'lucide-react';
import type { Package } from '../data/packages';

// Gold gradient like contact page
const goldStart = '#d58700';
const goldEnd = '#e7c15d';

type Props = {
  packages: Package[];
  initialId: number;
};

export default function BookingClient({ packages, initialId }: Props) {
  const [selectedId, setSelectedId] = useState<number>(initialId);
  const [travelers, setTravelers] = useState<number>(1);
  const [payment, setPayment] = useState<'full' | 'deposit'>('full');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const selected = useMemo(
    () => packages.find((p) => p.id === selectedId)!,
    [packages, selectedId]
  );

  const price = selected.priceFrom;
  const total = price * travelers;

  function durationNumber(dur: string) {
    const n = parseInt(dur, 10);
    return Number.isFinite(n) ? n : undefined;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      fullName,
      email,
      phone,
      notes,
      packageId: selectedId,
      travelers,
      payment,
    };
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Booking request sent. We will contact you shortly.');
    } catch {
      toast.error('Could not submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-center mb-6 sm:mb-10"
      >
        <h1 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight">
          <span className="text-neutral-900">Book Your</span>{' '}
          <span className="bg-gradient-to-r from-[#F2994A] to-[#F2C94C] bg-clip-text text-transparent">
            Spiritual Journey
          </span>
        </h1>
        <p className="mt-3 text-neutral-600">
          Fill in your details below and we will get back to you within 24 hours,
        </p>
        <p className="text-neutral-600">Insha&apos;Allah</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Form */}
        <motion.form
          onSubmit={submit}
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
        >
          <motion.div
            className="rounded-2xl bg-white border border-neutral-200 p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name as per passport"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+45 12 34 56 78"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white border border-neutral-200 p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
          >
            <h2 className="text-xl font-semibold mb-4">Trip Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Select Trip *</label>
                <select
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                  value={selectedId}
                  onChange={(e) => setSelectedId(Number(e.target.value))}
                >
                  {packages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} - {p.priceFrom} USD
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Number of Travelers *</label>
                <select
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Payment Option *</label>
                <select
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value as 'full' | 'deposit')}
                >
                  <option value="full">Pay in Full</option>
                  <option value="deposit">Pay in installments</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">
                  Additional Information (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or questions..."
                  rows={4}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom submit section – same style as contact page */}
          <motion.div
            className="rounded-2xl border border-neutral-200 p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
          >
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-12 rounded-md text-sm font-semibold text-black flex items-center justify-center gap-2 shadow-sm transition
                        focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
              style={{
                backgroundImage: `linear-gradient(90deg, ${goldStart}, ${goldEnd})`,
              }}
            >
              {submitting ? (
                <span className="animate-pulse">Sending…</span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Booking Request
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-neutral-600">
              By submitting this form you agree to our terms and conditions. We will contact you within 24 hours to confirm your booking.
            </p>
          </motion.div>
        </motion.form>

        {/* Right: Summary + Help */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="rounded-2xl bg-white border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Trip</span>
                <span className="font-medium">{selected.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Duration</span>
                <span className="font-medium">
                  {durationNumber(selected.duration) ?? selected.duration}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Price per person</span>
                <span className="text-[color:var(--gold)] font-semibold">
                  {price} USD
                </span>
              </div>
              <div className="border-t border-neutral-200 my-2" />
              <div className="flex justify-between">
                <span className="text-neutral-600">Total ({travelers} {travelers === 1 ? 'person' : 'people'})</span>
                <span className="text-[color:var(--gold)] font-bold">{total} USD</span>
              </div>
              {/* No deposit breakdown shown when "Pay in installments" is selected */}
            </div>
          </div>

          <div className="rounded-2xl bg-[#fff8ea] border border-[#ffe7b8] p-6">
            <h4 className="font-semibold mb-2">Need Help?</h4>
            <p className="text-sm text-neutral-700 mb-3">Have questions? Contact us directly</p>
            <ul className="text-sm space-y-1">
              <li>📞 4525466322</li>
              <li>✉️ mailto:kontakt@rehaab .dk</li>
              <li>💬 WhatsApp Chat</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
}