import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-violet-500 to-cyan-500"
      style={{
        scaleX: scrollYProgress,
        width: "100%",
      }}
    />
  );
}

export default ScrollProgress;