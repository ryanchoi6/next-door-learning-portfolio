import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image, Video, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

type Tab = "gallery" | "video";

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const defaultTab: Tab = project?.theme === "digital-media" ? "video" : "gallery";
  const [activeTab, setActiveTab] = useState<Tab>(defaultTab);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (project) {
      setActiveTab(project.theme === "digital-media" ? "video" : "gallery");
    }
  }, [project]);

  const isDigitalMedia = project?.theme === "digital-media";

  const tabs: { key: Tab; label: string; icon: JSX.Element; available: boolean }[] = [
    { key: "gallery", label: "Gallery", icon: <Image size={16} />, available: !isDigitalMedia },
    { key: "video", label: "Video", icon: <Video size={16} />, available: !!(project?.videoUrls && project.videoUrls.length > 0) },
  ];

  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
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
                    <span className="flex items-center gap-1.5 text-xs font-medium text-foreground bg-secondary border border-border px-3 py-1 rounded-full">
                      <GraduationCap size={14} className="text-primary" />
                      {project.level}
                    </span>
                    <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      {project.themeLabel}
                    </span>
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
                              <div
                                key={i}
                                className="aspect-square bg-secondary rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => setLightboxIndex(i)}
                              >
                                <img
                                  src={img}
                                  alt={`${project.title} ${i + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
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

                    {activeTab === "video" && project.videoUrls && project.videoUrls.length > 0 && (
                      <motion.div
                        key="video"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-4"
                      >
                        {project.videoUrls.map((url, i) => (
                          <div key={i} className="aspect-video rounded-xl overflow-hidden bg-secondary">
                            <iframe
                              src={url}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={`${project.title} video ${i + 1}`}
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Image Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && project && (
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-[101] w-10 h-10 rounded-full bg-background/10 border border-background/20 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                className="absolute left-4 z-[101] w-10 h-10 rounded-full bg-background/10 border border-background/20 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Next */}
            {lightboxIndex < project.images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                className="absolute right-4 z-[101] w-10 h-10 rounded-full bg-background/10 border border-background/20 flex items-center justify-center text-background hover:bg-background/20 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={project.images[lightboxIndex]}
              alt={`${project.title} ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-background/70 text-sm font-medium">
              {lightboxIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
