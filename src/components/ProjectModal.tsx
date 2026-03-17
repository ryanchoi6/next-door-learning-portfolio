import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image, Video, PenLine, Calendar, Users, Clock } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type Tab = "gallery" | "video" | "reflection";

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("gallery");

  const tabs: { key: Tab; label: string; icon: JSX.Element; available: boolean }[] = [
    { key: "gallery", label: "Gallery", icon: <Image size={16} />, available: true },
    { key: "video", label: "Video", icon: <Video size={16} />, available: !!project?.videoUrl },
    { key: "reflection", label: "Reflection", icon: <PenLine size={16} />, available: !!project?.teacherNote },
  ];

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-foreground/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 bottom-0 top-12 md:top-16 z-[81] flex items-end md:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background border border-border rounded-t-2xl md:rounded-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-card-hover relative"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="sticky top-4 float-right mr-4 mt-4 z-10 w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>

              {/* Hero Image */}
              <div className="aspect-[16/9] bg-secondary overflow-hidden">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-primary/30">{project.title[0]}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                {/* Title */}
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                  {project.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-foreground bg-secondary border border-border px-3 py-1 rounded-full">
                    {project.level}
                  </span>
                  <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {project.themeLabel}
                  </span>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    <span>Year 2023</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-primary" />
                    <span>Team 5 Students</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    <span>Duration 6 Weeks</span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-sm text-foreground leading-relaxed mb-6 font-body">
                  {project.overview}
                </p>

                {/* Tabs */}
                <div className="flex items-center gap-2 mb-6">
                  {tabs.filter(t => t.available).map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all border ${
                        activeTab === tab.key
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.images.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3">
                          {project.images.map((img, i) => (
                            <div key={i} className="aspect-square bg-secondary rounded-xl overflow-hidden">
                              <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-secondary rounded-xl p-12 text-center">
                          <Image size={32} className="text-muted-foreground/30 mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground">Gallery images coming soon</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === "video" && project.videoUrl && (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
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
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-secondary/50 border border-border rounded-xl p-6">
                        <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-3">Teacher's Reflection</h4>
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
