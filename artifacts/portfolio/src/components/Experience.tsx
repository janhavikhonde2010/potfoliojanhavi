import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer | AI Automation Engineer",
    company: "The Wise Parrot",
    period: "Aug 2025 – Present",
    current: true,
    points: [
      "Built and deployed thewiseparrot.com — company's primary lead generation and client acquisition platform",
      "Developed real-time lead analytics dashboard handling 10,000+ lead records with dynamic filtering, API-driven search, and reporting",
      "Built Clarity Hub — WhatsApp Business analytics dashboard monitoring message performance across 5+ active client campaigns",
      "Developed AI token monitoring system using OpenAI APIs — reducing wasted spend by 30%",
      "Automated 15+ third-party API workflows using Make.com and n8n, reducing manual operational effort by 70%",
      "Created and validated REST API integrations using Postman — JSON data mapping, webhooks, endpoint debugging across 10+ integration points",
    ],
  },
  {
    title: "Implementation Intern — Web Developer",
    company: "The Wise Parrot",
    period: "May 2025 – Aug 2025",
    points: [
      "Built client-facing web applications using React.js, HTML5, CSS3, and JavaScript",
      "Created Make.com and n8n automation workflows to sync API data across platforms",
      "Tested and debugged REST API endpoints using Postman",
    ],
  },
  {
    title: "Software Developer",
    company: "Numetry Technologies",
    period: "Jan 2025 – May 2025",
    points: [
      "Contributed to software development projects, building interactive UI components using JavaScript and React.js",
    ],
  },
  {
    title: "IoT Developer",
    company: "Smart Logic Technologies",
    period: "Sep 2023 – Nov 2023",
    points: [
      "Developed embedded systems and integrated hardware sensors for IoT solutions",
      "Designed IoT architecture and optimised communication protocols",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Academy of Skill Development",
    period: "Jan 2023 – Feb 2023",
    points: ["Developed Python-based projects and performed data analysis tasks"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Where I've Worked
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Professional Experience
          </h2>
          <div className="w-16 h-[2px] bg-gradient-primary rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)] mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px timeline-gradient-line opacity-40" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="mb-10 relative pl-16 md:pl-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[21px] md:left-1/2 md:-translate-x-1/2 top-5 w-3.5 h-3.5 rounded-full z-10 ring-4 ring-[#0a0a0a] ${
                  exp.current
                    ? "bg-gradient-primary shadow-[0_0_16px_rgba(168,85,247,0.9)]"
                    : "bg-white/20 border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                }`}
              />

              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                {/* Left: date & company */}
                <div className="md:col-span-2 md:text-right md:pr-12 mb-3 md:mb-0 md:pt-4">
                  <span
                    className={`inline-block text-xs font-semibold tracking-wider px-3 py-1 rounded-full mb-2 ${
                      exp.current
                        ? "text-purple-300 bg-purple-500/12 border border-purple-500/25"
                        : "text-white/40 bg-white/4 border border-white/8"
                    }`}
                  >
                    {exp.period}
                  </span>
                  <div className="text-base font-bold text-white mt-1.5">
                    {exp.company}
                  </div>
                </div>

                {/* Right: card */}
                <div className="md:col-span-3 md:pl-12">
                  <div className="group glow-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-purple-400 transition-all duration-300" />

                    <h3 className="text-base font-bold text-white flex items-center gap-2.5 mb-4">
                      <Briefcase
                        size={15}
                        className="text-purple-400 flex-shrink-0"
                      />
                      {exp.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-white/45 text-sm flex items-start gap-2.5"
                        >
                          <span className="text-purple-500 mt-1.5 flex-shrink-0">
                            <svg
                              width="5"
                              height="5"
                              viewBox="0 0 5 5"
                              fill="currentColor"
                            >
                              <circle cx="2.5" cy="2.5" r="2.5" />
                            </svg>
                          </span>
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
              <GraduationCap className="text-purple-400" size={18} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="glow-card rounded-2xl p-8 max-w-xl mx-auto relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <h4 className="text-lg font-bold text-white mb-2">
              B.Tech in Computer Engineering
            </h4>
            <p className="text-white/50 mb-3">
              SVKM's Institute of Technology, Dhule
            </p>
            <span className="inline-block text-xs font-semibold tracking-wider text-purple-300 px-3 py-1 rounded-full bg-purple-500/12 border border-purple-500/25">
              2021 – 2025
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
