import { useEffect, useState } from "react";

import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";

import { fetchGithubRepos } from "../../api/github";

function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [repoLimit, setRepoLimit] = useState(6);

  useEffect(() => {
    const updateLimit = () => {
      setRepoLimit(window.innerWidth < 768 ? 3 : 6);
    };

    updateLimit();

    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  useEffect(() => {
    fetchGithubRepos()
      .then((data) => {
        const featuredProjects = [
          "blogify",
          "ecommerce-api",
          "ipo-watch-clone",
        ];

        const filtered = data
          .filter(
            (repo) =>
              !repo.fork && !featuredProjects.includes(repo.name.toLowerCase()),
          )
          .slice(0, repoLimit);

        setRepos(filtered);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [repoLimit]);

  return (
    <section id="github" className="relative overflow-hidden px-6 md:py-24 py-16">
      {/* Glow */}
      <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-cyan-500/10 blur-3xl" />

      <div className="container-width relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            GitHub Activity
          </p>

          <h2 className="text-4xl font-black theme-heading md:text-6xl">
            Open Source &
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Repositories
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed theme-subtext">
            Real repositories, projects, and development work directly fetched
            from GitHub.
          </p>
        </div>

        {/* Repo Grid */}
        <div className="mt-16 md:mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group relative overflow-hidden rounded-[36px] border theme-border theme-card p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/30"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border theme-border bg-violet-500/10 p-3 text-violet-400 transition group-hover:scale-110">
                      <FaGithub />
                    </div>

                    <h3 className="text-xl font-bold theme-heading">
                      {repo.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 line-clamp-3 leading-relaxed theme-subtext">
                  {repo.description || "No description available."}
                </p>

                {/* Stats */}
                <div className="mt-8 flex items-center gap-6 text-sm theme-subtext">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    {repo.stargazers_count}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCodeBranch className="text-cyan-400" />
                    {repo.forks_count}
                  </div>
                </div>

                {/* Button */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl border theme-border bg-white/5 px-5 py-3 font-medium theme-heading transition hover:border-violet-500/40 hover:bg-violet-500/10"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GithubSection;
