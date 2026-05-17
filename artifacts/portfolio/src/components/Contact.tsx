import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "janhavikhonde20@gmail.com",
    href: "mailto:janhavikhonde20@gmail.com",
    color: "group-hover:text-purple-400"
  },
  {
    icon: <Linkedin size={24} />,
    title: "LinkedIn",
    value: "janhavi-khonde",
    href: "https://linkedin.com/in/janhavi-khonde-b7410029b",
    color: "group-hover:text-blue-400"
  },
  {
    icon: <Github size={24} />,
    title: "GitHub",
    value: "github.com/janhavikhonde",
    href: "https://github.com/janhavikhonde",
    color: "group-hover:text-white"
  },
  {
    icon: <Globe size={24} />,
    title: "Portfolio",
    value: "janhavikhonde.netlify.app",
    href: "https://janhavikhonde.netlify.app",
    color: "group-hover:text-cyan-400"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to build something extraordinary? I'm currently open for new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, idx) => (
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_rgba(139,92,246,0.2)]"
              data-testid={`contact-card-${contact.title.toLowerCase()}`}
            >
              <div className={`mb-4 text-muted-foreground transition-colors ${contact.color}`}>
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{contact.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white transition-colors truncate w-full">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
