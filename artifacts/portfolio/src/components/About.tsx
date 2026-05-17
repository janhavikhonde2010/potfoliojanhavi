import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 relative section-dark">
      {/* Subtle side glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-primary rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-3 space-y-6 text-lg text-white/55 leading-relaxed"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p>
              I am a{" "}
              <strong className="text-white font-semibold">
                Full Stack Developer & AI Automation Engineer
              </strong>{" "}
              with hands-on experience building production-grade SaaS CRM
              systems, analytics dashboards, AI-powered business tools, and
              workflow automation platforms.
            </p>
            <p>
              I specialize in combining modern web technologies (React.js,
              Node.js, MongoDB) with intelligent automation (OpenAI, n8n,
              Make.com) to create scalable SaaS products that solve real
              business problems.
            </p>
            <p>
              My expertise spans the entire product lifecycle — from
              architectural design and API integration to deployment and
              optimization, ensuring delivery of high-performing, client-facing
              applications.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            {/* Card 1 */}
            <div className="glow-card rounded-2xl p-7 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-2xl" />
              <div className="relative flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  <Code2 size={22} />
                </div>
                <h3 className="text-lg font-bold text-white">
                  MERN Stack Expert
                </h3>
              </div>
              <p className="relative text-white/45 text-sm leading-relaxed">
                Building responsive, scalable web applications with clean code
                architectures and robust APIs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glow-card rounded-2xl p-7 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent rounded-2xl" />
              <div className="relative flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <Cpu size={22} />
                </div>
                <h3 className="text-lg font-bold text-white">AI Automation</h3>
              </div>
              <p className="relative text-white/45 text-sm leading-relaxed">
                Designing intelligent workflows using LLMs and automation
                platforms to eliminate manual processes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
