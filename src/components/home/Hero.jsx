import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-12 md:pb-24 md:pt-40">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-width relative z-10 grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div>
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-500/60 px-5 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />

            <p className="text-sm font-medium text-violet-200">
              Available for Opportunities
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="mt-8 text-4xl font-black leading-tight theme-heading sm:text-5xl md:text-6xl"
          >
            Crafting Modern
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
            Web Experiences
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="mt-8 max-w-2xl text-lg leading-relaxed theme-subtext md:text-xl"
          >
            MERN Stack Developer focused on building scalable web
            applications, premium frontend experiences, and modern high-performance interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="/resume.pdf"
              download="Meet_Vora_Resume.pdf"
              className="rounded-2xl border bg-violet-700 theme-border px-6 py-4 font-semibold theme-heading transition hover:scale-105 hover:border-violet-500/40"
            >
              Download Resume
            </a>

            <button
                onClick={() => scrollToSection("contact")}
                className="rounded-2xl border theme-border theme-glass backdrop-blur-xl px-6 py-4 md:px-8 md:py-4 font-semibold theme-heading transition hover:border-violet-500/30 hover:scale-105 hover:bg-white/10 hover:cursor-pointer"
              >
                Let’s Connect
              </button>

          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
            }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/MeetVora79"
              className="rounded-2xl border theme-border theme-glass p-4 theme-heading transition hover:-translate-y-1 hover:border-violet-500/30"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/meetvora79/"
              className="rounded-2xl border theme-border theme-glass p-4 theme-heading transition hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/meet_vora_07"
              className="rounded-2xl border theme-border theme-glass p-4 theme-heading transition hover:-translate-y-1 hover:border-pink-500/30"
            >
              <FaInstagram size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden lg:flex lg:justify-center">
          {/* Main Image Card */}
          {/* Premium Developer Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: 4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="relative w-full max-w-[500px]"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-violet-500/30 via-cyan-500/20 to-violet-500/30 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[40px] border theme-border theme-glass p-6 backdrop-blur-2xl">
              {/* Top Bar */}
              <div className="flex items-center gap-2 border-b theme-border pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <p className="ml-4 text-sm theme-subtext">meet-vora.dev</p>
              </div>

              {/* Code Window */}
              <div className="mt-8 space-y-5 font-mono text-sm">
                <div>
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>{" "}
                  <span className="theme-heading">=</span>{" "}
                  <span className="theme-heading">{"{"}</span>
                </div>

                <div className="pl-6">
                  <span className="text-green-400">name</span>
                  <span className="theme-heading">:</span>{" "}
                  <span className="text-yellow-300">"Meet Vora"</span>
                  <span className="theme-heading">,</span>
                </div>

                <div className="pl-6">
                  <span className="text-green-400">role</span>
                  <span className="theme-heading">:</span>{" "}
                  <span className="text-yellow-300">
                    "MERN Stack Developer"
                  </span>
                  <span className="theme-heading">,</span>
                </div>

                <div className="pl-6">
                  <span className="text-green-400">skills</span>
                  <span className="theme-heading">:</span>{" "}
                  <span className="text-cyan-300">[</span>
                </div>

                <div className="pl-12 text-yellow-300">"React.js",</div>

                <div className="pl-12 text-yellow-300">"Node.js",</div>

                <div className="pl-12 text-yellow-300">"MongoDB",</div>

                <div className="pl-12 text-yellow-300">"Express.js"</div>

                <div className="pl-6 text-cyan-300">],</div>

                <div className="pl-6">
                  <span className="text-green-400">availableForWork</span>
                  <span className="theme-heading">:</span>{" "}
                  <span className="text-orange-300">true</span>
                </div>

                <div className="theme-heading">{"}"}</div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-violet-500/10 to-transparent" />
            </div>
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute right-0 top-10 hidden rounded-3xl border theme-border theme-glass backdrop-blur-xl px-6 py-5 lg:block"
          >
            <p className="text-sm theme-subtext">Tech Stack</p>

            <h3 className="mt-2 text-2xl font-bold theme-heading">MERN</h3>

            <p className="mt-1 text-sm text-violet-400">Full Stack</p>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute bottom-10 right-0 hidden rounded-3xl border theme-border theme-glass backdrop-blur-xl px-6 py-5 lg:block"
          >
            <p className="text-sm theme-subtext">Experience</p>

            <h3 className="mt-2 text-3xl font-bold theme-heading">2</h3>

            <p className="mt-1 text-sm text-cyan-400">Internships</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
