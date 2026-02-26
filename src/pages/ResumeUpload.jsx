import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

function ResumeUpload() {
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Resume Intelligence
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Let AI analyze your resume and extract skills,
            detect weak areas, and generate an interview roadmap.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
        >
          {/* DROP ZONE */}
          <motion.label
            whileHover={{ scale: 1.02 }}
            className="w-full h-52 border-2 border-dashed border-primary/50 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition hover:bg-white/5"
          >
            <input
              type="file"
              className="hidden"
              onChange={handleFile}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-4xl mb-4"
            >
              📄
            </motion.div>

            <p className="text-gray-300 text-lg">
              Drag & Drop or Click to Upload
            </p>

            <p className="text-gray-500 text-sm mt-2">
              PDF recommended
            </p>
          </motion.label>

          {/* FILE PREVIEW */}
          {file && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-xl p-6"
            >
              <p className="text-white font-semibold">{file.name}</p>
            </motion.div>
          )}

          {/* SCANNING ANIMATION */}
          {scanning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center"
            >
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-secondary text-lg">
                AI is analyzing your resume...
              </p>
            </motion.div>
          )}

          {/* SKILLS */}
          {!scanning && skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                Extracted Skills
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="px-5 py-2 bg-primary/20 border border-primary rounded-full text-sm hover:bg-primary hover:text-white transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ResumeUpload;