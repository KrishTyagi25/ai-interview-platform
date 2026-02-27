import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { useNavigate } from "react-router-dom";

function InterviewSetup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");

  const roles = ["Frontend Developer", "Backend Developer", "Full Stack", "DSA Focus"];
  const difficulties = ["Easy", "Medium", "Hard"];
  const durations = ["15 min", "30 min", "45 min"];

  const handleStart = () => {
    if (role && difficulty && duration) {
      navigate("/interview");
    }
  };

  const Card = ({ value, selected, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`cursor-pointer px-8 py-5 rounded-2xl border transition text-center backdrop-blur-lg
      ${
        selected
          ? "border-primary bg-primary/20 shadow-[0_0_40px_rgba(99,102,241,0.5)]"
          : "border-white/10 bg-white/5 hover:border-primary/50"
      }`}
    >
      <span className="text-lg font-medium">{value}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-darkbg text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Configure Your Interview
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Customize your AI mock interview experience and simulate real-world hiring rounds.
          </p>
        </motion.div>

        {/* ROLE SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Select Role
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((r) => (
              <Card
                key={r}
                value={r}
                selected={role === r}
                onClick={() => setRole(r)}
              />
            ))}
          </div>
        </div>

        {/* DIFFICULTY */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Difficulty Level
          </h3>

          <div className="flex justify-center gap-8 flex-wrap">
            {difficulties.map((d) => (
              <Card
                key={d}
                value={d}
                selected={difficulty === d}
                onClick={() => setDifficulty(d)}
              />
            ))}
          </div>
        </div>

        {/* DURATION */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Interview Duration
          </h3>

          <div className="flex justify-center gap-8 flex-wrap">
            {durations.map((t) => (
              <Card
                key={t}
                value={t}
                selected={duration === t}
                onClick={() => setDuration(t)}
              />
            ))}
          </div>
        </div>

        {/* START BUTTON */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: role && difficulty && duration ? 1.05 : 1 }}
          whileTap={{ scale: 0.97 }}
        >
          <button
            onClick={handleStart}
            disabled={!role || !difficulty || !duration}
            className={`px-14 py-4 rounded-2xl text-lg font-semibold transition-all duration-300
            ${
              role && difficulty && duration
                ? "bg-gradient-to-r from-primary to-secondary shadow-[0_0_60px_rgba(99,102,241,0.6)]"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            Start AI Interview
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default InterviewSetup;