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
        answers: updatedAnswers
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#121225] to-[#0d0d18] text-white relative overflow-hidden">

      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-10">

        <h1 className="text-3xl font-bold mb-8">Live Interview</h1>

        <div className="mb-6 text-gray-400">
          <p>Role: {role}</p>
          <p>Difficulty: {difficulty}</p>
          <p>Duration: {duration}</p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-6">

            {/* QUESTION PANEL */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
              <h2 className="text-lg font-semibold mb-2">Question</h2>
              <p className="text-gray-300">{question}</p>
            </div>

            {/* ANSWER AREA */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">

              <h2 className="text-lg font-semibold mb-4">
                Your Answer
              </h2>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Start explaining your answer here..."
                className="w-full h-60 bg-[#0d0d18] border border-white/10 rounded-xl p-4 text-gray-300 focus:outline-none"
              />

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* VIDEO PREVIEW */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">

              <h2 className="text-lg font-semibold mb-3">Camera</h2>

              <div className="bg-black h-40 rounded-lg flex items-center justify-center text-gray-500">
                Camera Preview
              </div>

            </div>

            {/* CHAT PANEL */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">

              <h2 className="text-lg font-semibold mb-3">
                Live Chat
              </h2>

              <div className="h-32 overflow-y-auto text-sm text-gray-400 space-y-2 mb-3">
                <p>Interviewer: Please explain clearly.</p>
                <p>You: Sure.</p>
              </div>

              <input
                type="text"
                placeholder="Type message..."
                className="w-full bg-[#0d0d18] border border-white/10 rounded-lg p-2 text-gray-300 focus:outline-none"
              />

            </div>

          </div>

        </div>

        {/* CONTROLS */}
        <div className="mt-6 flex justify-between items-center bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">

          <div className="text-lg font-semibold">
            Time Left: 02:30
          </div>

          <div className="flex gap-4">

            <button
              onClick={endInterview}
              className="px-5 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition"
            >
              End Interview
            </button>

            <button className="px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
              Next Question
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default InterviewRoom;