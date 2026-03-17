import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import CVRequestModal from "./CVRequestModal";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/ai-teaching", label: "AI in Teaching" },
  { path: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
            K-12 STEAM Portfolio
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                  location.pathname === link.path
                    ? "nav-active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm py-2.5 px-3 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "text-primary font-semibold bg-primary/5"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">Learning by Designing, Innovating, Impacting</p>
              <p className="text-sm text-muted-foreground mt-1">11 years of interdisciplinary innovation in K–12 education</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCvModalOpen(true)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-2 hover:border-primary/30"
              >
                <FileText size={14} />
                Request CV
              </button>
            </div>
          </div>
        </div>
      </footer>

      <CVRequestModal open={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
};

export default Layout;
