import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1e293b] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-lg w-full"
    >
      <img
        src={profile}
        alt="profile"
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-indigo-500 flex-shrink-0"
      />

      <div className="w-full">
        <h1 className="text-lg sm:text-xl font-semibold text-white">
          Krish Tyagi
        </h1>

        <p className="text-gray-400 text-sm">
          Frontend Developer
        </p>

        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          Passionate about building modern web apps and preparing for product-based companies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button className="px-3 py-1.5 text-sm bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
            Edit
          </button>

          <button className="px-3 py-1.5 text-sm bg-gray-700 rounded-lg hover:bg-gray-600 transition">
            Resume
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileHeader;