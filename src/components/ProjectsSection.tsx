import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Code Editor",
    description:
      "A powerful browser-based code editor with AI-powered code suggestions, syntax highlighting, and real-time collaboration features.",
    stack: ["React", "Node.js", "OpenAI", "Monaco Editor", "WebSockets"],
    live: "#",
    github: "#",
  },
  {
    title: "DevConnect",
    description:
      "A social platform for developers to share projects, connect with peers, and find collaborators for open-source work.",
    stack: ["React", "Express", "MongoDB", "Socket.io", "JWT"],
    live: "#",
    github: "#",
  },
  {
    title: "TaskFlow",
    description:
      "A project management tool with kanban boards, sprint planning, real-time updates, and team analytics dashboards.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce API",
    description:
      "A robust RESTful API for e-commerce applications with payment integration, inventory management, and order tracking.",
    stack: ["Node.js", "Express", "MongoDB", "Stripe", "Redis"],
    live: "#",
    github: "#",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive visualizer for sorting and graph algorithms with step-by-step animations and complexity analysis.",
    stack: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS built for managing developer portfolios with markdown support and media optimization.",
    stack: ["Next.js", "MongoDB", "Cloudinary", "MDX"],
    live: "#",
    github: "#",
  },
];

const allTechs = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.stack.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-8" />
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allTechs.slice(0, 10).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                filter === tech
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="rounded-full gap-1.5 text-xs">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="rounded-full gap-1.5 text-xs">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> Source
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
