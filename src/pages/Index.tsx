import Navbar from "@/components/portfolio/Navbar";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import ParallaxBackground from "@/components/portfolio/ParallaxBackground";
import FloatingTechBackground from "@/components/portfolio/FloatingTechBackground";
import Hero from "@/components/portfolio/Hero";
import TerminalIntro from "@/components/portfolio/TerminalIntro";
import AboutMe from "@/components/portfolio/AboutMe";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Testimonials from "@/components/portfolio/Testimonials";
import Certifications from "@/components/portfolio/Certifications";
import ResumeSection from "@/components/portfolio/ResumeSection";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ChatbotWidget from "@/components/portfolio/ChatbotWidget";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParallaxBackground />
      <FloatingTechBackground />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <TerminalIntro />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Testimonials />
        <Certifications />
        <ResumeSection />
        <Contact />
        <Footer />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default Index;
