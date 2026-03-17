import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image, Video, PenLine, Calendar, Users, Clock, Tag } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type Tab = "gallery" | "video" | "reflection";

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("gallery");

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab("gallery");
  }, [project?.id]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const tabs: { key: Tab; label: string; icon: JSX.Element; available: boolean }[] = [
    { key: "gallery", label: "Gallery", icon: <Image size={15} />, available: true },
    { key: "video", label: "Video", icon: <Video size={15} />, available: !!project?.videoUrl },
    { key: "reflection", label: "Reflection", icon: <PenLine size={15} />, available: !!project?.teacherNote },
  ];

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-foreground/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal container */}
          <motion.div
            className="fixed inset-0 z-[81] flex items-end md:items-center justify-center md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background w-full max-w-3xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto md:rounded-2xl border border-border shadow-card-hover relative rounded-t-2xl"
              initial={{ y: "100%", opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="sticky top-4 float-right mr-4 mt-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Hero Image */}
              <div className="aspect-[16/9] bg-secondary overflow-hidden md:rounded-t-2xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 md:p-8">
                {/* Title */}
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight mb-4 pr-8">
                  {project.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-foreground bg-secondary border border-border px-3 py-1.5 rounded-full">
                    {project.level}
                  </span>
                  <span className="text-xs font-medium text-foreground bg-secondary border border-border px-3 py-1.5 rounded-full">
                    {project.subject}
                  </span>
                  <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                    {project.themeLabel}
                  </span>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6 pb-5 border-b border-border">
                  {project.year && (
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-primary" />
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.teamSize && (
                    <div className="flex items-center gap-1.5">
                      <Users size={13} className="text-primary" />
                      <span>{project.teamSize}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-primary" />
                      <span>{project.duration}</span>
                    </div>
                  )}
                </div>

                {/* Overview */}
                <p className="text-sm text-foreground/90 leading-relaxed mb-6 font-body">
                  {project.overview}
                </p>

                {/* Tabs */}
                <div className="flex items-center gap-1.5 mb-5 bg-secondary/60 rounded-full p-1 w-fit">
                  {tabs.filter(t => t.available).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        activeTab === tab.key
                          ? "bg-background text-foreground shadow-sm border border-border/50"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === "gallery" && (
                    <motion.div
                      key="gallery"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.images.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2.5">
                          {project.images.map((img, i) => (
                            <div
                              key={i}
                              className={`bg-secondary rounded-xl overflow-hidden ${
                                i === 0 && project.images.length > 2 ? "col-span-2 aspect-video" : "aspect-square"
                              }`}
                            >
                              <img
                                src={img}
                                alt={`${project.title} ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-secondary rounded-xl p-12 text-center">
                          <Image size={28} className="text-muted-foreground/30 mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground font-body">Gallery images coming soon</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "video" && project.videoUrl && (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
                        <iframe
                          src={project.videoUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={`${project.title} video`}
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "reflection" && project.teacherNote && (
                    <motion.div
                      key="reflection"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-secondary/50 border border-border rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Tag size={13} className="text-primary" />
                          <h4 className="text-xs font-medium uppercase tracking-wider text-primary">Teacher's Reflection</h4>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed italic font-body">
                          "{project.teacherNote}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
