import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work" as const,
    title: "Software Engineer",
    org: "Tech Company",
    period: "2023 – Present",
    points: [
      "Developed and maintained full-stack web applications using React and Node.js",
      "Improved application performance by 40% through code optimization",
      "Collaborated with cross-functional teams in agile environment",
    ],
  },
  {
    type: "work" as const,
    title: "Frontend Developer Intern",
    org: "Startup Inc.",
    period: "2022 – 2023",
    points: [
      "Built responsive UI components using React and Tailwind CSS",
      "Integrated RESTful APIs and managed state with Redux",
      "Participated in code reviews and sprint planning",
    ],
  },
  {
    type: "education" as const,
    title: "B.Tech in Computer Science",
    org: "University",
    period: "2020 – 2024",
    points: [
      "Specialized in Data Structures, Algorithms, and Software Engineering",
      "Solved 500+ competitive programming problems",
      "Led technical workshops and hackathon teams",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-14 md:pl-16"
              >
                {/* Icon */}
                <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase size={18} className="text-primary" />
                  ) : (
                    <GraduationCap size={18} className="text-primary" />
                  )}
                </div>

                <div className="glass-card p-5">
                  <span className="text-xs font-mono text-primary">{item.period}</span>
                  <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.org}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
