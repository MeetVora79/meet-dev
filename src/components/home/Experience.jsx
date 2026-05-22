import { FaCode, FaDatabase, FaLayerGroup, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Paperboat Tech Solutions",
    location: "Ahmedabad",
    duration: "Jan 2024 — May 2024",
    focus: "Frontend • Backend • Database",
    icon: <FaDatabase />,
    points: [
      "Built frontend using blade templates, javaScript and Bootstrap framework.",
      "Developed backend functionalities using Laravel, MySQL, and REST APIs.",
      "Implemented database operations and module improvements.",
    ],
  },
  {
    role: "React.js Developer Intern",
    company: "TatvaSoft Software Solution",
    location: "Ahmedabad",
    duration: "Jul 2023 — Aug 2023",
    focus: "React • UI • Components",
    icon: <FaCode />,
    points: [
      "Built an responsive E-commerce Bookstore web app using React.js and Material UI.",
      "Created reusable components, routing, and React Hooks logic.",
      "Developed responsive UI following modern UI/UX practices.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-5 py-16 md:py-24 md:px-6">
      <div className="absolute left-0 top-20 h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-2xl" />
      <div className="absolute right-0 bottom-20 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-2xl" />

      <div className="container-width relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-300/80">
            Experience
          </p>

          <h2 className="text-4xl font-black theme-heading md:text-6xl">
            Building 
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Real-World Solutions
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed theme-subtext">
            Practical development experience across frontend interfaces,
            backend workflows, REST APIs, databases, and responsive UI systems.
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[40px] border theme-border theme-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="grid gap-0 lg:grid-cols-[1.1fr_1.4fr]">
                <div className="relative border-b theme-border p-8 lg:border-b-0 lg:border-r">
                  <div className="relative z-10">
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-2xl md:rounded-3xl border theme-border bg-violet-500/10 text-lg md:text-2xl text-violet-400">
                        {item.icon}
                      </div>

                      <span className="rounded-full border theme-border theme-card px-4 py-2 text-xs uppercase tracking-[0.2em] theme-subtext">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                      {item.focus}
                    </p>

                    <h3 className="mt-5 text-3xl font-black theme-heading md:text-4xl">
                      {item.role}
                    </h3>

                    <p className="mt-4 text-xl font-semibold text-violet-400">
                      {item.company}
                    </p>

                    <p className="mt-4 flex items-center gap-2 theme-subtext">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="relative p-8">
                  <div className="relative z-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {item.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="rounded-3xl flex gap-5 md:block border theme-border theme-card p-6 transition duration-500 hover:-translate-y-2 hover:border-violet-500/30"
                      >
                        <div className="mb-6 flex h-10 w-25 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-cyan-500/10 text-cyan-400">
                          <FaLayerGroup />
                        </div>

                        <p className="leading-relaxed theme-subtext">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {["Internship", "Team Collaboration", "Debugging", "Real Project Work"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-full border theme-border theme-card px-4 py-2 text-sm theme-subtext"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;