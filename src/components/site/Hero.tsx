import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Phone, ShieldCheck, Clock, Wrench, Users } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const badges = [
  { icon: Clock, label: "10+ Years Experience" },
  { icon: ShieldCheck, label: "Warranty Available" },
  { icon: Wrench, label: "Free Site Inspection" },
  { icon: Users, label: "Professional Team" },
];

const words = ["Waterproofing", "Protection", "Restoration", "Maintenance"];

export function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, 50);
      }
    } else {
      if (currentText === currentWord) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section id="home" className="relative z-0 min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Waterproofed luxury terrace at dusk"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/60 to-brand/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(41,182,246,0.35),transparent_60%)]" />
      </div>

      {/* Animated water drips */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-0 w-px h-16 bg-gradient-to-b from-transparent via-brand-sky/60 to-brand-sky/0 animate-drip"
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              animationDuration: `${6 + (i % 5) * 2}s`,
              animationDelay: `${-i * 0.9}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-brand-sky mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse" />
          Hyderabad's #1 Rated Waterproofing Company
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
        >
          Permanent{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-brand-sky to-white bg-clip-text text-transparent inline-block">
              {currentText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[3px] h-[0.9em] bg-brand-sky ml-1 align-baseline translate-y-[0.1em]"
            />
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-2 left-0 w-full origin-left"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path d="M2 6 Q75 -2 150 4 T298 4" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke"/>
              <defs><linearGradient id="g"><stop stopColor="#29B6F6"/><stop offset="1" stopColor="#0088FF"/></linearGradient></defs>
            </motion.svg>
          </span>{" "}
          Solutions in Hyderabad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed"
        >
          Protect your property from leakage, seepage, dampness, cracks, and water damage
          with expert waterproofing services backed by warranty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-sky text-white px-7 py-4 font-semibold shadow-glow hover:shadow-brand hover:scale-105 transition-all"
          >
            Get Free Inspection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+919666802020"
            className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-7 py-4 font-semibold hover:bg-white/15 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="glass-dark rounded-2xl px-4 py-3.5 flex items-center gap-3 text-white/90"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-sky/20 flex items-center justify-center shrink-0">
                <b.icon className="w-4.5 h-4.5 text-brand-sky" />
              </div>
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest flex flex-col items-center gap-2">
        <span>SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}