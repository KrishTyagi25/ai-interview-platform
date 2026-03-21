import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function InterviewRoom() {
  const location = useLocation();
  const navigate = useNavigate();

  const { role, difficulty, duration } = location.state || {};

  const question = "Explain the Virtual DOM in React.";

  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const endInterview = () => {
    const updatedAnswers = [...answers, answer];

    navigate("/feedback", {
      state: {
        role,
        difficulty,
        answers: updatedAnswers,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#121225] to-[#0d0d18] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-10">

        {/* HEADER */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Live Interview
        </h1>

        {/* INFO BAR */}
        <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-400">
          <span>Role: {role}</span>
          <span>•</span>
          <span>Difficulty: {difficulty}</span>
          <span>•</span>
          <span>Duration: {duration}</span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {/* QUESTION */}
            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <h2 className="text-base md:text-lg font-medium mb-2">
                Question
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                {question}
              </p>
            </div>

            {/* ANSWER */}
            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <h2 className="text-base md:text-lg font-medium mb-3">
                Your Answer
              </h2>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Start explaining your answer here..."
                className="w-full h-48 md:h-60 bg-[#0d0d18] border border-white/10 rounded-xl p-3 text-sm md:text-base text-gray-300 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* CAMERA */}
            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <h2 className="text-base font-medium mb-3">Camera</h2>

              <div className="bg-black h-36 md:h-40 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Camera Preview
              </div>
            </div>

            {/* CHAT */}
            <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <h2 className="text-base font-medium mb-3">
                Live Chat
              </h2>

              <div className="h-28 md:h-32 overflow-y-auto text-xs md:text-sm text-gray-400 space-y-2 mb-3">
                <p>Interviewer: Please explain clearly.</p>
                <p>You: Sure.</p>
              </div>

              <input
                type="text"
                placeholder="Type message..."
                className="w-full bg-[#0d0d18] border border-white/10 rounded-lg p-2 text-sm text-gray-300 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">

          <div className="text-sm md:text-base font-medium">
            Time Left: 02:30
          </div>

          <div className="flex gap-3 w-full md:w-auto">

            <button
              onClick={endInterview}
              className="flex-1 md:flex-none px-5 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition text-sm"
            >
              End
            </button>

            <button className="flex-1 md:flex-none px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition text-sm">
              Next
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default InterviewRoom;