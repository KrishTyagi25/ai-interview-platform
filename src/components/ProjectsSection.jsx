function ProjectsSection() {
  const projects = [
    {
      name: "AI Interview Platform",
      desc: "AI powered mock interview system with feedback analysis",
    },
    {
      name: "Portfolio Website",
      desc: "Personal portfolio with projects and resume",
    },
  ];

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-5">
        Projects
      </h3>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <h4 className="text-sm sm:text-base font-semibold truncate">
              {project.name}
            </h4>

            <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;