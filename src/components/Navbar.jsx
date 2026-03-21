import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 
                 bg-white/5 backdrop-blur-md border-b border-white/10"
    >
      
      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src="/favicon.png"
          alt="logo"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-md"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
          Evalix
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-300">
        <button className="hover:text-white transition">
          Login
        </button>

        <button className="px-4 py-1.5 sm:px-5 sm:py-2 
                           bg-gradient-to-r from-primary to-secondary 
                           rounded-full text-white font-medium 
                           hover:scale-105 transition">
          Get Started
        </button>
      </div>

    </motion.nav>
  );
}

export default Navbar;