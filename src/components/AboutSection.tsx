import { motion } from "framer-motion";
import { Code2, Rocket, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "15+" },
  { icon: Trophy, label: "Problems Solved", value: "500+" },
  { icon: Rocket, label: "Technologies", value: "10+" },
  { icon: Users, label: "Collaborations", value: "20+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate Software Engineer with a strong foundation in Data Structures & Algorithms
              and modern web development. I specialize in the MERN stack and love turning complex problems
              into elegant, user-friendly solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey in software engineering has been driven by curiosity and a commitment to
              continuous learning. I enjoy building full-stack applications that are performant,
              scalable, and maintainable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or solving challenging algorithmic problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 text-center hover:border-primary/30 transition-colors"
              >
                <stat.icon className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
