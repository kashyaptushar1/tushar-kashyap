import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const roles = [
  "Software Engineer",
  "MERN Stack Developer",
  "Problem Solver",
  "Open Source Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-mono text-primary mb-4 tracking-wider uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-4"
        >
          Tushar <span className="gradient-text">Kashyap</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-9"
        >
          <span>{displayed}</span>
          <span className="animate-blink text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed"
        >
          Building scalable web applications with clean code and modern technologies.
          Passionate about crafting exceptional digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full gap-2 glow-effect">
            <Link to="/projects">
              <ArrowDown size={18} /> View Projects
            </Link>
          </Button>
         <Button asChild variant="outline" size="lg" className="rounded-full gap-2">
  <a href="https://drive.google.com/file/d/1a0skPYFzOTKKEROyNNKcIHVwN_CKeI87/view?usp=sharing" target="_blank" >
     View Resume
  </a>
</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
