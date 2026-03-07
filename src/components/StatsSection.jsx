function StatsSection() {
  const stats = [
    { title: "Total Interviews", value: "14" },
    { title: "Average Score", value: "82%" },
    { title: "Best Role", value: "Frontend Dev" },
  ];

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl text-white font-semibold mb-4">Interview Stats</h2>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-4 rounded-xl text-center"
          >
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h3 className="text-white text-xl font-bold mt-1">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;