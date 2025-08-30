import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";
import navItems from "../data/navItems.json";
import { useTheme } from "@/context/useTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-[#065F46] dark:text-[#EAB308] tracking-tight"
        >
          MyPortfolio
        </motion.a>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={item.href}
                className={cn(
                  "relative transition",
                  "text-slate-600 dark:text-slate-300",
                  "hover:text-[#065F46] dark:hover:text-[#EAB308]"
                )}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "transition-colors",
              theme === "dark" ? "text-[#EAB308]" : "text-[#065F46]"
            )}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          {/* Language Switcher placeholder */}
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "text-xs",
              "border-slate-300 dark:border-slate-700",
              "hover:bg-[#EAB308]/10 hover:border-[#EAB308]"
            )}
          >
            EN
          </Button>
        </div>
      </nav>
    </header>
  );
}
