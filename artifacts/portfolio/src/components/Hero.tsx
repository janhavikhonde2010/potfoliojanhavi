import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Mail, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Production Projects", value: 6, suffix: "+" },
  { label: "Lead Records Processed", value: 10, suffix: "K+" },
  { label: "Automated Workflows", value: 15, suffix: "+" },
  { label: "API Cost Reduction", value: 30, suffix: "%" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1600;
          const step = 16;
          const increment = target / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-black text-white tabular-nums">
      {count}
      {suffix}
    </div>
  );
}

const words = ["Building", "AI-powered", "products", "that"];

export default function Hero() {
  const [resumeHovered, setResumeHovered] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)] opacity-50 z-0" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="orb-animate absolute top-[15%] left-[8%] w-[580px] h-[580px] rounded-full bg-purple-700/18 blur-[130px]" />
        <div className="orb-animate-alt absolute top-[25%] right-[6%] w-[480px] h-[480px] rounded-full bg-blue-600/14 blur-[110px]" />
        <div className="orb-animate absolute bottom-[5%] left-[38%] w-[380px] h-[380px] rounded-full bg-cyan-600/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/35 bg-purple-500/10 backdrop-blur-md mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            </span>
            <span className="text-sm font-medium text-purple-200/90 tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Headline — word by word reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 text-white leading-[1.06]">
            <span className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-2">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="text-gradient-primary inline-block"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              actually ship.
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/45 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            I'm{" "}
            <span className="text-white/80 font-medium">Janhavi Khonde</span>{" "}
            — Full Stack AI Engineer building production SaaS systems, AI
            automation workflows, dashboards, APIs, and computer vision
            applications.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {/* View Projects */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#projects")}
              data-testid="btn-hero-projects"
              className="relative group w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-8 h-12 text-base font-semibold text-white overflow-hidden"
              style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)" }}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              <div className="absolute -inset-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(59,130,246,0.3)" }} />
              <span className="relative">View Projects</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Resume — premium animated */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-hero-resume"
              onHoverStart={() => setResumeHovered(true)}
              onHoverEnd={() => setResumeHovered(false)}
              className="relative w-full sm:w-auto group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)" }} />
              <div className="absolute -inset-[1.5px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md"
                style={{ background: "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)" }} />

              <div className="relative flex items-center justify-center gap-2.5 rounded-full px-8 h-12 text-base font-semibold bg-[#0f0f13] border border-white/10 group-hover:border-transparent text-white/75 group-hover:text-white transition-all duration-300 overflow-hidden">
                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12" />

                <AnimatePresence mode="wait">
                  {resumeHovered ? (
                    <motion.span key="view" className="flex items-center gap-2 relative"
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}>
                      <Eye className="w-4 h-4 text-purple-300" />
                      <span className="text-gradient-primary font-bold">View Resume</span>
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    </motion.span>
                  ) : (
                    <motion.span key="dl" className="flex items-center gap-2 relative"
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}>
                      <FileText className="w-4 h-4" />
                      Download Resume
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>

            {/* Contact Me */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              data-testid="btn-hero-contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full px-8 h-12 text-base font-medium bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/18 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Metric cards — animated counters */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative rounded-2xl p-6 flex flex-col items-center justify-center overflow-hidden cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.04) inset",
                }}
                data-testid={`metric-card-${i}`}
              >
                {/* Gradient top line */}
                <div className="absolute top-0 left-0 right-0 h-[1px]"
                  style={{ background: "linear-gradient(90deg, transparent, #a855f7, #06b6d4, transparent)", opacity: 0.5 }} />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at top, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />

                <AnimatedNumber target={metric.value} suffix={metric.suffix} />
                <p className="text-xs text-white/40 text-center font-medium tracking-wide leading-snug mt-2">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
