import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

const projects = [
  {
    title: "Blogify",
    description:
      "Blogify is a modern full-stack blogging platform where users can create, view, and manage blogs. Built using the MERN stack (MongoDB, Express, React, Node.js) with clean UI and intuitive functionality.",
    image: project1,
    github: "https://github.com/MeetVora79/Blogify",
    live: "https://blogify-beta-two.vercel.app/",
    stack: [
      "React",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
      "Axios",
      "JWT Authentication",
      "CORS",
    ],
  },

  {
    title: "E-commerce Backend API",
    isBackend: true,
    description:
      "A fully functional E-commerce Backend API built using Node.js, Express, and MongoDB. This project includes authentication, role-based access, product management, cart, orders, wishlist, and user profile.",
    image: project2,
    github: "https://github.com/MeetVora79/ecommerce-api",
    live: "https://ecommerce-api-eepz.onrender.com",
    stack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "Axios",
      "JWT Authentication",
      "Helmet",
      "CORS",
    ],
  },

  {
    title: "AI Resume Analyzer",
    description:
      "AI Resume Analyzer is a full-stack SaaS-style web app built using Next.js, it helps users upload resumes, get AI-powered ATS analysis, and compare their resume with a target job description.",
    image: project3,
    github: "https://github.com/MeetVora79/ai-resume-analyzer",
    live: "https://resume-ai-next.vercel.app/",
    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Clerk Auth",
      "MongoDB Atlas",
      "UploadThing",
      "Gemini AI",
      "Recharts",
      "Lucide React",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 md:py-24 py-16">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-cyan-500/10 blur-3xl" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-black theme-heading md:text-6xl">
            Crafted
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Digital Experiences
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed theme-subtext">
            A collection of full-stack applications focused on scalable
            architecture, premium user experiences, and modern frontend
            engineering.
          </p>
        </div>

        {/* Projects */}
        <div className="md:mt-20 mt-15 space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              {/* Visual Section */}
              <div
                className={`relative ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-2xl" />

                {/* FRONTEND PROJECT */}
                {!project.isBackend ? (
                  <div className="group relative overflow-hidden rounded-[40px] border theme-border theme-glass">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  /* BACKEND VISUAL */
                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#0e1629] p-7 backdrop-blur-xl">
                    {/* Top Terminal Bar */}
                    <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />

                      <p className="ml-4 text-sm text-gray-400">
                        ecommerce-api-server
                      </p>
                    </div>

                    {/* API Logs */}
                    <div className="mt-6 space-y-5 font-mono text-sm">
                      <div className="flex items-center justify-between rounded-2xl border border-white/5 theme-card px-5 py-3">
                        <div>
                          <p className="text-cyan-400">POST /api/auth/login</p>

                          <p className="mt-1 text-xs text-gray-500">
                            JWT Authentication
                          </p>
                        </div>

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                          200 OK
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl border border-white/5 theme-card px-5 py-3">
                        <div>
                          <p className="text-violet-400">GET /api/products</p>

                          <p className="mt-1 text-xs text-gray-500">
                            Product Retrieval
                          </p>
                        </div>

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                          200 OK
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-2xl border border-white/5 theme-card px-5 py-3">
                        <div>
                          <p className="text-pink-400">POST /api/cart/add</p>

                          <p className="mt-1 text-xs text-gray-500">
                            Cart Management
                          </p>
                        </div>

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                          ACTIVE
                        </span>
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-4">
                      <div className="rounded-2xl border border-white/5 theme-card px-5 py-3">
                        <p className="text-xs text-gray-500">Database</p>

                        <p className="mt-2 text-sm font-semibold text-green-400">
                          MongoDB
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/5 theme-card px-5 py-3">
                        <p className="text-xs text-gray-500">Auth</p>

                        <p className="mt-2 text-sm font-semibold text-cyan-400">
                          JWT
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/5 theme-card px-5 py-3">
                        <p className="text-xs text-gray-500">API</p>

                        <p className="mt-2 text-sm font-semibold text-violet-400">
                          REST
                        </p>
                      </div>
                    </div>

                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-violet-500/10 to-transparent" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                  Featured Project
                </p>

                <h3 className="mt-5 text-3xl md:text-4xl font-black theme-heading">
                  {project.title}
                </h3>

                <p className="mt-8 text-lg leading-relaxed theme-subtext">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 theme-glass px-4 py-2 text-sm theme-subtext"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl theme-btn px-6 py-4 font-semibold theme-heading transition hover:scale-105 hover:bg-violet-700"
                  >
                    Live Demo
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border theme-border theme-glass px-6 py-4 font-semibold theme-heading transition hover:border-violet-500/30"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
