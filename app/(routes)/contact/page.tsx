"use client";

import { FormEvent, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { useReducedMotionPreference } from "@/lib/useReducedMotion";

const SLOTS = [
  "Golden hour",
  "Blue hour",
  "Night shoot",
  "Editorial studio"
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const honeypotRef = useRef<HTMLInputElement | null>(null);
  const reducedMotion = useReducedMotionPreference();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypotRef.current?.value) {
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSuccess(true);
    if (!reducedMotion) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.2 } });
    }
    (event.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="mx-auto max-w-3xl space-y-12 px-6 pb-32 pt-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Contact</p>
        <h1 className="text-4xl font-semibold text-white">Book a shoot or collaboration</h1>
        <p className="text-white/70">
          Reduced-motion friendly booking flow with animated availability chips, honeypot anti-spam, and celebratory confetti on success.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="glass-panel space-y-6 rounded-3xl border border-white/10 p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Name
            <input required className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" name="name" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-white/70">
            Email
            <input required type="email" className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3" name="email" />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Project details
          <textarea required className="h-32 rounded-2xl border border-white/10 bg-black/40 px-4 py-3" name="details" />
        </label>
        <div className="hidden">
          <label>
            Leave this field blank
            <input ref={honeypotRef} name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Preferred slot</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {SLOTS.map((slot) => (
              <label key={slot} className="relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-4 transition hover:border-magenta/60">
                <input type="radio" className="peer hidden" name="slot" value={slot} required />
                <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-magenta/60 to-cyan/60 opacity-0 transition peer-checked:translate-x-0 peer-checked:opacity-100" />
                <span className="relative text-sm text-white/70 peer-checked:text-white">{slot}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="liquid-button flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send request"}
        </button>
        {success ? <p className="text-center text-sm text-cyan">Thanks! I will reply within 48 hours.</p> : null}
      </form>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Quick contact</h2>
          <p className="mt-3">Whatsapp · +1 (213) 555-0114</p>
          <p className="mt-1">Instagram · @neonatlas</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Booking notes</h2>
          <p className="mt-3">Travel globally · Sliding scale for editorial passion projects · Reduced motion & audio ready sets.</p>
        </div>
      </section>
    </div>
  );
}
