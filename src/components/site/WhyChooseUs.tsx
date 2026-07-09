import { motion } from "framer-motion";
import { Award, Layers, Cpu, IndianRupee, ShieldCheck, Zap, Smile, Search } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Award, title: "Experienced Professionals", desc: "10+ years of specialised waterproofing crews." },
  { icon: Layers, title: "Premium Materials", desc: "Only branded, ISO-grade waterproofing systems." },
  { icon: Cpu, title: "Latest Technology", desc: "Modern injection, membrane and coating tech." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent quotes with no hidden charges." },
  { icon: ShieldCheck, title: "Warranty", desc: "Written warranty on every completed project." },
  { icon: Zap, title: "Quick Service", desc: "On-site inspection and rapid turnaround." },
  { icon: Smile, title: "Customer Satisfaction", desc: "500+ happy clients across Hyderabad." },
  { icon: Search, title: "Free Inspection", desc: "Detailed leak assessment at no cost." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-brand text-white overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-40">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-cyan/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-brand-sky/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          invert
          eyebrow="Why Choose Us"
          title={<>Built on <span className="text-brand-sky">trust</span>, engineered to last.</>}
          description="Every project delivered by BuildCare comes with expert workmanship, warranty coverage and premium materials — because your property deserves permanent protection."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="group rounded-2xl glass-dark p-6 hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-sky flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <it.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{it.title}</h3>
              <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}