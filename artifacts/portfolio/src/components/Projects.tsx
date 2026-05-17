import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KodeKraft — Multi-Industry AI SaaS CRM",
    description: "Built independently — SaaS CRM for Real Estate, Hotels, Clinics, Travel, and Coaching businesses. Includes AI assistant powered by OpenAI APIs, analytics engine processing 10,000+ lead records, drag-and-drop lead pipeline, and auto lead capture from Facebook Ads, IndiaMART, 99acres, and MagicBricks.",
    tech: ["React.js", "Node.js", "MongoDB", "OpenAI APIs"],
    badge: "Featured",
    link: "#"
  },
  {
    title: "Lead Analytics Dashboard",
    description: "Real-time dashboard handling 10K+ lead records with dynamic filtering, data visualisation, and API-driven pipelines.",
    tech: ["React.js", "Node.js", "REST APIs"],
    link: "https://client-report.thewiseparrot.com"
  },
  {
    title: "Clarity Hub — WhatsApp Analytics App",
    description: "WhatsApp Business analytics platform tracking campaign engagement, message performance, and customer interaction metrics using automation workflows and WhatsApp APIs.",
    tech: ["Automation", "APIs"],
    link: "#"
  },
  {
    title: "Tactical Vision AI",
    description: "AI-powered real-time human detection and monitoring system using Python, OpenCV, and MobileNet SSD for live camera-based tracking workflows.",
    tech: ["Python", "OpenCV", "MobileNet SSD"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass-card rounded-2xl p-1 relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500"
              data-testid={`project-card-${idx}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-70 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {project.badge && (
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-3 border border-primary/20">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    aria-label="View Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-xs font-medium text-muted-foreground bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
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
