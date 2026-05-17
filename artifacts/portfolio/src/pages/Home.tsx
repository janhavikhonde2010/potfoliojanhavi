import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        {/* Section divider */}
        <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <About />

        <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <Skills />

        <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <Projects />

        <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <Experience />

        <div className="h-px mx-auto max-w-4xl bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
