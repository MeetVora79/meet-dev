import { motion } from "framer-motion";

function Loader() {
  return (
    <div role="status" aria-label="Loading portfolio" className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950">

      <div className="relative flex flex-col items-center">
        <span className="sr-only">Loading portfolio</span>

        {/* Glow */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="absolute h-44 w-44 rounded-full bg-violet-600/20 blur-3xl"
        />

        {/* Name */}
        <motion.h1
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-5xl font-black text-white md:text-7xl"
        >
          Meet Vora
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="mt-4 text-sm uppercase tracking-[0.4em] text-cyan-300"
        >
          MERN Stack Developer
        </motion.p>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-10 h-[3px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />

      </div>

    </div>
  );
}

export default Loader;