import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Palette, MessageSquare, Lightbulb, Shield, ExternalLink, X } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const useCases = [
  {
    icon: <Brain size={22} />,
    title: "Curriculum Design & Planning",
    description: "Using AI to accelerate lesson planning, differentiate instruction, and create adaptive learning pathways that respond to student needs in real time.",
    externalUrl: "https://www.magicschool.ai",
    linkLabel: "MagicSchool AI — Lesson Planning",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=340&fit=crop",
  },
  {
    icon: <Palette size={22} />,
    title: "Student Creative Exploration",
    description: "AI as a creative collaborator — helping students brainstorm, visualize concepts, generate reference imagery, and push past creative blocks.",
    externalUrl: "https://www.canva.com/ai-image-generator/",
    linkLabel: "Canva AI Image Generator",
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=340&fit=crop",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Reflective Practice & Critique",
    description: "AI-facilitated reflection prompts that help students articulate their design decisions, evaluate their process, and develop metacognitive awareness.",
    externalUrl: "https://chat.openai.com",
    linkLabel: "ChatGPT — Reflection Prompts",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=340&fit=crop",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Design Thinking Acceleration",
    description: "Using AI to rapidly prototype ideas, test assumptions, and generate multiple solution paths — iteration is faster with a thinking partner.",
    externalUrl: "https://www.figma.com/ai",
    linkLabel: "Figma AI — Rapid Prototyping",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=340&fit=crop",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Cross-Disciplinary Connections",
    description: "AI helps surface unexpected connections between disciplines — linking physics to artistic technique, or environmental data to community design.",
    externalUrl: "https://www.perplexity.ai",
    linkLabel: "Perplexity AI — Research & Discovery",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop",
  },
  {
    icon: <Shield size={22} />,
    title: "Responsible & Critical AI Use",
    description: "Teaching students to evaluate AI outputs critically, understand bias and limitations, and develop an ethical framework for AI as a tool.",
    externalUrl: "https://www.commonsense.org/education/articles/classroom-guide-to-ai",
    linkLabel: "Common Sense — AI Classroom Guide",
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=340&fit=crop",
  },
];

const AITeaching = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <div>
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4">AI in Teaching</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Intentional AI Integration in the Classroom
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            AI is not a trend to follow — it's a pedagogical tool to wield with purpose. 
            Here's how artificial intelligence is integrated into curriculum, creativity, and 
            critical thinking across every grade level.
          </p>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="container pb-12">
        <motion.div {...fadeUp} className="bg-card border border-border rounded-xl p-6 md:p-10 max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">The Approach</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">
            AI in the classroom isn't about automation — it's about amplification. The goal is never to 
            have AI do the thinking for students, but to use AI as a tool that makes student thinking 
            more visible, more iterative, and more ambitious.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed font-body">
            Every AI integration follows three principles: it must deepen understanding (not shortcut it), 
            it must be transparent (students know when and why AI is being used), and it must develop 
            critical judgment (students evaluate and refine AI outputs, never accept them uncritically).
          </p>
        </motion.div>
      </section>

      {/* Use Cases Grid */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">How AI Shows Up in Practice</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedCase(i)}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.description}</p>
                <p className="text-xs text-primary mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={12} /> View example
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {selectedCase !== null && (
          <>
            <motion.div
              className="fixed inset-0 z-[80] bg-foreground/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
            />
            <motion.div
              className="fixed inset-0 z-[81] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-card border border-border rounded-2xl w-full max-w-lg overflow-hidden shadow-card-hover relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={14} />
                </button>

                {/* Thumbnail */}
                <a
                  href={useCases[selectedCase].externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/link"
                >
                  <div className="relative aspect-video bg-secondary overflow-hidden">
                    <img
                      src={useCases[selectedCase].thumbnail}
                      alt={useCases[selectedCase].title}
                      className="w-full h-full object-cover group-hover/link:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover/link:bg-foreground/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover/link:opacity-100 transition-opacity shadow-lg">
                        <ExternalLink size={18} className="text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </a>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {useCases[selectedCase].icon}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {useCases[selectedCase].title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body mb-4">
                    {useCases[selectedCase].description}
                  </p>
                  <a
                    href={useCases[selectedCase].externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={14} />
                    {useCases[selectedCase].linkLabel}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Note */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <div className="text-primary text-3xl mb-2">"</div>
            <p className="font-display text-lg md:text-xl text-foreground leading-relaxed mb-4">
              The question isn't whether AI belongs in education. The question is whether we'll teach students 
              to use it with the same intentionality we bring to every other tool in the studio.
            </p>
            <div className="h-1 w-16 rounded-full mt-4 mx-auto bg-primary" />
            <p className="text-xs text-muted-foreground mt-6">
              Specific AI tools and detailed case studies will be shared upon request
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AITeaching;
