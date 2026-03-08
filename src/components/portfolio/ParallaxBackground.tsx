import { useScroll, useTransform, motion } from "framer-motion";
import parallax1 from "@/assets/parallax-1.jpg";
import parallax2 from "@/assets/parallax-2.jpg";
import parallax3 from "@/assets/parallax-3.jpg";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 opacity-10"
      >
        <img src={parallax1} alt="" className="w-full h-[120%] object-cover" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 opacity-5"
      >
        <img src={parallax2} alt="" className="w-full h-[130%] object-cover" />
      </motion.div>
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 opacity-[0.03]"
      >
        <img src={parallax3} alt="" className="w-full h-[140%] object-cover" />
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;
