import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-darkbg text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      {/* HERO */}
      <div className="flex flex-col items-center justify-center text-center 
                      px-5 sm:px-6 
                      pt-28 sm:pt-36 md:pt-44 
                      min-h-[85vh]">

        {/* 🔥 LOGO */}
        <motion.img
          src="/favicon.png"
          alt="logo"
          initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                     mb-6 sm:mb-8"
        />

        {/* 🔥 HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl 
                     font-bold tracking-tight 
                     leading-snug 
                     bg-gradient-to-r from-primary to-secondary 
                     bg-clip-text text-transparent"
        >
          Crack Interviews with AI
        </motion.h1>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 sm:mt-6 text-gray-400 
                     text-sm sm:text-base 
                     max-w-md sm:max-w-xl"
        >
          Practice. Analyze. Improve.  
          Your personalized AI-powered mock interview system.
        </motion.p>

        {/* 🔥 BUTTON */}
        <Link to="/resume">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center 
                       mt-6 sm:mt-8 
                       px-6 sm:px-8 py-3 sm:py-4 
                       text-sm sm:text-base font-semibold 
                       rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r 
                             from-primary to-secondary 
                             blur-lg opacity-70 
                             group-hover:opacity-100 transition"></span>

            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Start Interview
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </span>
          </motion.button>
        </Link>
      </div>

      {/* FEATURES */}
      <FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                        gap-6 sm:gap-8 
                        px-5 sm:px-6 md:px-10 
                        mt-16 sm:mt-24 pb-20 
                        max-w-6xl mx-auto">
          
          <FeatureCard
            title="AI Resume Analysis"
            desc="Smart skill extraction and job-fit scoring."
          />
          <FeatureCard
            title="Mock Interview Engine"
            desc="Simulate real technical interviews."
          />
          <FeatureCard
            title="Performance Dashboard"
            desc="Track weaknesses and improve strategically."
          />

        </div>
      </FadeInSection>
    </div>
  );
}

export default Landing;