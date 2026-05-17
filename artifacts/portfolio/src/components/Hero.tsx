import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Mail, Download, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Production Projects", value: "6+" },
  { label: "Lead Records Processed", value: "10K+" },
  { label: "Automated Workflows", value: "15+" },
  { label: "API Cost Reduction", value: "30%" },
];

export default function Hero() {
  const [resumeHovered, setResumeHovered] = useState(false);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)] opacity-60 z-0" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="orb-animate absolute top-[18%] left-[12%] w-[520px] h-[520px] rounded-full bg-purple-600/20 blur-[110px]" />
        <div className="orb-animate-alt absolute top-[30%] right-[10%] w-[420px] h-[420px] rounded-full bg-blue-500/15 blur-[100px]" />
        <div className="orb-animate absolute bottom-[10%] left-[40%] w-[340px] h-[340px] rounded-full bg-cyan-500/12 blur-[90px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/8 backdrop-blur-md mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-sm font-medium text-purple-300 tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-[1.08]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building AI-powered
            <br />
            products that{" "}
            <span className="text-gradient-primary">actually ship.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm Janhavi Khonde — Full Stack AI Engineer building production SaaS
            systems, AI automation workflows, dashboards, APIs, and computer
            vision applications.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* View Projects */}
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white rounded-full px-8 h-12 text-base font-semibold shadow-[0_0_40px_rgba(139,92,246,0.45)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300 group border-0"
              onClick={() => scrollTo("#projects")}
              data-testid="btn-hero-projects"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Resume — animated premium button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="btn-hero-resume"
              onHoverStart={() => setResumeHovered(true)}
              onHoverEnd={() => setResumeHovered(false)}
              className="relative w-full sm:w-auto group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Animated border glow */}
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
              <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md" />

              <div className="relative flex items-center justify-center gap-2.5 rounded-full px-8 h-12 text-base font-semibold bg-[#0a0a0a] border border-white/12 group-hover:border-transparent text-white/80 group-hover:text-white transition-all duration-300 overflow-hidden">
                {/* Shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/8 to-transparent skew-x-12" />

                <AnimatePresence mode="wait">
                  {resumeHovered ? (
                    <motion.span
                      key="view"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Eye className="w-4 h-4 text-purple-300" />
                      <span className="text-gradient-primary font-bold">View Resume</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="download"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                    >
                      <FileText className="w-4 h-4" />
                      Download Resume
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Sparkle on hover */}
                <AnimatePresence>
                  {resumeHovered && (
                    <motion.span
                      key="sparkle"
                      initial={{ opacity: 0, scale: 0, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.a>

            {/* Contact Me */}
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 h-12 text-base bg-white/4 border-white/12 hover:bg-white/8 hover:border-white/20 backdrop-blur-md text-white/80 hover:text-white transition-all duration-300"
              onClick={() => scrollTo("#contact")}
              data-testid="btn-hero-contact"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </Button>
          </motion.div>

          {/* Metric cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="group relative glow-card rounded-2xl p-6 flex flex-col items-center justify-center overflow-hidden cursor-default"
                data-testid={`metric-card-${i}`}
              >
                <div className="card-gradient-top" />
                <h3 className="text-4xl font-bold text-white mb-2 number-glow">
                  {metric.value}
                </h3>
                <p className="text-xs text-white/45 text-center font-medium tracking-wide leading-snug">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
