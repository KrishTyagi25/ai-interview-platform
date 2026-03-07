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
    <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl text-white font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;