import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import terrace from "@/assets/service-terrace.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import basement from "@/assets/service-basement.jpg";
import wall from "@/assets/service-wall.jpg";
import pool from "@/assets/service-pool.jpg";
import crack from "@/assets/service-crack.jpg";

const services = [
  { title: "Terrace Waterproofing", desc: "Long-lasting membrane and coating systems for rooftops.", img: terrace },
  { title: "Roof Waterproofing", desc: "Complete protection against monsoon leakage and heat.", img: terrace },
  { title: "Bathroom Waterproofing", desc: "Prevent seepage into walls and adjacent rooms.", img: bathroom },
  { title: "Basement Waterproofing", desc: "Structural sealing to keep below-grade areas dry.", img: basement },
  { title: "Water Tank Waterproofing", desc: "Non-toxic linings safe for potable water storage.", img: pool },
  { title: "Exterior Wall Waterproofing", desc: "Defends facades from rain, algae and dampness.", img: wall },
  { title: "Crack Filling", desc: "Structural crack repair with elastomeric sealants.", img: crack },
  { title: "Injection Grouting", desc: "Pressure grouting to seal active leaks and voids.", img: crack },
  { title: "Swimming Pool Waterproofing", desc: "Premium linings for residential and resort pools.", img: pool },
  { title: "Expansion Joint Treatment", desc: "Flexible sealing for movement joints in structures.", img: wall },
  { title: "Balcony Waterproofing", desc: "Slope correction and coating for open balconies.", img: terrace },
  { title: "Commercial Waterproofing", desc: "Turnkey solutions for offices, malls and industry.", img: basement },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Services"
          title={<>Complete waterproofing, <span className="text-gradient-brand">every surface</span>.</>}
          description="From terraces and basements to swimming pools and commercial roofs — we specialise in the full range of waterproofing systems used in modern construction."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-brand transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-4 left-4 text-white/90 text-xs font-semibold tracking-widest uppercase">
                  0{(i + 1).toString().padStart(2, "0")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold text-brand">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:gap-3 transition-all"
                >
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}