import { motion } from "framer-motion";

function FeatureCard({ title, desc }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300"
        >
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{desc}</p>
        </motion.div>
    );
}

export default FeatureCard;