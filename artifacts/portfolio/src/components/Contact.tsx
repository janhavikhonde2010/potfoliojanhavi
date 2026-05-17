import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "janhavikhonde20@gmail.com",
    href: "mailto:janhavikhonde20@gmail.com",
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.2)",
    lineColor: "#a855f7",
  },
  {
    icon: <Linkedin size={24} />,
    title: "LinkedIn",
    value: "janhavi-khonde",
    href: "https://linkedin.com/in/janhavi-khonde-b7410029b",
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.2)",
    lineColor: "#3b82f6",
  },
  {
    icon: <Github size={24} />,
    title: "GitHub",
    value: "github.com/janhavikhonde",
    href: "https://github.com/janhavikhonde",
    accentColor: "rgba(255,255,255,0.7)",
    glowColor: "rgba(255,255,255,0.08)",
    lineColor: "rgba(255,255,255,0.4)",
  },
  {
    icon: <Globe size={24} />,
    title: "Portfolio",
    value: "janhavikhonde.netlify.app",
    href: "https://janhavikhonde.netlify.app",
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.2)",
    lineColor: "#06b6d4",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Multi-layer ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-purple-700/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto inline-flex mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Let's Connect
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-5 pb-1 text-gradient-primary">
            Get In Touch
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto leading-relaxed">
            Ready to build something extraordinary? Currently open for new
            opportunities and collaborations.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contacts.map((c, idx) => (
            <motion.a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.028)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${c.accentColor}25`,
                boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 16px 60px rgba(0,0,0,0.55), 0 0 60px ${c.glowColor}`;
                el.style.borderColor = `${c.accentColor}50`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.45)";
                el.style.borderColor = `${c.accentColor}25`;
              }}
              data-testid={`contact-card-${c.title.toLowerCase()}`}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${c.lineColor}, transparent)` }} />

              {/* Top-right external link icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                style={{ color: c.accentColor }}>
                <ArrowUpRight size={14} />
              </div>

              {/* Inner glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top, ${c.glowColor} 0%, transparent 65%)` }} />

              <div className="relative mb-5 transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.28)" }}
                ref={(el) => {
                  if (!el) return;
                  el.closest("a")?.addEventListener("mouseenter", () => { el.style.color = c.accentColor; });
                  el.closest("a")?.addEventListener("mouseleave", () => { el.style.color = "rgba(255,255,255,0.28)"; });
                }}>
                {c.icon}
              </div>
              <h3 className="relative text-xs font-bold text-white mb-2 tracking-widest uppercase">
                {c.title}
              </h3>
              <p className="relative text-xs text-white/32 group-hover:text-white/65 transition-colors duration-300 truncate w-full">
                {c.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
