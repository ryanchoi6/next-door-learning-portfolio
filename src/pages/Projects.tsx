import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { GraduationCap, School, Building2 } from "lucide-react";
import ThemeFilter from "@/components/ThemeFilter";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const levelIcons: Record<string, JSX.Element> = {
  Elementary: <GraduationCap size={16} />,
  "Middle School": <School size={16} />,
  "High School": <Building2 size={16} />,
};

const Projects = () => {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeTheme && p.theme !== activeTheme) return false;
      if (activeLevel && p.level !== activeLevel) return false;
      return true;
    });
  }, [activeTheme, activeLevel]);

  const levels = ["Elementary", "Middle School", "High School"];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <motion.div {...fadeUp}>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Student Work
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed font-body">
            A curated collection of student projects spanning elementary through high school — each designed to develop creativity, critical thinking, and real-world problem solving.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="container pb-8 space-y-4">
        {/* Level filter */}
        <div className="flex items-center gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(activeLevel === level ? null : level)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border ${
                activeLevel === level
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
              }`}
            >
              <span className={activeLevel === level ? "text-primary-foreground" : "text-muted-foreground"}>
                {levelIcons[level]}
              </span>
              {level}
            </button>
          ))}
        </div>

        {/* Theme filter */}
        <ThemeFilter activeTheme={activeTheme} onThemeChange={setActiveTheme} />
      </section>

      {/* Project Grid */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm font-body">No projects match the current filters.</p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;
