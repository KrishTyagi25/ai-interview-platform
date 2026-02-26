
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom"
function Landing() {
    return (<div className="... cursor-pointer transition-all duration-300 min-h-screen bg-darkbg text-white relative overflow-hidden"
        style={{ boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
    >
        <AnimatedBackground />
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center px-6 pt-40 min-h-[80vh]">
            <motion.h1 initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" >
                Crack Interviews with AI
            </motion.h1>
            <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-gray-400 max-w-xl" >
                Practice. Analyze. Improve. Your personalized AI-powered mock interview system.
            </motion.p>
            <Link to="/resume">
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center justify-center mt-8 px-8 py-4 font-bold text-white rounded-full overflow-hidden group" >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></span>
                    <span className="relative z-10 flex items-center gap-3">
                        Start Interview
                        <FaArrowRight className="group-hover:translate-x-2 transition" />
                    </span>
                </motion.button>
            </Link>
        </div>
        <FadeInSection>
            <div className="grid md:grid-cols-3 gap-8 px-8 mt-32 pb-32 max-w-6xl mx-auto">
                <FeatureCard title="AI Resume Analysis"
                    desc="Smart skill extraction and job-fit scoring." />
                <FeatureCard title="Mock Interview Engine" desc="Simulate real technical interviews." />
                <FeatureCard title="Performance Dashboard" desc="Track weaknesses and improve strategically." />
            </div> </FadeInSection> </div>);
}
export default Landing;