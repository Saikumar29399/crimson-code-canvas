import { useScroll, useTransform, motion } from "framer-motion";
import bgScroll1 from "@/assets/bg-scroll-1.jpg";
import bgScroll2 from "@/assets/bg-scroll-2.jpg";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.15, 0.25, 0.2, 0.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.1, 0.2, 0.25, 0.15]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary scroll background - swirling light trails */}
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0"
      >
        <img src={bgScroll1} alt="" className="w-full h-[130%] object-cover" />
      </motion.div>

      {/* Secondary scroll background */}
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute inset-0"
      >
        <img src={bgScroll2} alt="" className="w-full h-[140%] object-cover" />
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
    </div>
  );
};

export default ParallaxBackground;
