import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-white/30 text-sm">
          &copy; {currentYear}{" "}
          <span className="text-gradient-primary font-semibold">
            Built by Janhavi Khonde
          </span>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/janhavikhonde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/janhavi-khonde-b7410029b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-blue-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:janhavikhonde20@gmail.com"
            className="text-white/25 hover:text-purple-400 transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
