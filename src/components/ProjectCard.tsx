import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const themeColor: Record<string, string> = {
  engineering: "bg-primary",
  environmental: "bg-accent",
  community: "bg-sky",
  "digital-media": "bg-primary",
};

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02]">
        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-primary/40">{project.title[0]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-base font-semibold text-foreground mb-1 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2 font-body">
            {project.shortIntro}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <span>{project.level}</span>
            <span className="text-border">·</span>
            <span>{project.subject}</span>
          </div>

          {/* Accent bar */}
          <div className={`h-1 w-12 rounded-full mt-3 ${themeColor[project.theme] || "bg-primary"}`} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
