import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiOpenai,
  SiPostman, SiGit, SiGithub, SiVercel, SiNetlify,
} from "react-icons/si";
import { Monitor, Server, Bot, Database, Workflow, Cloud } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: <Monitor size={18} />,
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.18)",
    borderColor: "rgba(168,85,247,0.2)",
    lineColor: "#a855f7",
    skills: [
      { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: null, color: "#264de4" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={18} />,
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.18)",
    borderColor: "rgba(59,130,246,0.2)",
    lineColor: "#3b82f6",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#8CC84B" },
      { name: "Express.js", icon: <SiExpress />, color: "#fff" },
      { name: "REST APIs", icon: null, color: "#a855f7" },
      { name: "JWT Auth", icon: null, color: "#a855f7" },
      { name: "Webhooks", icon: null, color: "#a855f7" },
    ],
  },
  {
    title: "AI & Automation",
    icon: <Bot size={18} />,
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.18)",
    borderColor: "rgba(6,182,212,0.2)",
    lineColor: "#06b6d4",
    skills: [
      { name: "OpenAI API", icon: <SiOpenai />, color: "#fff" },
      { name: "Prompt Engineering", icon: null, color: "#06b6d4" },
      { name: "Make.com", icon: null, color: "#06b6d4" },
      { name: "n8n", icon: null, color: "#06b6d4" },
      { name: "AI Chatbots", icon: null, color: "#06b6d4" },
    ],
  },
  {
    title: "Database",
    icon: <Database size={18} />,
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.18)",
    borderColor: "rgba(168,85,247,0.2)",
    lineColor: "#a855f7",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "MongoDB Atlas", icon: null, color: "#a855f7" },
      { name: "SQL", icon: null, color: "#a855f7" },
    ],
  },
  {
    title: "Integrations",
    icon: <Workflow size={18} />,
    accentColor: "#3b82f6",
    glowColor: "rgba(59,130,246,0.18)",
    borderColor: "rgba(59,130,246,0.2)",
    lineColor: "#3b82f6",
    skills: [
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "API Testing", icon: null, color: "#3b82f6" },
      { name: "JSON Mapping", icon: null, color: "#3b82f6" },
      { name: "Third-Party APIs", icon: null, color: "#3b82f6" },
    ],
  },
  {
    title: "Deployment",
    icon: <Cloud size={18} />,
    accentColor: "#06b6d4",
    glowColor: "rgba(6,182,212,0.18)",
    borderColor: "rgba(6,182,212,0.2)",
    lineColor: "#06b6d4",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#fff" },
      { name: "Vercel", icon: <SiVercel />, color: "#fff" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
      { name: "Render", icon: null, color: "#06b6d4" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Center ambient glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[500px] rounded-full bg-blue-700/5 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto inline-flex mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            What I Work With
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <div className="w-16 h-[2px] rounded-full mx-auto shadow-[0_0_12px_rgba(59,130,246,0.7)]"
            style={{ background: "linear-gradient(90deg,#a855f7,#3b82f6,#06b6d4)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl p-6 relative overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${cat.borderColor}`,
                boxShadow: `0 8px 40px rgba(0,0,0,0.4)`,
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 12px 50px rgba(0,0,0,0.5), 0 0 60px ${cat.glowColor}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 8px 40px rgba(0,0,0,0.4)`;
              }}
              data-testid={`skill-card-${idx}`}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.lineColor}, transparent)` }} />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at top right, ${cat.glowColor}, transparent 70%)` }} />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cat.accentColor}18`, border: `1px solid ${cat.accentColor}30`, color: cat.accentColor }}>
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.5)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "rgba(255,255,255,0.9)";
                      el.style.background = "rgba(255,255,255,0.07)";
                      el.style.borderColor = `${cat.accentColor}40`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "rgba(255,255,255,0.5)";
                      el.style.background = "rgba(255,255,255,0.04)";
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    {skill.icon && (
                      <span className="text-sm leading-none" style={{ color: skill.color }}>{skill.icon}</span>
                    )}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
