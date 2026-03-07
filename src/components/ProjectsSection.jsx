function ProjectsSection() {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl text-white font-semibold mb-4">Projects</h2>

      <div className="bg-[#0f172a] p-5 rounded-xl">
        <h3 className="text-white font-semibold text-lg">
          AI Interview Platform
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Platform for practicing AI-powered mock interviews with resume
          analysis, real-time feedback, and interview dashboards.
        </p>

        <div className="flex gap-3 mt-3">
          <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded">
            React
          </span>
          <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded">
            Tailwind
          </span>
          <span className="text-xs bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded">
            Framer Motion
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;