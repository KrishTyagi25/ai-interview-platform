function StatsSection() {
  const stats = [
    { title: "Interviews", value: "14" },
    { title: "Avg Score", value: "82%" },
    { title: "Best Role", value: "Frontend" },
  ];

  return (
    <div className="bg-[#1e293b] p-5 sm:p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Stats
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f172a] p-4 rounded-xl text-center"
          >
            <p className="text-gray-400 text-xs">
              {item.title}
            </p>

            <h3 className="text-white text-lg sm:text-xl font-bold mt-1">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;