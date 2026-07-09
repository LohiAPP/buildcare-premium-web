import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/service-terrace.jpg";
import { SectionHeader } from "./SectionHeader";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const points = [
  "ISO-certified waterproofing systems and premium materials",
  "Trained crews with 10+ years of on-site experience",
  "Transparent quotes with warranty on every project",
  "Residential, commercial and industrial expertise",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img src={aboutImg} alt="BuildCare waterproofing crew at work" loading="lazy" width={1200} height={900} className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-right-10 glass-card rounded-2xl p-6 w-64">
            <div className="text-4xl font-display font-bold text-brand">
              <Counter to={10} suffix="+" />
            </div>
            <div className="text-sm text-muted-foreground mt-1">Years of protecting homes across Hyderabad</div>
          </div>
          <div className="absolute -top-6 -left-6 hidden md:block glass-card rounded-2xl p-5 w-52">
            <div className="text-3xl font-display font-bold text-brand-cyan">
              <Counter to={1200} suffix="+" />
            </div>
            <div className="text-xs text-muted-foreground mt-1">Projects delivered</div>
          </div>
        </motion.div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About BuildCare"
            title={<>A decade of keeping <span className="text-gradient-brand">Hyderabad dry</span>.</>}
            description="BuildCare Waterproofing Solutions is a Hyderabad-based specialist protecting homes, apartments and commercial properties from leakage, dampness and structural water damage. We combine premium materials with tested application methods to deliver waterproofing that lasts."
          />
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" />
                <span className="text-foreground/80">{p}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: 500, s: "+", l: "Happy clients" },
              { n: 10, s: "+", l: "Years experience" },
              { n: 15, s: "+", l: "Service categories" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border p-5 bg-white/60">
                <div className="text-3xl font-display font-bold text-brand">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}