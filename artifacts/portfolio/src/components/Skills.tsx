import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiOpenai,
  SiPostman, SiGit, SiGithub, SiVercel, SiNetlify,
} from "react-icons/si";
import { Monitor, Server, Bot, Database, Workflow, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor size={20} />,
    color: "purple",
    iconBg: "bg-purple-500/15 border-purple-500/25 text-purple-400",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    topLine: "via-purple-500",
    skills: [
      { name: "React.js", icon: <SiReact className="text-sky-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: null },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    color: "blue",
    iconBg: "bg-blue-500/15 border-blue-500/25 text-blue-400",
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]",
    topLine: "via-blue-500",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white/70" /> },
      { name: "REST APIs", icon: null },
      { name: "JWT Auth", icon: null },
      { name: "Webhooks", icon: null },
    ],
  },
  {
    title: "AI & Automation",
    icon: <Bot size={20} />,
    color: "cyan",
    iconBg: "bg-cyan-500/15 border-cyan-500/25 text-cyan-400",
    glow: "hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]",
    topLine: "via-cyan-500",
    skills: [
      { name: "OpenAI API", icon: <SiOpenai className="text-white/80" /> },
      { name: "Prompt Engineering", icon: null },
      { name: "Make.com", icon: null },
      { name: "n8n", icon: null },
      { name: "AI Chatbots", icon: null },
    ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    color: "purple",
    iconBg: "bg-purple-500/15 border-purple-500/25 text-purple-400",
    glow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]",
    topLine: "via-purple-500",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MongoDB Atlas", icon: null },
      { name: "SQL", icon: null },
    ],
  },
  {
    title: "Integrations",
    icon: <Workflow size={20} />,
    color: "blue",
    iconBg: "bg-blue-500/15 border-blue-500/25 text-blue-400",
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]",
    topLine: "via-blue-500",
    skills: [
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "API Testing", icon: null },
      { name: "JSON Data Mapping", icon: null },
      { name: "Third-Party APIs", icon: null },
    ],
  },
  {
    title: "Deployment",
    icon: <Cloud size={20} />,
    color: "cyan",
    iconBg: "bg-cyan-500/15 border-cyan-500/25 text-cyan-400",
    glow: "hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]",
    topLine: "via-cyan-500",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-white/80" /> },
      { name: "Vercel", icon: <SiVercel className="text-white/80" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Render", icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Ambient center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-blue-600/6 blur-[120px]" />
      </div>

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
            What I Work With
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Technical Skills
          </h2>
          <div className="w-16 h-[2px] bg-gradient-primary rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group glow-card glass-card-hover rounded-2xl p-6 relative overflow-hidden ${category.glow} cursor-default`}
              data-testid={`skill-card-${idx}`}
            >
              {/* Gradient top line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${category.topLine} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${category.iconBg}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/4 border border-white/7 text-xs text-white/50 hover:text-white hover:bg-white/8 hover:border-white/15 transition-all duration-200"
                  >
                    {skill.icon && (
                      <span className="text-sm leading-none">{skill.icon}</span>
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
