import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";

export function FloatingUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-sky origin-left z-[60]"
      />

      {/* Floating actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/919666802020"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-brand flex items-center justify-center hover:scale-110 transition-transform animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+919666802020"
          aria-label="Call"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-sky text-white shadow-brand flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </a>
        {show && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-brand text-white shadow-brand flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}