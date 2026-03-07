import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1e293b] rounded-2xl p-8 flex items-center gap-6 shadow-lg"
    >
      <img
        src={profile}
        alt="profile"
        className="w-24 h-24 rounded-full border-2 border-indigo-500"
      />

      <div>
        <h1 className="text-2xl font-bold text-white">Krish Tyagi</h1>
        <p className="text-gray-400">Frontend Developer</p>

        <p className="text-gray-500 mt-2 max-w-lg">
          Passionate about building modern web applications and preparing for
          product-based companies.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-500 transition">
            Edit Profile
          </button>

          <button className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition">
            Download Resume
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileHeader;