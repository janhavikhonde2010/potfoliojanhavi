import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "KodeKraft — Multi-Industry AI SaaS CRM",
    description:
      "Built independently — SaaS CRM for Real Estate, Hotels, Clinics, Travel, and Coaching businesses. Includes AI assistant powered by OpenAI APIs, analytics engine processing 10,000+ lead records, drag-and-drop lead pipeline, and auto lead capture from Facebook Ads, IndiaMART, 99acres, and MagicBricks.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI APIs"],
    badge: "Featured",
    link: "#",
    accent: "from-purple-500 to-blue-500",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.18)]",
    topLine: "via-purple-500",
  },
  {
    title: "Lead Analytics Dashboard",
    description:
      "Real-time dashboard handling 10K+ lead records with dynamic filtering, data visualisation, and API-driven pipelines.",
    tech: ["React.js", "Node.js", "REST APIs"],
    link: "https://client-report.thewiseparrot.com",
    accent: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-[0_0_60px_rgba(59,130,246,0.18)]",
    topLine: "via-blue-500",
  },
  {
    title: "Clarity Hub — WhatsApp Analytics App",
    description:
      "WhatsApp Business analytics platform tracking campaign engagement, message performance, and customer interaction metrics using automation workflows and WhatsApp APIs.",
    tech: ["Automation", "APIs"],
    link: "#",
    accent: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-[0_0_60px_rgba(6,182,212,0.18)]",
    topLine: "via-cyan-500",
  },
  {
    title: "Tactical Vision AI",
    description:
      "AI-powered real-time human detection and monitoring system using Python, OpenCV, and MobileNet SSD for live camera-based tracking workflows.",
    tech: ["Python", "OpenCV", "MobileNet SSD"],
    link: "#",
    accent: "from-purple-500 to-cyan-500",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.18)]",
    topLine: "via-purple-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative section-dark">
      {/* Ambient orbs */}
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/7 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            What I've Built
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-primary rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group glow-card glass-card-hover rounded-2xl relative overflow-hidden flex flex-col h-full ${project.glow} cursor-default`}
              data-testid={`project-card-${idx}`}
            >
              {/* Gradient top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${project.topLine} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Subtle inner glow top */}
              <div
                className={`absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500`}
              />

              <div className="p-8 flex-1 flex flex-col">
                {/* Header row */}
                <div className="flex justify-between items-start mb-5">
                  <div className="flex-1 pr-4">
                    {project.badge && (
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold tracking-wider text-purple-300 bg-purple-500/15 rounded-full mb-3 border border-purple-500/25 uppercase">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient-primary transition-all duration-300 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/25 hover:text-white transition-colors duration-200 p-2 hover:bg-white/8 rounded-lg flex-shrink-0"
                    aria-label="View Project"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-white/45 mb-8 flex-1 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium text-white/40 bg-white/4 px-3 py-1 rounded-full border border-white/7 hover:text-white/70 hover:border-white/15 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
