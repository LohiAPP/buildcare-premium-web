import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import terrace from "@/assets/service-terrace.jpg";
import pool from "@/assets/service-pool.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import basement from "@/assets/service-basement.jpg";
import wall from "@/assets/service-wall.jpg";

const projects = [
  { img: p1, title: "Residential Tower Rooftops", cat: "Residential", tall: true },
  { img: p2, title: "Commercial Facade Sealing", cat: "Commercial" },
  { img: p3, title: "Villa Terrace Protection", cat: "Residential" },
  { img: terrace, title: "Apartment Terrace System", cat: "Residential" },
  { img: pool, title: "Resort Pool Lining", cat: "Commercial", tall: true },
  { img: bathroom, title: "Bathroom Membrane", cat: "Residential" },
  { img: basement, title: "Underground Parking", cat: "Industrial" },
  { img: wall, title: "Office Exterior Wall", cat: "Commercial" },
];

const cats = ["All", "Residential", "Commercial", "Industrial"];

export function Projects() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Projects"
          title={<>Recent <span className="text-gradient-brand">work</span> across Hyderabad.</>}
          description="A snapshot of residential, commercial and industrial waterproofing projects completed by our team."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                cat === c
                  ? "bg-gradient-brand text-white shadow-brand"
                  : "bg-white text-brand border border-border hover:border-brand-cyan"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.figure
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="mb-5 break-inside-avoid group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-brand transition-shadow"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={p.tall ? 1400 : 900}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-xs font-semibold text-brand-sky tracking-widest uppercase">{p.cat}</div>
                  <div className="text-white font-display font-semibold text-lg">{p.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}