import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import SkillsChart from "../components/SkillsChart";

function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    role = "Not defined",
    difficulty = "Medium",
    answers = [],
  } = location.state || {};

  const totalQuestions = 5;

  const analysis = useMemo(() => {
    if (!answers.length) return null;

    let totalLength = 0;
    let completed = 0;

    answers.forEach((ans) => {
      if (ans.trim().length > 0) {
        completed++;
        totalLength += ans.trim().length;
      }
    });

    if (completed === 0) return null;

    const avgLength = totalLength / completed || 0;
    const completionScore = (completed / totalQuestions) * 100;

    let depthScore = Math.min(avgLength / 5, 100);

    const difficultyMultiplier =
      difficulty === "Hard" ? 1.1 : difficulty === "Medium" ? 1 : 0.9;

    depthScore = depthScore * difficultyMultiplier;

    const overallScore = Math.min(
      Math.round(depthScore * 0.6 + completionScore * 0.4),
      100
    );

    return {
      completed,
      avgLength: Math.round(avgLength),
      depthScore: Math.round(depthScore),
      completionScore: Math.round(completionScore),
      overallScore,
    };
  }, [answers, difficulty]);

  // 🚨 EMPTY STATE (important)
  if (!analysis) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6 px-4 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          No interview data found
        </h1>

        <button
          onClick={() => navigate("/setup")}
          className="px-6 py-3 bg-primary rounded-xl"
        >
          Start Interview
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#121225] to-[#0d0d18] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pt-28 pb-16">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
              Interview Report
            </h1>

            <p className="text-gray-400 text-sm md:text-base mb-6">
              Role: <span className="text-white">{role}</span> | Difficulty:{" "}
              <span className="text-white">{difficulty}</span>
            </p>

            <div className="bg-indigo-500/10 border border-indigo-400/30 p-5 rounded-2xl">
              <p className="text-gray-300 text-sm md:text-base">
                You answered{" "}
                <span className="text-white font-semibold">
                  {analysis.completed}
                </span>{" "}
                out of {totalQuestions} questions.
              </p>

              <p className="text-gray-300 mt-2 text-sm md:text-base">
                Avg length:{" "}
                <span className="text-white font-semibold">
                  {analysis.avgLength}
                </span>{" "}
                chars
              </p>
            </div>
          </div>

          {/* SCORE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center rounded-full border-8 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.6)]">
              <span className="text-3xl md:text-5xl font-bold">
                {analysis.overallScore}%
              </span>
            </div>
          </motion.div>

        </div>

        {/* BREAKDOWN */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">

          {/* CHART */}
          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
            <SkillsChart />
          </div>

          {/* METRICS */}
          <div className="space-y-6">

            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <h3 className="text-base md:text-lg font-medium mb-2">
                Technical Depth
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-indigo-400">
                {analysis.depthScore}%
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <h3 className="text-base md:text-lg font-medium mb-2">
                Completion Rate
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-indigo-400">
                {analysis.completionScore}%
              </p>
            </div>

          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-14">

          <button
            onClick={() => navigate("/setup")}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-primary shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          >
            Retry Interview
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full md:w-auto px-6 py-3 rounded-xl border border-white/20"
          >
            Dashboard
          </button>

        </div>

      </div>
    </div>
  );
}

export default Feedback;