import { motion } from "framer-motion";
import { GraduationCap, School, Building2 } from "lucide-react";

interface ThemeFilterProps {
  activeTheme: string | null;
  onThemeChange: (theme: string | null) => void;
}

const themeIcons: Record<string, { icon: JSX.Element; label: string }> = {
  engineering: {
    label: "Engineering & Structural",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20L12 4L20 20" />
        <path d="M7 14H17" />
        <path d="M9 10H15" />
      </svg>
    ),
  },
  environmental: {
    label: "Environmental & Science",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 7 9 7 5C7 2.5 9.5 1 12 3.5C14.5 1 17 2.5 17 5C17 9 12 12 12 12Z" />
      </svg>
    ),
  },
  community: {
    label: "Community & Urban Design",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M17 11a4 4 0 014 4v2" />
      </svg>
    ),
  },
  "digital-media": {
    label: "Art & Digital Media",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
      </svg>
    ),
  },
};

const ThemeFilter = ({ activeTheme, onThemeChange }: ThemeFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onThemeChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
          activeTheme === null
            ? "bg-primary text-primary-foreground border-primary shadow-sm"
            : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
        }`}
      >
        All Work
      </button>
      {Object.entries(themeIcons).map(([key, { icon, label }]) => (
        <motion.button
          key={key}
          onClick={() => onThemeChange(activeTheme === key ? null : key)}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
            activeTheme === key
              ? "bg-primary/10 text-primary border-primary/30 shadow-sm"
              : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
          }`}
        >
          <span className={activeTheme === key ? "text-primary" : "text-muted-foreground"}>
            {icon}
          </span>
          <span className="hidden sm:inline">{label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeFilter;
