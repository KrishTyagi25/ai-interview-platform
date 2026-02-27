import { motion } from 'framer-motion';
function AnimatedBackground() {
    return (
        <div className='absolute inset-0 -z-10 overflow-hidden'>
            <motion.div animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
            }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", }}
                className='absolute w-96 h-96 bg-primary opacity-30 blur-3xl rounded-full top-[-100px] left-[-100px]' />
            <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear", }}
                className='absolute w-96 h-96 bg-secondary opacity-30 blur-3xl rounded-full bottom-[-100px] right-[-100px]' />
        </div>)
}
export default AnimatedBackground;