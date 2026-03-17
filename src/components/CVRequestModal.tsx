import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check } from "lucide-react";

interface CVRequestModalProps {
  open: boolean;
  onClose: () => void;
}

const CVRequestModal = ({ open, onClose }: CVRequestModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background border border-border rounded-2xl p-8 max-w-md w-full shadow-card relative"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Request Received</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Thank you for your interest. A copy of the CV will be sent to your email shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">Request CV</h3>
                  <p className="text-sm text-muted-foreground mb-6 font-body">
                    Share your details and a copy will be sent to your inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-secondary border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground rounded-full py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                    >
                      <Send size={14} />
                      Send Request
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVRequestModal;
