import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            className="md:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I am a <strong className="text-foreground font-semibold">Full Stack Developer & AI Automation Engineer</strong> with hands-on experience building production-grade SaaS CRM systems, analytics dashboards, AI-powered business tools, and workflow automation platforms.
            </p>
            <p>
              I specialize in combining modern web technologies (React.js, Node.js, MongoDB) with intelligent automation (OpenAI, n8n, Make.com) to create scalable SaaS products that solve real business problems.
            </p>
            <p>
              My expertise spans the entire product lifecycle — from architectural design and API integration to deployment and optimization, ensuring delivery of high-performing, client-facing applications.
            </p>
          </motion.div>

          <motion.div 
            className="md:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">MERN Stack Expert</h3>
              </div>
              <p className="text-muted-foreground text-sm">Building responsive, scalable web applications with clean code architectures and robust APIs.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">AI Automation</h3>
              </div>
              <p className="text-muted-foreground text-sm">Designing intelligent workflows using LLMs and automation platforms to eliminate manual processes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
