import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Production Projects", value: "6+" },
  { label: "Lead Records Processed", value: "10K+" },
  { label: "Automated Workflows", value: "15+" },
  { label: "API Cost Reduction", value: "30%" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building AI-powered products that <span className="text-gradient-primary">actually ship.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm Janhavi Khonde — Full Stack AI Engineer building production SaaS systems, AI automation workflows, dashboards, APIs, and computer vision applications.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all group"
              onClick={() => scrollTo("#projects")}
              data-testid="btn-hero-projects"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md"
              asChild
              data-testid="btn-hero-resume"
            >
              <a href="https://janhavikhonde.netlify.app" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md"
              onClick={() => scrollTo("#contact")}
              data-testid="btn-hero-contact"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>
          </motion.div>

          {/* Metric Cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {metrics.map((metric, i) => (
              <div 
                key={i} 
                className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center group hover:border-primary/50 transition-colors"
                data-testid={`metric-card-${i}`}
              >
                <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-gradient-primary transition-all">
                  {metric.value}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
