import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/6 py-3 shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => scrollTo("#home")}
          data-testid="link-home-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-white text-sm shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all duration-300">
            JK
          </div>
          <span className="font-semibold text-base tracking-tight hidden sm:block text-white/80 group-hover:text-white transition-colors duration-200">
            Janhavi Khonde
          </span>
        </div>

        {/* Desktop Nav pill */}
        <nav className="hidden md:flex items-center gap-0.5 bg-white/4 backdrop-blur-md border border-white/8 rounded-full px-1.5 py-1.5 shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.substring(1)
                  ? "bg-white/10 text-white shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                  : "text-white/45 hover:text-white hover:bg-white/6"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <div className="hidden md:flex items-center">
          <Button
            className="bg-gradient-primary text-white border-0 shadow-[0_0_24px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] transition-all duration-300 rounded-full px-6 h-9 text-sm font-semibold"
            onClick={() => scrollTo("#contact")}
            data-testid="btn-hire-me"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/60 hover:text-white p-2 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="btn-mobile-menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/6 shadow-2xl py-4 px-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.substring(1)
                  ? "bg-purple-500/15 text-white border border-purple-500/25"
                  : "text-white/45 hover:text-white hover:bg-white/5"
              }`}
              data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </button>
          ))}
          <Button
            className="mt-3 bg-gradient-primary text-white w-full rounded-xl h-10 font-semibold shadow-[0_0_24px_rgba(139,92,246,0.4)]"
            onClick={() => scrollTo("#contact")}
          >
            Hire Me
          </Button>
        </div>
      )}
    </header>
  );
}
