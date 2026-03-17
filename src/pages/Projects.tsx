import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, School, Building2, Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeFilter from "@/components/ThemeFilter";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, subjects, type Project } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const levelConfig: { label: string; icon: JSX.Element }[] = [
  { label: "Elementary", icon: <GraduationCap size={15} /> },
  { label: "Middle School", icon: <School size={15} /> },
  { label: "High School", icon: <Building2 size={15} /> },
];

const pillars = [
  "Interdisciplinary Learning",
  "Design Thinking",
  "Engineering & Inquiry",
  "Student Voice",
  "Real-World Problem Solving",
  "Creativity & Rigor",
];

const Projects = () => {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (activeTheme && p.theme !== activeTheme) return false;
      if (activeLevel && p.level !== activeLevel) return false;
      if (activeSubject && p.subject !== activeSubject) return false;
      return true;
    });
  }, [activeTheme, activeLevel, activeSubject]);

  const activeFilterCount = [activeTheme, activeLevel, activeSubject].filter(Boolean).length;

  return (
    <div className="min-h-screen">
      {/* ── Hero Header ── */}
      <section className="container pt-16 pb-10 md:pt-24 md:pb-14">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4 flex items-center gap-2">
            <Compass size={14} />
            Student Projects Showcase
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 leading-[1.15]">
            Curated Student Work
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body max-w-xl">
            A carefully selected collection of student projects spanning elementary through high school — 
            each reflecting interdisciplinary thinking, creative rigor, and meaningful real-world engagement.
          </p>
        </motion.div>
      </section>

      {/* ── Curatorial Framing ── */}
      <section className="container pb-10">
        <motion.div
          {...fadeUp}
          className="flex flex-wrap gap-2"
        >
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="text-[11px] font-medium tracking-wide uppercase text-muted-foreground bg-secondary border border-border/50 px-3 py-1.5 rounded-full"
            >
              {pillar}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── Filters ── */}
      <section className="container pb-8 space-y-5">
        {/* Level filter */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2.5">School Level</p>
          <div className="flex flex-wrap items-center gap-2">
            {levelConfig.map(({ label, icon }) => (
              <button
                key={label}
                onClick={() => setActiveLevel(activeLevel === label ? null : label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeLevel === label
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
                }`}
              >
                <span className={activeLevel === label ? "text-background" : "text-muted-foreground/60"}>
                  {icon}
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Subject filter */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2.5">Subject</p>
          <div className="flex flex-wrap items-center gap-2">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setActiveSubject(activeSubject === subject ? null : subject)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeSubject === subject
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Theme filter */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-2.5">Theme / Topic</p>
          <ThemeFilter activeTheme={activeTheme} onThemeChange={setActiveTheme} />
        </div>

        {/* Active filter indicator & reset */}
        {activeFilterCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 pt-1"
          >
            <span className="text-xs text-muted-foreground font-body">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            <button
              onClick={() => {
                setActiveTheme(null);
                setActiveLevel(null);
                setActiveSubject(null);
              }}
              className="text-xs text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* ── Project Gallery Grid ── */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-sm font-body mb-3">No projects match the current filters.</p>
            <button
              onClick={() => {
                setActiveTheme(null);
                setActiveLevel(null);
                setActiveSubject(null);
              }}
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View all projects
            </button>
          </motion.div>
        )}
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
              Interested in the approach behind these projects?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6">
              Explore how AI, design thinking, and interdisciplinary methods shape these learning experiences — 
              or get in touch to discuss collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/ai-teaching"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                AI in Teaching
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-foreground border border-border text-sm font-medium hover:border-foreground/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;
