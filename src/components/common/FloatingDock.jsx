import {
  User,
  Code2,
  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const links = [
  {
    icon: <User size={20} />,
    href: "#about",
    label: "About",
  },
  {
    icon: <Code2 size={20} />,
    href: "#skills",
    label: "Skills",
  },
  {
    icon: <FolderKanban size={20} />,
    href: "#projects",
    label: "Projects",
  },
  {
    icon: <FaGithub size={20} />,
    href: "#github",
    label: "GitHub",
  },
  {
    icon: <Briefcase size={20} />,
    href: "#experience",
    label: "Experience",
  },
  {
    icon: <Mail size={20} />,
    href: "#contact",
    label: "Contact",
  },
];

function FloatingDock() {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 md:hidden">

      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            whileHover={{
              y: -8,
              scale: 1.12,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group relative rounded-full border border-white/5 bg-white/5 p-4 text-gray-300 transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
          >

            {link.icon}

            {/* Tooltip */}
            <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-slate-900/90 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
              {link.label}
            </div>

          </motion.a>
        ))}

      </div>

    </div>
  );
}

export default FloatingDock;