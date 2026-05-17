import { motion } from "framer-motion";
import { SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiOpenai, SiPostman, SiGit, SiGithub, SiVercel, SiNetlify } from "react-icons/si";
import { Monitor, Server, Bot, Database, Workflow, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor className="text-purple-400" size={24} />,
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: null },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ]
  },
  {
    title: "Backend",
    icon: <Server className="text-blue-400" size={24} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: null },
      { name: "JWT Auth", icon: null },
      { name: "Webhooks", icon: null },
    ]
  },
  {
    title: "AI & Automation",
    icon: <Bot className="text-cyan-400" size={24} />,
    skills: [
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "Prompt Engineering", icon: null },
      { name: "Make.com", icon: null },
      { name: "n8n", icon: null },
      { name: "AI Chatbots", icon: null },
    ]
  },
  {
    title: "Database",
    icon: <Database className="text-purple-400" size={24} />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MongoDB Atlas", icon: null },
      { name: "SQL", icon: null },
    ]
  },
  {
    title: "Integrations",
    icon: <Workflow className="text-blue-400" size={24} />,
    skills: [
      { name: "Postman", icon: <SiPostman /> },
      { name: "API Testing", icon: null },
      { name: "JSON Data Mapping", icon: null },
      { name: "Third-Party APIs", icon: null },
    ]
  },
  {
    title: "Deployment",
    icon: <Cloud className="text-cyan-400" size={24} />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Render", icon: null },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)]"
              data-testid={`skill-card-${idx}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {skill.icon && <span className="text-base">{skill.icon}</span>}
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
