import { motion } from "framer-motion";
import gearImg from "@/assets/gear-line.png";
import vaporImg from "@/assets/vapor-line.png";
import javaVaporImg from "@/assets/java-vapor.png";
import javaBg from "@/assets/java-line.png";

const techSymbols = [
  { text: "{ }", size: "text-2xl", x: "5%", y: "10%", duration: 18, delay: 0 },
  { text: "</>", size: "text-3xl", x: "15%", y: "35%", duration: 22, delay: 2 },
  { text: "λ", size: "text-4xl", x: "80%", y: "15%", duration: 20, delay: 1 },
  { text: "SQL", size: "text-sm", x: "90%", y: "40%", duration: 25, delay: 3 },
  { text: "API", size: "text-xs", x: "70%", y: "60%", duration: 19, delay: 4 },
  { text: "☁", size: "text-3xl", x: "25%", y: "70%", duration: 23, delay: 1.5 },
  { text: "⚙", size: "text-2xl", x: "60%", y: "80%", duration: 21, delay: 2.5 },
  { text: "01", size: "text-lg", x: "40%", y: "20%", duration: 17, delay: 0.5 },
  { text: ">>", size: "text-xl", x: "50%", y: "50%", duration: 24, delay: 3.5 },
];

const FloatingTechBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Large floating gears */}
    {[
      { x: "2%", y: "5%", size: 200, dur: 40, del: 0, rotate: 360 },
      { x: "78%", y: "15%", size: 160, dur: 50, del: 2, rotate: -360 },
      { x: "55%", y: "55%", size: 220, dur: 45, del: 1, rotate: 360 },
      { x: "10%", y: "65%", size: 180, dur: 55, del: 3, rotate: -360 },
      { x: "85%", y: "75%", size: 140, dur: 35, del: 1.5, rotate: 360 },
      { x: "35%", y: "85%", size: 170, dur: 48, del: 2.5, rotate: -360 },
    ].map((item, i) => (
      <motion.img
        key={`gear-${i}`}
        src={gearImg}
        alt=""
        className="absolute select-none"
        style={{ left: item.x, top: item.y, width: item.size, height: item.size, opacity: 0.15 }}
        animate={{
          rotate: [0, item.rotate],
          y: [0, -15, 0, 10, 0],
        }}
        transition={{
          rotate: { duration: item.dur, repeat: Infinity, ease: "linear" },
          y: { duration: item.dur * 0.6, delay: item.del, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    ))}

    {/* Vapor / steam wisps */}
    {[
      { x: "8%", y: "20%", size: 150, dur: 18, del: 0 },
      { x: "70%", y: "10%", size: 180, dur: 22, del: 1 },
      { x: "45%", y: "40%", size: 130, dur: 20, del: 2 },
      { x: "20%", y: "50%", size: 160, dur: 24, del: 0.5 },
      { x: "80%", y: "55%", size: 140, dur: 19, del: 3 },
      { x: "60%", y: "75%", size: 170, dur: 21, del: 1.5 },
      { x: "30%", y: "30%", size: 120, dur: 26, del: 2.5 },
    ].map((item, i) => (
      <motion.img
        key={`vapor-${i}`}
        src={vaporImg}
        alt=""
        className="absolute select-none"
        style={{ left: item.x, top: item.y, width: item.size, height: item.size, opacity: 0.2 }}
        animate={{
          y: [0, -40, -20, -50, 0],
          x: [0, 8, -5, 10, 0],
          opacity: [0.1, 0.25, 0.15, 0.2, 0.1],
          scale: [1, 1.15, 1.05, 1.2, 1],
        }}
        transition={{
          duration: item.dur,
          delay: item.del,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Java coffee cup vapors */}
    {[
      { x: "12%", y: "12%", size: 110, dur: 22, del: 0 },
      { x: "65%", y: "25%", size: 90, dur: 26, del: 1.5 },
      { x: "40%", y: "60%", size: 100, dur: 24, del: 3 },
      { x: "88%", y: "45%", size: 85, dur: 20, del: 0.5 },
      { x: "22%", y: "80%", size: 95, dur: 28, del: 2 },
    ].map((item, i) => (
      <motion.img
        key={`java-vapor-${i}`}
        src={javaVaporImg}
        alt=""
        className="absolute select-none"
        style={{ left: item.x, top: item.y, width: item.size, height: item.size, opacity: 0.2 }}
        animate={{
          y: [0, -25, 0, 20, 0],
          x: [0, 12, -8, 15, 0],
          rotate: [0, 5, -3, 4, 0],
        }}
        transition={{
          duration: item.dur,
          delay: item.del,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Java line art */}
    {[
      { x: "50%", y: "8%", size: 80, dur: 24, del: 0 },
      { x: "75%", y: "68%", size: 70, dur: 28, del: 1.5 },
      { x: "5%", y: "42%", size: 90, dur: 22, del: 3 },
    ].map((item, i) => (
      <motion.img
        key={`java-${i}`}
        src={javaBg}
        alt=""
        className="absolute rounded-lg select-none"
        style={{ left: item.x, top: item.y, width: item.size, height: item.size, opacity: 0.25 }}
        animate={{
          y: [0, -20, 0, 15, 0],
          x: [0, 10, -8, 12, 0],
          rotate: [0, 5, -3, 4, 0],
        }}
        transition={{
          duration: item.dur,
          delay: item.del,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Tech symbols */}
    {techSymbols.map((item, i) => (
      <motion.span
        key={i}
        className={`absolute font-mono ${item.size} text-primary select-none font-bold`}
        style={{ left: item.x, top: item.y }}
        animate={{
          y: [0, -30, 0, 25, 0],
          x: [0, 15, -10, 20, 0],
          rotate: [0, 8, -5, 3, 0],
          opacity: [0.12, 0.25, 0.18, 0.3, 0.12],
        }}
        transition={{
          duration: item.duration,
          delay: item.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {item.text}
      </motion.span>
    ))}

    {/* Floating geometric shapes */}
    {[
      { w: 120, h: 120, x: "8%", y: "25%", dur: 30, del: 0 },
      { w: 80, h: 80, x: "75%", y: "45%", dur: 25, del: 2 },
      { w: 60, h: 60, x: "45%", y: "70%", dur: 28, del: 1 },
    ].map((shape, i) => (
      <motion.div
        key={`shape-${i}`}
        className="absolute rounded-full border-2 border-primary/20"
        style={{ width: shape.w, height: shape.h, left: shape.x, top: shape.y }}
        animate={{
          y: [0, -40, 0, 30, 0],
          x: [0, 20, -15, 10, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: shape.dur,
          delay: shape.del,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Circuit trace lines */}
    <svg className="absolute inset-0 w-full h-full">
      {[
        { x1: "10%", y1: "20%", x2: "30%", y2: "35%", dur: 20, del: 0 },
        { x1: "60%", y1: "15%", x2: "80%", y2: "30%", dur: 22, del: 1 },
        { x1: "40%", y1: "60%", x2: "65%", y2: "75%", dur: 25, del: 2 },
      ].map((line, i) => (
        <motion.line
          key={`line-${i}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          animate={{ strokeOpacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: line.dur, delay: line.del, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  </div>
);

export default FloatingTechBackground;
