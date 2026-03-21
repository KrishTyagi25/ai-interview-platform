import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { Link } from "react-router-dom";

function Dashboard() {
  const history = [
    {
      date: "Mar 12",
      role: "Frontend",
      difficulty: "Medium",
      score: 78,
      completed: 5,
    },
    {
      date: "Mar 15",
      role: "Frontend",
      difficulty: "Hard",
      score: 84,
      completed: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#121225] to-[#0d0d18] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-28 pb-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">

          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Welcome back, Krish
            </h1>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Track your interview performance
            </p>
          </div>

          <Link to="/profile">
            <button className="w-full md:w-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition text-sm">
              View Profile
            </button>
          </Link>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
            <p className="text-gray-400 text-sm">Total Interviews</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              {history.length}
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
            <p className="text-gray-400 text-sm">Best Score</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              {Math.max(...history.map((h) => h.score))}%
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
            <p className="text-gray-400 text-sm">Average Score</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              {Math.round(
                history.reduce((a, b) => a + b.score, 0) / history.length
              )}
              %
            </h2>
          </div>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">

          <Link to="/setup" className="w-full sm:w-auto">
            <button className="w-full px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition text-sm">
              Start New Interview
            </button>
          </Link>

          <button className="w-full sm:w-auto px-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition text-sm">
            Practice Mock
          </button>

        </div>

        {/* HISTORY TABLE (Responsive) */}
        <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 overflow-x-auto">

          <h2 className="text-lg md:text-xl font-medium mb-6">
            Interview History
          </h2>

          <table className="min-w-[600px] w-full text-left text-sm">

            <thead className="text-gray-400 border-b border-white/10">
              <tr>
                <th className="pb-3">Date</th>
                <th>Role</th>
                <th>Difficulty</th>
                <th>Score</th>
                <th>Attempted</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, i) => (
                <tr key={i} className="border-b border-white/5">

                  <td className="py-4">{item.date}</td>
                  <td>{item.role}</td>

                  <td>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs">
                      {item.difficulty}
                    </span>
                  </td>

                  <td>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs">
                      {item.score}%
                    </span>
                  </td>

                  <td>{item.completed}/5</td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;