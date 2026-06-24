import { motion } from "framer-motion";
import Reveal from "../common/Reveal";
import profileImage from "../../assets/profileImage.jpg";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 md:py-24 py-16"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-violet-600/10 blur-3xl" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold theme-heading md:text-6xl">
              Passionate About
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Modern Web Experiences
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid items-center lg:gap-12 lg:grid-cols-[340px_1fr]">
          {/* LEFT IMAGE */}
          <Reveal>
            <div className="relative hidden lg:block">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-violet-600/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border theme-border theme-glass p-4">
                <img
                  src={profileImage}
                  alt="About"
                  className="w-full h-auto rounded-[30px] object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTENT */}
          <Reveal>
            <div>
              <h3 className="text-3xl font-bold theme-heading md:text-4xl">
                Full Stack MERN Developer
              </h3>

              <p className="mt-6 text-lg leading-relaxed theme-subtext">
                I’m Meet Vora, a Full Stack MERN Developer, passionate about
                building scalable web applications and modern user interfaces.
              </p>

              <p className="mt-6 text-lg leading-relaxed theme-subtext">
                I specialize in React.js, Next.js, Node.js, Express.js, and
                MongoDB, with hands-on experience developing full-stack
                applications, REST APIs, authentication systems, and responsive
                UI designs.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border theme-border theme-glass p-6"
                >
                  <h4 className="text-3xl font-bold text-violet-400">10+</h4>

                  <p className="mt-2 theme-subtext">Real-World Projects</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-3xl border theme-border theme-glass p-6"
                >
                  <h4 className="text-3xl font-bold text-cyan-400">2</h4>

                  <p className="mt-2 theme-subtext">Internships Completed</p>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
