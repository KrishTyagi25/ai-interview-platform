import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { useNavigate } from "react-router-dom";

function ResumeUpload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setScanning(true);

      setTimeout(() => {
        setScanning(false);
        setSkills(["React", "JavaScript", "DSA", "Operating Systems"]);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-darkbg text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* LEFT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug"
          >
            Resume Intelligence Engine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed"
          >
            Upload your resume and let our AI extract key skills,
            identify weak areas, and generate a personalized
            interview roadmap tailored to your goals.
          </motion.p>

          <div className="mt-8 space-y-3 text-xs sm:text-sm text-gray-400">
            <p>• Instant skill extraction</p>
            <p>• Weak topic detection</p>
            <p>• Personalized interview preparation</p>
            <p>• Performance readiness insights</p>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
        >
          <h3 className="text-lg font-medium mb-6">
            Upload Resume
          </h3>

          <label className="w-full h-36 sm:h-44 border border-primary/40 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary transition">
            <input type="file" className="hidden" onChange={handleFile} />
            <p className="text-gray-300 text-sm">
              Click to upload or drag and drop
            </p>
            <p className="text-gray-500 text-xs mt-2">
              PDF format recommended
            </p>
          </label>

          {file && (
            <div className="mt-6 bg-black/40 border border-white/10 rounded-lg p-4">
              <p className="text-primary text-sm font-medium">
                {file.name}
              </p>
            </div>
          )}

          {scanning && (
            <div className="mt-6 flex items-center gap-3 text-sm text-cyan-400">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              AI is analyzing your resume...
            </div>
          )}

          {!scanning && skills.length > 0 && (
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-4">
                Extracted Skills
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-sm bg-primary/20 border border-primary/40 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/setup")}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary rounded-xl font-semibold shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:bg-primary/80 transition"
            >
              Start Mock Interview
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResumeUpload;