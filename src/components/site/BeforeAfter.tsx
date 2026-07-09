import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Before & After"
          title={<>See the <span className="text-gradient-brand">transformation</span>.</>}
          description="Drag the slider to compare damaged ceilings and walls before treatment with the flawless finish after our waterproofing work."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          ref={ref}
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          className="relative mt-12 rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-elevated max-w-5xl mx-auto aspect-[3/2]"
        >
          <img src={after} alt="After waterproofing" loading="lazy" width={1200} height={800} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img src={before} alt="Before waterproofing" loading="lazy" width={1200} height={800} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
          </div>
          <div className="absolute top-4 left-4 rounded-full bg-brand text-white text-xs font-semibold px-3 py-1">BEFORE</div>
          <div className="absolute top-4 right-4 rounded-full bg-brand-cyan text-white text-xs font-semibold px-3 py-1">AFTER</div>
          <div className="absolute top-0 bottom-0 w-1 bg-white shadow-brand" style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-brand flex items-center justify-center">
              <GripVertical className="w-5 h-5 text-brand" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}