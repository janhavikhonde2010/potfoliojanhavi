import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={22} />,
    title: "Email",
    value: "janhavikhonde20@gmail.com",
    href: "mailto:janhavikhonde20@gmail.com",
    accent: "group-hover:text-purple-400",
    glow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]",
    topLine: "via-purple-500",
  },
  {
    icon: <Linkedin size={22} />,
    title: "LinkedIn",
    value: "janhavi-khonde",
    href: "https://linkedin.com/in/janhavi-khonde-b7410029b",
    accent: "group-hover:text-blue-400",
    glow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]",
    topLine: "via-blue-500",
  },
  {
    icon: <Github size={22} />,
    title: "GitHub",
    value: "github.com/janhavikhonde",
    href: "https://github.com/janhavikhonde",
    accent: "group-hover:text-white",
    glow: "group-hover:shadow-[0_0_50px_rgba(255,255,255,0.08)]",
    topLine: "via-white/50",
  },
  {
    icon: <Globe size={22} />,
    title: "Portfolio",
    value: "janhavikhonde.netlify.app",
    href: "https://janhavikhonde.netlify.app",
    accent: "group-hover:text-cyan-400",
    glow: "group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]",
    topLine: "via-cyan-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden section-dark">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-blue-500/8 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-5 pb-1">
            Get In Touch
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto leading-relaxed">
            Ready to build something extraordinary? I'm currently open for new
            opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {contacts.map((contact, idx) => (
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`group glow-card rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden glass-card-hover ${contact.glow}`}
              data-testid={`contact-card-${contact.title.toLowerCase()}`}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${contact.topLine} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div
                className={`mb-5 text-white/30 transition-all duration-300 ${contact.accent}`}
              >
                {contact.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-2 tracking-wide uppercase">
                {contact.title}
              </h3>
              <p className="text-xs text-white/35 group-hover:text-white/70 transition-colors duration-300 truncate w-full text-center">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
