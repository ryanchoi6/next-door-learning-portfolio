import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <div>
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <motion.div {...fadeUp}>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4">About</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 max-w-2xl leading-tight">
            Teaching as Design Practice
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed font-body">
            Eleven years of designing learning experiences that sit at the intersection of engineering, art, design, and science.
          </p>
        </motion.div>
      </section>

      {/* Core Beliefs */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp} className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">What I Believe About Learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">
                Learning is not the transfer of information — it's the construction of understanding through intentional experience. Every student arrives with a unique cognitive architecture, and the educator's role is to design environments where that architecture can expand.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                I believe in the power of beautiful problems: challenges complex enough to require real thinking, open enough to allow creative solutions, and meaningful enough to justify the struggle.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">How Projects Are Designed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">
                Every project begins with three questions: What is worth understanding? What will students create that makes their understanding visible? And what conditions will maximize both the rigor of the process and the quality of the outcome?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Design thinking isn't a unit — it's the operating system. Empathy interviews, rapid prototyping, critique sessions, and iterative refinement are embedded into every project.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">The Skills That Matter</h3>
              <div className="space-y-4">
                {[
                  { skill: "Creativity", desc: "The disciplined application of imagination to solve real problems." },
                  { skill: "Critical Thinking", desc: "The ability to evaluate evidence, question assumptions, and revise thinking." },
                  { skill: "Empathy", desc: "Understanding that design begins with other people. Every project starts with listening." },
                  { skill: "Iteration", desc: "The confidence to treat a first draft as a first draft. Revision is the method." },
                  { skill: "Communication", desc: "Making thinking visible through prototypes, presentations, and peer critiques." },
                ].map(({ skill, desc }) => (
                  <div key={skill} className="border-l-2 border-border pl-4 hover:border-primary/60 transition-colors">
                    <h4 className="text-sm font-semibold text-foreground mb-0.5">{skill}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-body">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">What Makes This Approach Different</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-body">
                Most STEAM programs treat the "A" as decoration. In my classroom, every discipline carries equal weight. An engineering challenge is also a design challenge. A community project is also an empathy exercise.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                The result: students who don't just know things, but who can do things — who can look at a complex, real-world situation and say, "I know how to start."
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quote */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container py-16 md:py-20">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <div className="text-primary text-3xl mb-2">"</div>
            <blockquote className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
              The best indicator of my teaching isn't a test score — it's the student who finishes a project and immediately asks, 'Can I make a second version?'
            </blockquote>
            <div className="h-1 w-16 rounded-full mt-6 mx-auto bg-primary" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
