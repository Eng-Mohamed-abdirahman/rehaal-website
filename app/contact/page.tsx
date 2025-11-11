"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const goldStart = "#d58700";
const goldEnd = "#e7c15d";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 transform-gpu ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

const FormSchema = z.object({
  firstName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please enter at least 10 characters.").max(180, "Max 180 characters."),
});
type FormValues = z.infer<typeof FormSchema>;

export default function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { firstName: "", email: "", message: "" },
  });
  const [submitting, setSubmitting] = useState(false);
  const msg = form.watch("message") || "";

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      toast.success("Message sent.");
    } catch {
      toast.error("Failed to send.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.main
      className="bg-neutral-50 min-h-screen"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Toaster position="top-center" />
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-4">
        <Reveal>
          <div className="flex items-center gap-2 justify-center text-xs md:text-sm text-amber-800 font-medium">
            <Mail className="h-4 w-4" /> We are here for you.
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-5 text-center text-4xl md:text-5xl font-heading font-bold tracking-tight">
            Contact us
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-4 text-center text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Do you have any questions about our Umrah packages? We are here to help you plan your spiritual journey.
          </p>
        </Reveal>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          <Reveal delay={120}>
            <Card className="border border-amber-200/40 shadow-sm bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-semibold">Contact information</CardTitle>
                <CardDescription className="text-neutral-600">
                  Reach us via email, phone or WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-7">
                  <InfoItem
                    icon={<Mail className="h-5 w-5" />}
                    label="E‑mail"
                    value="kontakt@rehaab .dk"
                    href="mailto:kontakt@rehaab .dk"
                  />
                  <InfoItem
                    icon={<Phone className="h-5 w-5" />}
                    label="Telephone"
                    value="4525466322"
                    href="https://api.whatsapp.com/send/?phone=4525466322&text&type=phone_number&app_absent=0"
                  />
                  <InfoItem
                    icon={<MapPin className="h-5 w-5" />}
                    label="Office"
                    value="Copenhagen, Denmark"
                  />
                </div>

                <div
                  className="group rounded-2xl border border-neutral-200 bg-white px-6 py-5 space-y-3 transition-transform transition-shadow duration-300 ease-out hover:scale-[1.03] hover:shadow-lg cursor-pointer will-change-transform"
                >
                  <div className="flex items-center gap-2 text-amber-800 font-medium">
                    <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> Do you prefer WhatsApp?
                  </div>
                  <p className="text-sm text-neutral-600">
                    Get instant answers to your questions on WhatsApp
                  </p>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=4525466322&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black shadow-sm transition
                      focus:outline-none focus:ring-2 focus:ring-amber-300 group-hover:shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${goldStart}, ${goldEnd})`,
                    }}
                  >
                    Chat on WhatsApp
                  </Link>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-6">
                  <div className="flex items-center gap-2 font-medium text-neutral-800">
                    <Clock className="h-4 w-4 text-amber-700" /> Opening hours
                  </div>
                  <div className="mt-4 space-y-1 text-sm">
                    <HourRow day="Monday - Friday" hours="9:00 - 18:00" />
                    <HourRow day="Saturday" hours="10:00 - 16:00" />
                    <HourRow day="Sunday" hours="Closed" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={180}>
            <Card className="border border-amber-200/40 shadow-sm bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-semibold">Send us a message</CardTitle>
                <CardDescription className="text-neutral-600">
                  We usually respond within 1–2 business days.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="h-11 text-sm md:text-base focus-visible:ring-amber-300 focus-visible:border-amber-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="din.email@eksempel.com"
                              {...field}
                              className="h-11 text-sm md:text-base focus-visible:ring-amber-300 focus-visible:border-amber-600"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea
                                rows={8}
                                maxLength={180}
                                placeholder="Tell us how we can help you..."
                                {...field}
                                className="text-sm md:text-base focus-visible:ring-amber-300 focus-visible:border-amber-600 pr-16"
                              />
                              <div className="absolute bottom-2 right-3 text-xs text-neutral-500">
                                {msg.length} / 180
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                          Send message
                        </>
                      )}
                    </button>

                    <div
                      className="group rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5 text-sm transition-transform transition-shadow duration-300 ease-out hover:scale-[1.03] hover:shadow-lg cursor-pointer will-change-transform"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <MapPin className="h-4 w-4 text-amber-700 transition-transform duration-300 group-hover:scale-110" />
                        Visit our office
                      </div>
                      <p className="mt-1 text-neutral-600 leading-relaxed">
                        Copenhagen, Denmark – Book an appointment for a personal consultation
                      </p>
                    </div>
                  </form>
                </FormProvider>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </motion.main>
  );
}

/* Helpers */

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="h-10 w-10 rounded-full grid place-items-center text-white shrink-0"
        style={{ backgroundImage: "linear-gradient(135deg, #d58700, #e7c15d)" }}
      >
        {icon}
      </span>
      <div className="pt-0.5">
        <div className="font-medium text-sm md:text-base">{label}</div>
        {href ? (
          <Link href={href} className="text-neutral-700 hover:underline text-sm mt-0.5">
            {value}
          </Link>
        ) : (
          <div className="text-neutral-700 text-sm mt-0.5">{value}</div>
        )}
      </div>
    </div>
  );
}

function HourRow({ day, hours }: { day: string; hours: string }) {
  return (
    <div className="flex justify-between text-neutral-700">
      <span>{day}</span>
      <span className="font-medium text-neutral-800">{hours}</span>
    </div>
  );
}