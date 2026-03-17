import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass, Users, Layers, Clock } from "lucide-react";
import { projects } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: <Compass size={20} />, value: "80+", label: "Projects" },
  { icon: <Users size={20} />, value: "300+", label: "Students" },
  { icon: <Layers size={20} />, value: "12", label: "Themes" },
  { icon: <Clock size={20} />, value: "11", label: "Years" },
];

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="container pt-20 pb-16 md:pt-32 md:pb-24">
        <motion.div {...fadeUp} className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Play. Build. Create.{" "}
            <span className="text-primary">Transform.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8 font-body">
            An interdisciplinary K-12 educator specializing in STEAM, Design, Engineering, and Art — 
            designing project-based learning experiences that prepare students for a future that 
            doesn't yet exist.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              Explore Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="container pb-16 md:pb-20">
        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Featured Student Work</h2>
              <p className="text-sm text-muted-foreground mt-1 font-body">Evidence of learning made visible</p>
            </div>
            <Link
              to="/projects"
              className="text-sm text-primary hover:underline flex items-center gap-1 font-medium"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <Link to="/projects" key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary/20">{project.title[0]}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{project.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 font-body">{project.shortIntro}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                      <span>{project.level}</span>
                      <span className="text-border">·</span>
                      <span>{project.subject}</span>
                    </div>
                    <div className="h-1 w-10 rounded-full mt-3 bg-primary" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Teaching Philosophy Preview */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-24">
          <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">Teaching Philosophy</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
                Learning by Designing & Innovating
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">
                Every project begins with a question worth answering. Through design thinking, 
                iterative prototyping, and authentic problem-solving, students learn that the 
                process of creation is itself a form of understanding.
              </p>
              <Link
                to="/about"
                className="text-sm text-primary hover:underline flex items-center gap-1 font-medium"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-card">
              <div className="text-primary text-3xl mb-3">"</div>
              <blockquote className="font-display text-lg md:text-xl text-foreground leading-relaxed">
                Learning by Designing, Innovating, Impacting...
              </blockquote>
              <div className="h-1 w-16 rounded-full mt-4 bg-primary" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI in Teaching Preview */}
      <section className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="text-primary" size={24} />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-3">
            Future-Ready Pedagogy
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            AI as a Pedagogical Partner
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-body">
            Artificial intelligence isn't replacing the teacher — it's amplifying the teaching. 
            Explore how AI tools are integrated intentionally into curriculum design, student 
            creativity, and reflective practice.
          </p>
          <Link
            to="/ai-teaching"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Explore AI in Teaching
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary/30">
        <div className="container py-16 md:py-20 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Let's Collaborate!
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto font-body">
              Open to teaching roles, curriculum design collaborations, speaking engagements, 
              and educational innovation projects.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
