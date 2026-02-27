import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

function Interview() {
    const location = useLocation();
    const navigate = useNavigate();

    const { role, difficulty, duration } = location.state || {};

    // Convert duration to seconds
    const durationMap = {
        "15 min": 15 * 60,
        "30 min": 30 * 60,
        "45 min": 45 * 60,
    };

    const totalTime = durationMap[duration] || 900;

    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");
    const [answers, setAnswers] = useState([]);

    const questions = [
        "Explain the difference between var, let, and const.",
        "What is a closure in JavaScript?",
        "How does React reconciliation work?",
        "Explain REST vs GraphQL.",
        "How would you optimize a large React application?"
    ];

    // TIMER
    useEffect(() => {
        if (timeLeft <= 0) {
            handleFinish();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const handleNext = () => {
        if (!answer.trim()) return;

        const updatedAnswers = [...answers, answer];
        setAnswers(updatedAnswers);
        setAnswer("");

        if (questionIndex + 1 < questions.length) {
            setQuestionIndex(prev => prev + 1);
        } else {
            handleFinish(updatedAnswers);
        }
    };

    const handleFinish = (finalAnswers = answers) => {
        navigate("/feedback", {
            state: {
                role,
                difficulty,
                answers: finalAnswers
            }
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] via-[#121225] to-[#0d0d18] text-white relative overflow-hidden">      <AnimatedBackground />
            <Navbar />

            <div className="relative z-10 flex max-w-7xl mx-auto px-6 pt-32 pb-20 gap-10">

                {/* SIDEBAR */}
                <div className="w-72 bg-gradient-to-b from-indigo-500/10 to-purple-500/5 backdrop-blur-2xl border border-indigo-400/20 rounded-2xl p-6 shadow-[0_0_60px_rgba(99,102,241,0.25)] transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Session Details
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p><span className="text-white font-medium">Role:</span> {role}</p>
                        <p><span className="text-white font-medium">Difficulty:</span> {difficulty}</p>
                        <p><span className="text-white font-medium">Duration:</span> {duration}</p>
                        <p className="text-indigo-400 font-semibold text-lg tracking-wide">⏱ {formatTime()}</p>
                        <p>Question: {questionIndex + 1} / {questions.length}</p>
                    </div>

                    <button
                        onClick={() => handleFinish()}
                        className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/40 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300"          >
                        End Interview
                    </button>
                </div>

                {/* MAIN INTERVIEW AREA */}
                <div className="flex-1">

                    {/* Question Card */}
                    <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-2xl border border-indigo-400/20 rounded-2xl p-8 shadow-[0_0_80px_rgba(139,92,246,0.25)] transition-all duration-500"                    >
                        <h2 className="text-2xl font-semibold mb-6">
                            {questions[questionIndex]}
                        </h2>

                        {/* Answer Box */}
                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Type your answer here..."
                            className="w-full h-40 bg-black/30 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition resize-none"
                        />

                        {/* Controls */}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={handleNext}
                                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary/80 shadow-[0_0_30px_rgba(99,102,241,0.5)] transition"
                            >
                                {questionIndex + 1 === questions.length ? "Finish Interview" : "Submit & Next"}
                            </button>

                            <button
                                onClick={() => setQuestionIndex(prev => prev + 1)}
                                className="px-8 py-3 rounded-xl border border-white/20 hover:border-primary/40 transition"
                            >
                                Skip
                            </button>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default Interview;