import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer | AI Automation Engineer",
    company: "The Wise Parrot",
    period: "Aug 2025 – Present",
    points: [
      "Built and deployed thewiseparrot.com — company's primary lead generation and client acquisition platform",
      "Developed real-time lead analytics dashboard handling 10,000+ lead records with dynamic filtering, API-driven search, and reporting",
      "Built Clarity Hub — WhatsApp Business analytics dashboard monitoring message performance across 5+ active client campaigns",
      "Developed AI token monitoring system using OpenAI APIs — reducing wasted spend by 30%",
      "Automated 15+ third-party API workflows using Make.com and n8n, reducing manual operational effort by 70%",
      "Created and validated REST API integrations using Postman — JSON data mapping, webhooks, endpoint debugging across 10+ integration points"
    ]
  },
  {
    title: "Implementation Intern — Web Developer",
    company: "The Wise Parrot",
    period: "May 2025 – Aug 2025",
    points: [
      "Built client-facing web applications using React.js, HTML5, CSS3, and JavaScript",
      "Created Make.com and n8n automation workflows to sync API data across platforms",
      "Tested and debugged REST API endpoints using Postman"
    ]
  },
  {
    title: "Software Developer",
    company: "Numetry Technologies",
    period: "Jan 2025 – May 2025",
    points: [
      "Contributed to software development projects, building interactive UI components using JavaScript and React.js"
    ]
  },
  {
    title: "IoT Developer",
    company: "Smart Logic Technologies",
    period: "Sep 2023 – Nov 2023",
    points: [
      "Developed embedded systems and integrated hardware sensors for IoT solutions",
      "Designed IoT architecture and optimised communication protocols"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Academy of Skill Development",
    period: "Jan 2023 – Feb 2023",
    points: [
      "Developed Python-based projects and performed data analysis tasks"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              {/* Desktop layout: split timeline. Mobile: standard list */}
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-1 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-gradient-primary shadow-[0_0_10px_rgba(139,92,246,0.8)] z-10 ring-4 ring-background"></div>
                
                {/* Left side (Date & Company for desktop) */}
                <div className="md:col-span-2 md:text-right md:pr-12 mb-2 md:mb-0">
                  <h4 className="text-primary font-medium">{exp.period}</h4>
                  <div className="text-lg font-bold text-foreground mt-1">{exp.company}</div>
                </div>
                
                {/* Right side (Content) */}
                <div className="md:col-span-3 md:pl-12">
                  <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                      <Briefcase size={18} className="text-muted-foreground" />
                      {exp.title}
                    </h3>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1 text-[10px]">♦</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8 justify-center">
            <GraduationCap className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>
          
          <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto border border-white/5 text-center">
            <h4 className="text-xl font-bold text-white mb-2">B.Tech in Computer Engineering</h4>
            <p className="text-muted-foreground text-lg mb-1">SVKM's Institute of Technology, Dhule</p>
            <p className="text-primary font-medium">2021 – 2025</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
