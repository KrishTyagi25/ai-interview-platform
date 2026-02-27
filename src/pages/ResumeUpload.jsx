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

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-20">

        {/* LEFT SECTION */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold tracking-tight leading-tight"
          >
            Resume Intelligence Engine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-6 leading-relaxed text-lg"
          >
            Upload your resume and let our AI extract key skills,
            identify weak areas, and generate a personalized
            interview roadmap tailored to your goals.
          </motion.p>

          <div className="mt-10 space-y-4 text-sm text-gray-400">
            <p>• Instant skill extraction</p>
            <p>• Weak topic detection</p>
            <p>• Personalized interview preparation</p>
            <p>• Performance readiness insights</p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
        >
          <h3 className="text-xl font-medium mb-8">
            Upload Resume
          </h3>

          {/* Dropzone */}
          <label className="w-full h-44 border border-primary/40 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary transition">
            <input
              type="file"
              className="hidden"
              onChange={handleFile}
            />
            <p className="text-gray-300 text-sm">
              Click to upload or drag and drop
            </p>
            <p className="text-gray-500 text-xs mt-2">
              PDF format recommended
            </p>
          </label>

          {/* File Preview */}
          {file && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 bg-black/40 border border-white/10 rounded-lg p-4"
            >
              <p className="text-primary text-sm font-medium">
                {file.name}
              </p>
            </motion.div>
          )}

          {/* Scanning Loader */}
          {scanning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 flex items-center gap-3 text-sm text-cyan-400"
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              AI is analyzing your resume...
            </motion.div>
          )}

          {/* Extracted Skills */}
          {!scanning && skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6"
            >
              <p className="text-sm text-gray-400 mb-4">
                Extracted Skills
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-1.5 text-sm bg-primary/20 border border-primary/40 rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="flex justify-center mt-10"
          
          >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/setup")}
            className="mt-10 px-10 py-3 bg-primary rounded-xl text-lg font-semibold shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:bg-primary/80 transition"
            >
            Start Mock Interview
          </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ResumeUpload;