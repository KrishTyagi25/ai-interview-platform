import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

function Dashboard() {

  // Mock for now (later backend)
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        <h1 className="text-4xl font-bold mb-12">
          Interview Dashboard
        </h1>

        {/* SUMMARY CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <p className="text-gray-400">Total Interviews</p>
            <h2 className="text-3xl font-bold mt-2">{history.length}</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <p className="text-gray-400">Best Score</p>
            <h2 className="text-3xl font-bold mt-2">
              {Math.max(...history.map((h) => h.score))}%
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <p className="text-gray-400">Average Score</p>
            <h2 className="text-3xl font-bold mt-2">
              {Math.round(
                history.reduce((a, b) => a + b.score, 0) / history.length
              )}%
            </h2>
          </div>

        </div>

        {/* HISTORY TABLE */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-6">Interview History</h2>

          <table className="w-full text-left">
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
                  <td>{item.difficulty}</td>
                  <td>{item.score}%</td>
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