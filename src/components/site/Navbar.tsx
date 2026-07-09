import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand/95 backdrop-blur-xl shadow-brand py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-cyan rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow">
              <Droplets className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-white text-lg">BuildCare</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-brand-sky font-medium">
              Waterproofing
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm font-medium text-white/85 hover:text-white rounded-md transition-colors relative group"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand-sky scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <a
          href="tel:+919666802020"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-brand px-5 py-2.5 text-sm font-semibold hover:bg-brand-sky hover:text-white transition-colors shadow-lg"
        >
          <Phone className="w-4 h-4" />
          +91 96668 02020
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mx-6 mt-3 rounded-2xl bg-brand/95 backdrop-blur-xl p-4 shadow-brand"
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-white/90 text-sm font-medium hover:bg-white/10 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919666802020"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand px-4 py-2.5 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}