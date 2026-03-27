import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import AnimatedBackground from "../../components/AnimatedBackground";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha] = useState("X7K9P");

  const handleLogin = () => {
    if (!email || !password || !captcha) {
      alert("Fill all fields");
      return;
    }

    if (captcha !== generatedCaptcha) {
      alert("Captcha incorrect ❌");
      return;
    }

    alert("Login Successful 🚀");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      <AnimatedBackground />
      <Navbar />

      {/* 🌊 FLOWING WAVE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* WAVE 1 */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute top-1/2 left-0 w-[200%] opacity-30 blur-xl"
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            fill="url(#gradient)"
            d="M0,160L80,144C160,128,320,96,480,101.3C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160V320H0Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* WAVE 2 */}
        <motion.svg
          viewBox="0 0 1440 320"
          className="absolute top-1/2 left-0 w-[200%] opacity-20 blur-xl"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            fill="url(#gradient2)"
            d="M0,200L60,186.7C120,173,240,147,360,138.7C480,131,600,139,720,160C840,181,960,213,1080,208C1200,203,1320,160,1380,138.7L1440,117V320H0Z"
          />
          <defs>
            <linearGradient id="gradient2" x1="0" x2="1">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </motion.svg>

      </div>

      {/* 🔥 LOGIN CARD */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8">
            Secure Login
          </h2>

          {/* EMAIL */}
          <div className="mb-5">
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-lg bg-[#0f172a] border border-white/10 focus:outline-none focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-5">
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-lg bg-[#0f172a] border border-white/10 focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* CAPTCHA */}
          <div className="mb-6">
            <label className="text-sm text-gray-400">Verification</label>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg tracking-widest font-bold text-sm">
                {generatedCaptcha}
              </div>

              <input
                type="text"
                placeholder="Enter code"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10 focus:outline-none focus:border-indigo-500"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />

            </div>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 font-semibold shadow-[0_0_30px_rgba(99,102,241,0.6)]"
          >
            Login
          </motion.button>

        </motion.div>
      </div>
    </div>
  );
}

export default Login;