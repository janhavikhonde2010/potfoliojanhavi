import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import kodeKraftVideo from "@assets/KodeKraft_(1)_1779015320498.mp4";
import visionVideo from "@assets/came_1779015359696.mp4";
import clarityHubImg from "@assets/screenshot-1779015830984.png";
import rajivGandhiImg from "@assets/screenshot-1779015845091.png";

type MediaItem =
  | { type: "video"; src: string }
  | { type: "image"; src: string }
  | null;

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  badge?: string;
  media: MediaItem;
  accent: string;
  glow: string;
  topLine: string;
}

const projects: Project[] = [
  {
    title: "KodeKraft — Multi-Industry AI SaaS CRM",
    description:
      "Built independently — SaaS CRM for Real Estate, Hotels, Clinics, Travel, and Coaching businesses. Includes AI assistant powered by OpenAI APIs, analytics engine processing 10,000+ lead records, drag-and-drop lead pipeline, and auto lead capture from Facebook Ads, IndiaMART, 99acres, and MagicBricks.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI APIs"],
    badge: "Featured",
    link: "#",
    media: { type: "video", src: kodeKraftVideo },
    accent: "from-purple-500 to-blue-500",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    topLine: "via-purple-500",
  },
  {
    title: "Tactical Vision AI",
    description:
      "AI-powered real-time human detection and monitoring system using Python, OpenCV, and MobileNet SSD for live camera-based tracking workflows.",
    tech: ["Python", "OpenCV", "MobileNet SSD"],
    link: "#",
    media: { type: "video", src: visionVideo },
    accent: "from-purple-500 to-cyan-500",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    topLine: "via-purple-400",
  },
  {
    title: "Clarity Hub — WhatsApp Analytics App",
    description:
      "WhatsApp Business analytics platform tracking campaign engagement, message performance, and customer interaction metrics using automation workflows and WhatsApp APIs.",
    tech: ["Automation", "WhatsApp APIs"],
    link: "https://clarityhub.thewiseparrot.com/",
    media: { type: "image", src: clarityHubImg },
    accent: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    topLine: "via-cyan-500",
  },
  {
    title: "Lead Analytics Dashboard",
    description:
      "Real-time production dashboard handling 10K+ lead records with dynamic filtering, data visualisation, and API-driven search pipelines.",
    tech: ["React.js", "Node.js", "REST APIs"],
    link: "https://client-report.thewiseparrot.com",
    media: null,
    accent: "from-blue-500 to-cyan-500",
    glow: "hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]",
    topLine: "via-blue-500",
  },
  {
    title: "AI Token Analyzer",
    description:
      "AI token monitoring system built using OpenAI APIs to track real-time API consumption across all active integrations — reducing wasted spend by 30%.",
    tech: ["OpenAI APIs", "Node.js", "React.js"],
    link: "https://inteligencetoken.thewiseparrot.com/",
    media: null,
    accent: "from-purple-500 to-blue-500",
    glow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.2)]",
    topLine: "via-purple-500",
  },
  {
    title: "The Wise Parrot — Company Website",
    description:
      "Built and deployed the company's primary lead generation and client acquisition platform — a fully responsive, production-grade marketing website.",
    tech: ["React.js", "Node.js", "CSS3"],
    link: "https://thewiseparrot.com/",
    media: null,
    accent: "from-blue-500 to-purple-500",
    glow: "hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]",
    topLine: "via-blue-400",
  },
  {
    title: "Rajiv Gandhi Academy — Corporate Website",
    description:
      "Fully responsive institutional website for Rajiv Gandhi Academy of e-Learning with structured content pages, course information, and a professional layout.",
    tech: ["React.js", "HTML5", "CSS3"],
    link: "https://rgael.org/",
    media: { type: "image", src: rajivGandhiImg },
    accent: "from-cyan-500 to-blue-500",
    glow: "hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]",
    topLine: "via-cyan-400",
  },
];

function MediaPreview({ media, title }: { media: MediaItem; title: string }) {
  if (!media) return null;

  if (media.type === "video") {
    return (
      <div className="relative w-full overflow-hidden rounded-xl bg-black/40 border border-white/6 mb-6 group/video">
        <video
          src={media.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-44 object-cover opacity-90 group-hover/video:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/60 text-xs">
          <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center">
            <Play size={8} fill="currentColor" />
          </div>
          Live Demo
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/6 mb-6">
      <img
        src={media.src}
        alt={`${title} preview`}
        className="w-full h-44 object-cover object-top opacity-85 hover:opacity-100 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative section-dark">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className={`group glow-card glass-card-hover rounded-2xl relative overflow-hidden flex flex-col h-full ${project.glow} cursor-default`}
              data-testid={`project-card-${idx}`}
            >
              {/* Gradient top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${project.topLine} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="p-6 flex-1 flex flex-col">
                {/* Media preview */}
                <MediaPreview media={project.media} title={project.title} />

                {/* Header row */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1 pr-3">
                    {project.badge && (
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold tracking-wider text-purple-300 bg-purple-500/15 rounded-full mb-2 border border-purple-500/25 uppercase">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-base font-bold text-white group-hover:text-gradient-primary transition-all duration-300 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/25 hover:text-white transition-colors duration-200 p-1.5 hover:bg-white/8 rounded-lg flex-shrink-0"
                      aria-label={`View ${project.title}`}
                      data-testid={`project-link-${idx}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-white/42 mb-6 flex-1 leading-relaxed text-xs">
                  {project.description}
                </p>

                {/* Tech + Live link row */}
                <div className="pt-4 border-t border-white/6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-white/38 bg-white/4 px-2.5 py-0.5 rounded-full border border-white/7 hover:text-white/65 hover:border-white/14 transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-purple-400/70 hover:text-purple-300 transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={11} />
                      <span className="group-hover/link:underline underline-offset-2 truncate max-w-[180px]">
                        {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
