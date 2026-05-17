import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: "MERN Stack Expert",
    desc: "Building responsive, scalable web applications with clean code architectures and robust APIs.",
    color: "purple",
    border: "rgba(168,85,247,0.3)",
    glow: "rgba(168,85,247,0.15)",
    iconBg: "rgba(168,85,247,0.12)",
    iconBorder: "rgba(168,85,247,0.25)",
    iconColor: "#a855f7",
    lineFrom: "from-purple-500",
  },
  {
    icon: <Cpu size={20} />,
    title: "AI Automation",
    desc: "Designing intelligent workflows using LLMs and automation platforms to eliminate manual processes.",
    color: "cyan",
    border: "rgba(6,182,212,0.3)",
    glow: "rgba(6,182,212,0.12)",
    iconBg: "rgba(6,182,212,0.12)",
    iconBorder: "rgba(6,182,212,0.25)",
    iconColor: "#06b6d4",
    lineFrom: "from-cyan-500",
  },
];

const stats = [
  { icon: <Zap size={14} />, label: "Production deployments", val: "6+" },
  { icon: <Globe size={14} />, label: "Client-facing apps", val: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Right ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/7 blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-[2px] rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]"
            style={{ background: "linear-gradient(90deg,#a855f7,#3b82f6,#06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-14 items-start">
          {/* Bio */}
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-white/55 leading-relaxed">
              I am a{" "}
              <span className="text-white font-semibold">
                Full Stack Developer & AI Automation Engineer
              </span>{" "}
              with hands-on experience building production-grade SaaS CRM
              systems, analytics dashboards, AI-powered business tools, and
              workflow automation platforms.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              I specialize in combining modern web technologies (React.js,
              Node.js, MongoDB) with intelligent automation (OpenAI, n8n,
              Make.com) to create scalable SaaS products that solve real
              business problems.
            </p>
            <p className="text-lg text-white/50 leading-relaxed">
              My expertise spans the entire product lifecycle — from
              architectural design and API integration to deployment and
              optimization, ensuring delivery of high-performing, client-facing
              applications.
            </p>

            {/* Mini stats row */}
            <div className="flex gap-6 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-purple-400">{s.icon}</span>
                  <span className="text-xl font-black text-white">{s.val}</span>
                  <span className="text-xs text-white/35 leading-tight max-w-[80px]">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl p-7 relative overflow-hidden group cursor-default"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${h.border}`,
                  boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 60px ${h.glow}`,
                }}
              >
                {/* Top shimmer line */}
                <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${h.lineFrom} to-transparent opacity-80`} />
                {/* Inner glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${h.glow} 0%, transparent 60%)` }} />

                <div className="relative flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: h.iconBg, border: `1px solid ${h.iconBorder}`, color: h.iconColor,
                      boxShadow: `0 0 20px ${h.glow}` }}>
                    {h.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{h.title}</h3>
                </div>
                <p className="relative text-white/42 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
