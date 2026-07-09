import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wider uppercase ${
          invert ? "bg-white/10 text-brand-sky" : "bg-brand/5 text-brand"
        }`}
      >
        <span className="w-1 h-1 rounded-full bg-current" />
        {eyebrow}
      </div>
      <h2
        className={`mt-4 text-3xl md:text-5xl font-bold leading-tight ${
          invert ? "text-white" : "text-brand"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${invert ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}