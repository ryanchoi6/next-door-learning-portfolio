import { motion } from "framer-motion";

interface ThemeFilterProps {
  activeTheme: string | null;
  onThemeChange: (theme: string | null) => void;
}

const themeData: { id: string; label: string; shortLabel: string; icon: JSX.Element; color: string; activeBg: string; activeBorder: string }[] = [
  {
    id: "engineering",
    label: "Engineering & Structural",
    shortLabel: "Engineering",
    color: "text-primary",
    activeBg: "bg-primary/10",
    activeBorder: "border-primary/30",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26L16 6L26 26" />
        <path d="M10 18H22" />
        <path d="M12 14H20" />
        <circle cx="16" cy="6" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: "environmental",
    label: "Environmental & Science",
    shortLabel: "Environmental",
    color: "text-accent",
    activeBg: "bg-accent/10",
    activeBorder: "border-accent/30",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28V16" />
        <path d="M16 16C16 16 10 12 10 7C10 4 13 2 16 5C19 2 22 4 22 7C22 12 16 16 16 16Z" />
        <path d="M10 24C10 24 13 22 16 22C19 22 22 24 22 24" />
      </svg>
    ),
  },
  {
    id: "community",
    label: "Community & Urban Design",
    shortLabel: "Community",
    color: "text-sky",
    activeBg: "bg-sky/10",
    activeBorder: "border-sky/30",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="9" r="3.5" />
        <circle cx="21" cy="9" r="3.5" />
        <path d="M4 27v-3a5 5 0 015-5h4a5 5 0 015 5v3" />
        <path d="M21 14a5 5 0 015 5v3" />
      </svg>
    ),
  },
  {
    id: "digital-media",
    label: "Art & Digital Media",
    shortLabel: "Digital Media",
    color: "text-primary",
    activeBg: "bg-primary/10",
    activeBorder: "border-primary/30",
    icon: (
      <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L19.5 11.5L28 12.5L22 18.5L23.5 27L16 22.5L8.5 27L10 18.5L4 12.5L12.5 11.5L16 4Z" />
      </svg>
    ),
  },
];

const ThemeFilter = ({ activeTheme, onThemeChange }: ThemeFilterProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {themeData.map((theme) => {
        const isActive = activeTheme === theme.id;
        return (
          <motion.button
            key={theme.id}
            onClick={() => onThemeChange(isActive ? null : theme.id)}
            whileTap={{ scale: 0.97 }}
            className={`relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 border ${
              isActive
                ? `${theme.activeBg} ${theme.color} ${theme.activeBorder} shadow-sm`
                : "bg-card text-muted-foreground border-border hover:border-foreground/15 hover:text-foreground"
            }`}
          >
            <span className={isActive ? theme.color : "text-muted-foreground/70"}>
              {theme.icon}
            </span>
            <span className="text-xs font-medium leading-tight text-center hidden sm:block">{theme.label}</span>
            <span className="text-xs font-medium leading-tight text-center sm:hidden">{theme.shortLabel}</span>
            {isActive && (
              <motion.div
                layoutId="theme-indicator"
                className={`absolute -bottom-px left-3 right-3 h-0.5 rounded-full bg-current`}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ThemeFilter;
