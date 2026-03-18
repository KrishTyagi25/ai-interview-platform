import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-white/5 backdrop-blur-md border-b border-white/10"
    >
      
      {/* 🔥 LEFT: LOGO + TEXT */}
      <div className="flex items-center gap-3">
        <img 
          src="/favicon.png"   // 👈 public folder se aayega
          alt="logo"
          className="w-8 h-8 rounded-md"
        />
        <h1 className="text-white text-2xl font-bold tracking-wide">
          AI Interview
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-x-6 text-gray-300">
        <button className="hover:text-white transition">
          Login
        </button>

        <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>

    </motion.nav>
  );
}

export default Navbar;