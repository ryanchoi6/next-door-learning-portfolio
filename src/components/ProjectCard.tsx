import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const themeAccent: Record<string, string> = {
  engineering: "bg-primary",
  environmental: "bg-accent",
  community: "bg-sky",
  "digital-media": "bg-primary",
};

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-400" />
          {/* Arrow indicator */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <ArrowUpRight size={14} className="text-foreground" />
          </div>
          {/* Theme accent strip */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${themeAccent[project.theme] || "bg-primary"}`} />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="text-[11px] font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border/50">
              {project.level}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full border border-border/50">
              {project.subject}
            </span>
          </div>

          <h3 className="font-display text-[15px] font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 font-body">
            {project.shortIntro}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
