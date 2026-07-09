import { motion } from "framer-motion";
import { Search, ClipboardList, Hammer, Paintbrush, TestTube2, PartyPopper } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: Search, title: "Inspection", desc: "Free on-site visit to locate every leak and damp zone." },
  { icon: ClipboardList, title: "Problem Analysis", desc: "Root-cause report and tailored treatment plan." },
  { icon: Hammer, title: "Surface Preparation", desc: "Cleaning, crack cutting and primer application." },
  { icon: Paintbrush, title: "Application", desc: "Multi-layer waterproof membrane and coatings." },
  { icon: TestTube2, title: "Quality Testing", desc: "Ponding and pressure tests to verify integrity." },
  { icon: PartyPopper, title: "Completion", desc: "Handover with warranty and maintenance guidance." },
];

export function Process() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Process"
          title={<>A proven <span className="text-gradient-brand">six-step</span> waterproofing method.</>}
          description="A transparent, engineered workflow that delivers consistent, long-lasting results on every project."
        />

        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-cyan/40 to-transparent" />
          <div className="space-y-10 md:space-y-16">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className={`md:pr-10 ${left ? "" : "md:pl-10 md:pr-0"} [direction:ltr]`}>
                    <div className="glass-card rounded-2xl p-6 md:p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand">
                          <s.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold tracking-widest text-brand-cyan uppercase">
                            Step {i + 1}
                          </div>
                          <h3 className="text-xl font-display font-semibold text-brand">{s.title}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center [direction:ltr]">
                    <div className="w-4 h-4 rounded-full bg-gradient-brand shadow-glow ring-8 ring-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}