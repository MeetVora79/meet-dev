import Reveal from "../common/Reveal";

const techStack = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "GSAP",
  "Git",
  "GitHub",
  "VS Code",
  "REST APIs",
  "JWT Auth",
  "MySQL",
  "Postman",
];

const categories = [
  {
    title: "Frontend Development",
    description:
      "Building modern responsive interfaces with performance-focused architecture and premium UI/UX.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable APIs, authentication systems, and efficient server-side applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "MySQL",
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Using modern developer tooling and collaborative workflows for production-ready applications.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Responsive Design",
      "Deployment",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 md:py-24 py-16">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-violet-600/10 blur-3xl" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills & Expertise
          </p>

          <h2 className="text-4xl font-black theme-heading md:text-6xl">
            Modern Tech
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Stack
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed theme-subtext">
            Building scalable full-stack applications using modern frontend
            technologies, backend architectures, and production-ready workflows.
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative mt-16 overflow-hidden">
          <div className="flex marquee gap-6">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="whitespace-nowrap rounded-2xl border theme-border theme-glass px-6 py-4 theme-heading transition hover:border-violet-500/30"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal>
              <div
                key={index}
                className="group relative overflow-hidden rounded-[36px] border theme-border theme-card p-8 transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/30"
              >
                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

                  <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Number */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-xl font-bold text-white transition duration-500 group-hover:scale-110">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-bold theme-heading">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 leading-relaxed theme-subtext">
                    {category.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border theme-border bg-white/5 px-4 py-2 text-sm theme-subtext transition hover:border-violet-500/40 hover:text-violet-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
