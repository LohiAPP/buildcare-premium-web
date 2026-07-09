import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reviews = [
  { name: "Rahul Verma", role: "Homeowner, Gachibowli", text: "BuildCare fixed a terrace leak that had troubled us for years. Professional crew, clean work and no leaks through two monsoons.", initials: "RV" },
  { name: "Priya Reddy", role: "Apartment Owner, Kondapur", text: "Detailed inspection, honest quote and warranty in writing. Our bathroom seepage is completely gone.", initials: "PR" },
  { name: "Anil Kumar", role: "Builder, Shamshabad", text: "We use BuildCare across our commercial projects. Consistent quality and on-time delivery every single time.", initials: "AK" },
  { name: "Sana Ali", role: "Villa Owner, Jubilee Hills", text: "Excellent workmanship on our swimming pool waterproofing. Highly recommended.", initials: "SA" },
  { name: "Mahesh Rao", role: "Facility Manager", text: "The basement waterproofing has held perfectly. Team was responsive and thorough.", initials: "MR" },
  { name: "Deepa Nair", role: "Homeowner, Miyapur", text: "Fair pricing and great communication. The terrace looks brand new.", initials: "DN" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Loved by <span className="text-gradient-brand">homeowners</span> and builders.</>}
          description="Real reviews from real clients across Hyderabad — the kind of trust we've built over 10+ years."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="relative rounded-3xl bg-white border border-border p-7 shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-sky/30" />
              <div className="flex items-center gap-1 text-brand-sky">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-brand text-white font-semibold flex items-center justify-center shadow-brand">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-brand">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}