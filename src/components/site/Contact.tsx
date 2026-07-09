import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Get your <span className="text-gradient-brand">free inspection</span> today.</>}
          description="Tell us about your waterproofing needs. Our team will schedule a free on-site visit anywhere in Hyderabad."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl bg-gradient-brand text-white p-8 shadow-brand relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-sky/30 blur-3xl" />
            <h3 className="relative font-display text-2xl font-bold">Talk to our team</h3>
            <p className="relative mt-2 text-white/80 text-sm">We reply within a few hours, 7 days a week.</p>

            <ul className="relative mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-sky">Address</div>
                  <div className="text-sm mt-0.5">Airport Colony, Shamshabad,<br/>Hyderabad, Telangana - 500005</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-sky">Phone</div>
                  <a href="tel:+919666802020" className="text-sm mt-0.5 block hover:text-brand-sky">+91 96668 02020</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-sky">Email</div>
                  <a href="mailto:info@buildcarewaterproofing.com" className="text-sm mt-0.5 block hover:text-brand-sky">info@buildcarewaterproofing.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-sky">Working Hours</div>
                  <div className="text-sm mt-0.5">Mon – Sun · 8:00 AM – 8:00 PM</div>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/919666802020"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white text-brand px-5 py-3 text-sm font-semibold hover:bg-brand-sky hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl bg-white border border-border p-8 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" placeholder="John Doe" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Service" name="service" placeholder="e.g. Terrace Waterproofing" />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-brand">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about the issue and location..."
                className="mt-1.5 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3.5 font-semibold shadow-brand hover:shadow-glow hover:scale-[1.02] transition-all"
            >
              {sent ? "Thank you! We'll be in touch" : "Request Free Inspection"}
              <Send className="w-4 h-4" />
            </button>

            <div className="mt-8 rounded-2xl overflow-hidden border border-border">
              <iframe
                title="BuildCare Waterproofing Location"
                src="https://www.google.com/maps?q=Airport+Colony+Shamshabad+Hyderabad&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string; }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-brand">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition"
      />
    </div>
  );
}