import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import kodeKraftVideo from "@assets/KodeKraft_(1)_1779015320498.mp4";
import visionVideo from "@assets/came_1779015359696.mp4";
import clarityHubImg from "@assets/screenshot-1779015830984.png";
import aiTokenImg from "@assets/image_1779016541894.png";
import wiseParrotImg from "@assets/Screenshot_2026-05-13_205144_1779016593429.png";
import rajivGandhiImg from "@assets/screenshot-1779015845091.png";

type MediaItem = { type: "video"; src: string } | { type: "image"; src: string } | null;

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  badge?: string;
  media: MediaItem;
  accentColor: string;
  glowColor: string;
  lineColor: string;
}

const projects: Project[] = [
  {
    title: "KodeKraft — Multi-Industry AI SaaS CRM",
    description: "Built independently — SaaS CRM for Real Estate, Hotels, Clinics, Travel, and Coaching businesses. Includes AI assistant powered by OpenAI APIs, analytics engine processing 10,000+ lead records, drag-and-drop lead pipeline, and auto lead capture from Facebook Ads, IndiaMART, 99acres, and MagicBricks.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI APIs"],
    badge: "Featured",
    link: "#",
    media: { type: "video", src: kodeKraftVideo },
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.18)",
    lineColor: "#a855f7",
  },
  {
    title: "Tactical Vision AI",
    description: "What if you could track someone even after they disappear from frame? Built a real-time Tactical Vision AI system using YOLOv8 + ByteTrack — simulating a tactical tracking interface capable of detecting, tracking, and predicting target movement in real time. Features human detection, target trajectory prediction after occlusion, threat classification, live radar visualization & motion trails, and a custom OpenCV HUD interface.",
    tech: ["Python", "OpenCV", "YOLOv8", "ByteTrack", "NumPy"],
    link: "#",
    media: { type: "video", src: visionVideo },
    accentColor: "#7c3aed",
    glowColor: "rgba(124,58,237,0.18)",
    lineColor: "#7c3aed",
  },
  {
    title: "Clarity Hub — WhatsApp Analytics",
    description: "WhatsApp Business analytics platform tracking campaign engagement, message performance, and customer interaction metrics using automation workflows and WhatsApp APIs.",
    tech: ["Automation", "WhatsApp APIs"],
    link: "https://clarityhub.thewiseparrot.com/",
    media: { type: "image", src: clarityHubImg },
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.18)",
    lineColor: "#06b6d4",
  },
  {
    title: "AI Token Analyzer",
    description: "AI token monitoring system built using OpenAI APIs to track real-time API consumption across all active integrations — reducing wasted spend by 30%.",
    tech: ["OpenAI APIs", "Node.js", "React.js"],
    link: "https://inteligencetoken.thewiseparrot.com/",
    media: { type: "image", src: aiTokenImg },
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.18)",
    lineColor: "#a855f7",
  },
  {
    title: "The Wise Parrot — Company Website",
    description: "Built and deployed the company's primary lead generation and client acquisition platform — a fully responsive, production-grade marketing website.",
    tech: ["React.js", "Node.js", "CSS3"],
    link: "https://thewiseparrot.com/",
    media: { type: "image", src: wiseParrotImg },
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.18)",
    lineColor: "#3b82f6",
  },
  {
    title: "Rajiv Gandhi Academy",
    description: "Fully responsive institutional website for Rajiv Gandhi Academy of e-Learning with structured content pages, course information, and a professional layout.",
    tech: ["React.js", "HTML5", "CSS3"],
    link: "https://rgael.org/",
    media: { type: "image", src: rajivGandhiImg },
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.18)",
    lineColor: "#06b6d4",
  },
];

function TiltCard({ children, className, glowColor, accentColor, lineColor, style }: {
  children: React.ReactNode;
  className?: string;
  glowColor: string;
  accentColor: string;
  lineColor: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, ...style }}
      className={className}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
    >
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${lineColor}, transparent)` }} />
      {/* Corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-tr-2xl"
        style={{ background: `radial-gradient(circle at top right, ${glowColor}, transparent 70%)` }} />
      {children}
    </motion.div>
  );
}

function MediaPreview({ media, title }: { media: MediaItem; title: string }) {
  if (!media) return null;
  if (media.type === "video") {
    return (
      <div className="relative w-full overflow-hidden rounded-xl border border-white/6 mb-5 group/v">
        <video src={media.src} autoPlay muted loop playsInline
          className="w-full h-44 object-cover opacity-85 group-hover/v:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/55 text-xs backdrop-blur-sm bg-black/30 px-2 py-1 rounded-full">
          <Play size={9} fill="currentColor" />
          Live Demo
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/6 mb-5">
      <img src={media.src} alt={`${title} preview`}
        className="w-full h-44 object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-[450px] h-[450px] rounded-full bg-purple-700/7 blur-[130px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[450px] h-[450px] rounded-full bg-cyan-600/6 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            What I've Built
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <div className="w-16 h-[2px] rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]"
            style={{ background: "linear-gradient(90deg,#a855f7,#3b82f6,#06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.07 }}
            >
              <TiltCard
                glowColor={project.glowColor}
                accentColor={project.accentColor}
                lineColor={project.lineColor}
                className="group rounded-2xl relative overflow-hidden flex flex-col h-full cursor-default"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${project.accentColor}22`,
                  boxShadow: `0 8px 40px rgba(0,0,0,0.45)`,
                  transition: "box-shadow 0.3s ease",
                }}
                data-testid={`project-card-${idx}`}
              >
                <div className="p-6 flex-1 flex flex-col" data-testid={`project-card-${idx}`}>
                  <MediaPreview media={project.media} title={project.title} />

                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 pr-3">
                      {project.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-bold tracking-widest text-purple-300 bg-purple-500/15 rounded-full mb-2 border border-purple-500/30 uppercase">
                          ★ {project.badge}
                        </span>
                      )}
                      <h3 className="text-sm font-bold text-white leading-snug group-hover:text-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-colors duration-200 flex-shrink-0"
                        style={{ color: "rgba(255,255,255,0.22)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
                        aria-label={`View ${project.title}`}
                        data-testid={`project-link-${idx}`}>
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/38 mb-5 flex-1 leading-relaxed text-xs">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t) => (
                        <span key={t}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-full transition-all duration-200"
                          style={{ background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}25`, color: "rgba(255,255,255,0.4)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs transition-colors duration-200 group/link"
                        style={{ color: `${project.accentColor}99` }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = project.accentColor)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = `${project.accentColor}99`)}>
                        <ExternalLink size={10} />
                        <span className="group-hover/link:underline underline-offset-2 truncate max-w-[170px]">
                          {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
