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

  const roles = ["Frontend Developer", "Backend Developer", "Full-Stack Developer", "DSA"];
  const difficulties = ["Easy", "Medium", "Hard"];
  const durations = ["15 min", "30 min", "45 min"];

  const handleStart = () => {
    navigate("/interview-room", {
      state: { role, difficulty, duration }
    });
  };

  const Card = ({ value, selected, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`cursor-pointer px-5 py-4 sm:px-6 sm:py-5 rounded-xl border text-sm sm:text-base transition backdrop-blur-lg
      ${
        selected
          ? "border-primary bg-primary/20 shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          : "border-white/10 bg-white/5 hover:border-primary/40"
      }`}
    >
      {value}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-darkbg text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Configure Your Interview
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base max-w-xl mx-auto">
            Customize your AI mock interview experience and simulate real-world hiring rounds.
          </p>
        </div>

        {/* ROLE */}
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-medium mb-6 text-center">
            Select Role
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
        <div className="mb-12">
          <h3 className="text-lg sm:text-xl font-medium mb-6 text-center">
            Difficulty Level
          </h3>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
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
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-medium mb-6 text-center">
            Interview Duration
          </h3>

          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
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

        {/* BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={handleStart}
            disabled={!role || !difficulty || !duration}
            className={`px-8 sm:px-10 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all
            ${
              role && difficulty && duration
                ? "bg-gradient-to-r from-primary to-secondary shadow-[0_0_40px_rgba(99,102,241,0.5)]"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            Start AI Interview
          </button>
        </div>

      </div>
    </div>
  );
}

export default InterviewSetup;