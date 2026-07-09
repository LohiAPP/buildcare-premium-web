import { Droplets, Globe, Camera, Briefcase, Play, Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const services = [
    "Terrace Waterproofing",
    "Bathroom Waterproofing",
    "Basement Waterproofing",
    "Swimming Pool",
    "Crack Filling",
    "Commercial Projects",
  ];
  const links = [
    { l: "Home", h: "#home" },
    { l: "About", h: "#about" },
    { l: "Services", h: "#services" },
    { l: "Projects", h: "#projects" },
    { l: "Testimonials", h: "#testimonials" },
    { l: "Contact", h: "#contact" },
  ];
  return (
    <footer className="relative bg-brand text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-cyan/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-cyan to-brand-sky flex items-center justify-center shadow-glow">
              <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">BuildCare</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-brand-sky font-medium">Waterproofing</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Hyderabad's trusted waterproofing specialists. Premium materials, expert crews, warranty-backed work.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { I: Globe, l: "Facebook" },
              { I: Camera, l: "Instagram" },
              { I: Briefcase, l: "LinkedIn" },
              { I: Play, l: "YouTube" },
            ].map(({ I, l }) => (
              <a key={l} href="#" aria-label={l} className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-cyan flex items-center justify-center transition-colors">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.l}><a href={l.h} className="text-white/70 hover:text-brand-sky transition-colors">{l.l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}><a href="#services" className="text-white/70 hover:text-brand-sky transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-white/80">
              <MapPin className="w-4 h-4 mt-0.5 text-brand-sky shrink-0" />
              Airport Colony, Shamshabad,<br/>Hyderabad, TS - 500005
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <Phone className="w-4 h-4 text-brand-sky" />
              <a href="tel:+919666802020" className="hover:text-brand-sky">+91 96668 02020</a>
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <Mail className="w-4 h-4 text-brand-sky" />
              <a href="mailto:info@buildcarewaterproofing.com" className="hover:text-brand-sky">info@buildcarewaterproofing.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mt-14 pt-6 border-t border-white/10 mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <div>© {year} BuildCare Waterproofing Solutions. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-sky">Privacy Policy</a>
          <a href="#" className="hover:text-brand-sky">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}