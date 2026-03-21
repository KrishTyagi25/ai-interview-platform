function SkillsSection() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Framer Motion",
  ];

  return (
    <div className="bg-[#1e293b] p-5 sm:p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs sm:text-sm bg-indigo-600/20 text-indigo-400 rounded-lg whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;