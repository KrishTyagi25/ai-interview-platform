import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

function Feedback() {
  const location = useLocation();
  const navigate = useNavigate();

  const { role, difficulty, answers = [] } = location.state || {};

  const totalQuestions = 5;

  // 🔥 REALISTIC SCORING LOGIC
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

    const avgLength = totalLength / completed || 0;
    const completionScore = (completed / totalQuestions) * 100;

    // Depth score based on length
    let depthScore = Math.min(avgLength / 5, 100);

    // Difficulty multiplier
    const difficultyMultiplier =
      difficulty === "Hard"
        ? 1.1
        : difficulty === "Medium"
        ? 1
        : 0.9;

    depthScore = depthScore * difficultyMultiplier;

    const overallScore = Math.min(
      Math.round((depthScore * 0.6 + completionScore * 0.4)),
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

if (!analysis) {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <h1>No interview data found. Please complete interview first.</h1>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#121225] to-[#0d0d18] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Technical Interview Report
            </h1>
            <p className="text-gray-400 mb-6">
              Role: <span className="text-white">{role}</span> | Difficulty:{" "}
              <span className="text-white">{difficulty}</span>
            </p>

            <div className="bg-indigo-500/10 border border-indigo-400/30 p-6 rounded-2xl">
              <p className="text-gray-300">
                You answered <span className="text-white font-semibold">{analysis.completed}</span> out of {totalQuestions} questions.
              </p>
              <p className="text-gray-300 mt-2">
                Average answer length:{" "}
                <span className="text-white font-semibold">
                  {analysis.avgLength} characters
                </span>
              </p>
            </div>
          </div>

          {/* SCORE CIRCLE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 flex items-center justify-center rounded-full border-8 border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.6)]">
              <span className="text-5xl font-bold">
                {analysis.overallScore}%
              </span>
            </div>
          </motion.div>
        </div>

        {/* BREAKDOWN */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Technical Depth</h3>
            <p className="text-3xl font-bold text-indigo-400">
              {analysis.depthScore}%
            </p>
            <p className="text-gray-400 mt-2">
              Based on explanation detail and answer length.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Completion Rate</h3>
            <p className="text-3xl font-bold text-indigo-400">
              {analysis.completionScore}%
            </p>
            <p className="text-gray-400 mt-2">
              Based on number of attempted questions.
            </p>
          </div>

        </div>

        {/* ACTION */}
        <div className="flex justify-center gap-6 mt-20">
          <button
            onClick={() => navigate("/interview")}
            className="px-8 py-3 rounded-xl bg-primary shadow-[0_0_30px_rgba(99,102,241,0.5)] transition"
          >
            Retry Interview
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-3 rounded-xl border border-white/20 hover:border-primary transition"
          >
            Go To Dashboard
          </button>
        </div>

      </div>
    </div>
  );
}

export default Feedback;