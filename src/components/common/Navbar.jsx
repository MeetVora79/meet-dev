import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  "about",
  "skills",
  "projects",
  "github",
  "experience",
  "contact",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((id) => document.getElementById(id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-[999] w-full transition-all duration-300 ${
          scrolled
            ? "border-b theme-border theme-navbar backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className=".container-width navbar-width flex items-center justify-between py-5">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });

              setMenuOpen(false);
            }}
            className="group flex items-center gap-4 hover:cursor-pointer"
          >
            {/* Logo */}
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 theme-logo text-lg font-black text-white transition duration-300 group-hover:scale-105 group-hover:border-violet-500/20">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />

              <span className="relative z-10">MV</span>
            </div>

            {/* Brand */}
            <div className="block">
              <h2 className="text-xl font-black theme-heading">Meet<span className="text-violet-400">.dev</span></h2>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`relative text-sm font-medium uppercase tracking-[0.15em] transition duration-300 hover:cursor-pointer ${
                  active === link
                    ? "text-violet-400"
                    : "theme-subtext hover:text-white"
                }`}
              >
                {link}

                {active === link && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                )}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="hidden rounded-2xl border theme-border theme-glass p-3 theme-heading transition hover:bg-white/10 md:block hover:cursor-pointer"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="theme-heading md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full left-4 right-4 w-auto rounded-3xl border border-white/10 theme-navbar p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          >
            <nav className="flex flex-col px-6 py-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`border-b border-white/5 py-4 text-left text-sm uppercase tracking-[0.15em] transition ${
                    active === link ? "text-violet-400" : "theme-subtext"
                  }`}
                >
                  {link}
                </button>
              ))}
            </nav>
            {/* <button
              onClick={toggleTheme}
              className="mt-5 rounded-2xl border theme-border theme-glass px-5 py-3 theme-heading"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button> */}
          </motion.div>
        )}
      </header>
    </>
  );
}

export default Navbar;
