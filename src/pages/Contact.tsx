import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Mail } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="container pt-16 pb-8 md:pt-24 md:pb-12">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
            Let's Start a Conversation
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            Open to teaching positions, curriculum design collaborations, speaking engagements, 
            workshop facilitation, and educational innovation projects.
          </p>
        </motion.div>
      </section>

      <section className="container pb-20 md:pb-28">
        <motion.div {...fadeUp} className="grid md:grid-cols-[1fr_1.2fr] gap-12 max-w-4xl">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Get in Touch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Whether you're a school leader looking for a distinctive educator, a fellow innovator 
                exploring collaboration, or an organization seeking a workshop facilitator — I'd love 
                to hear from you.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground bg-card border border-border rounded-xl px-4 py-3">
              <Mail size={16} className="text-primary" />
              <span className="text-sm">hello@educator-portfolio.com</span>
            </div>

            <div className="border-l-2 border-primary/40 pl-4">
              <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Inquiry Areas</p>
              <ul className="text-sm text-muted-foreground space-y-1.5 font-body">
                <li>Teaching roles (K–12 STEAM, Design, Art)</li>
                <li>Curriculum design & consulting</li>
                <li>Workshop & PD facilitation</li>
                <li>Speaking engagements</li>
                <li>AI in education collaborations</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Thank you for reaching out. I'll respond within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                    placeholder="Share your inquiry, opportunity, or idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
