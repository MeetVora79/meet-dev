import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    <footer className="relative overflow-hidden border-t theme-border px-6 pt-20 pb-8">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 bg-violet-600/10 blur-3xl" />

      <div className="container-width relative z-10">
        {/* Grid */}
        <div className="grid gap-14 sm:grid-cols-2 xl:grid-cols-4">
          {/* About */}
          <div>
            <h2 className="text-3xl font-black theme-heading flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-lg font-black text-white transition duration-300 group-hover:scale-105 group-hover:border-violet-500/30">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />

                <span className="relative z-10 text-xl">MV</span>
              </div>

              {/* Brand */}
              <div className="flex flex-col">
                <h2 className="text-3xl font-black theme-heading">Meet<span className="text-violet-400">.dev</span></h2>
                <span className="text-sm text-gray-600">
                  Digital Experiences
                </span>
              </div>
            </h2>

            <p className="mt-6 leading-relaxed theme-subtext">
              "Full Stack MERN Developer focused on building scalable
              applications, premium frontend experiences, and modern web
              architectures."
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold theme-heading">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="w-fit theme-subtext transition hover:cursor-pointer"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="w-fit theme-subtext transition hover:cursor-pointer"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="w-fit theme-subtext transition hover:cursor-pointer"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("github")}
                className="w-fit theme-subtext transition hover:cursor-pointer"
              >
                Github
              </button>

              <button
                onClick={() => scrollToSection("experience")}
                className="w-fit theme-subtext transition hover:cursor-pointer"
              >
                Experience
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-fit theme-subtext transition hover:cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold theme-heading">Social Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://github.com/MeetVora79"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 theme-subtext transition hover:theme-heading"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/meetvora79/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 theme-subtext transition hover:theme-heading"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/meet_vora_07"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 theme-subtext transition hover:theme-heading"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold theme-heading">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-violet-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="theme-subtext">Surat, Gujarat</p>

                  <p className="text-gray-500">India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-violet-400">
                  <FaEnvelope />
                </div>

                <a
                  href="mailto:meetvora877@gmail.com"
                  className="break-all theme-subtext transition hover:theme-heading"
                >
                  meetvora877@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t theme-border pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Meet Vora. All rights reserved.
          </p>

          {/* Scroll Top */}
          <button
            onClick={scrollToTop}
            className="rounded-2xl border theme-border bg-violet-600 p-4 theme-heading backdrop-blur-xl transition hover:-translate-y-1 hover:bg-violet-700"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
