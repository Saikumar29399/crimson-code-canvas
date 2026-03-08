import { motion } from "framer-motion";
import javaBg from "@/assets/java-bg.png";

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
  { text: "{ }", size: "text-sm", x: "85%", y: "75%", duration: 20, delay: 1 },
  { text: "⬡", size: "text-3xl", x: "10%", y: "55%", duration: 26, delay: 4.5 },
  { text: "//", size: "text-lg", x: "35%", y: "85%", duration: 18, delay: 2 },
  { text: ":::", size: "text-xl", x: "75%", y: "30%", duration: 22, delay: 0 },
  { text: "fn()", size: "text-xs", x: "55%", y: "12%", duration: 19, delay: 3 },
  { text: "→", size: "text-2xl", x: "20%", y: "90%", duration: 21, delay: 1 },
];

const FloatingTechBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Java background images */}
    {[
      { x: "5%", y: "8%", size: 120, dur: 24, del: 0 },
      { x: "75%", y: "20%", size: 100, dur: 28, del: 1.5 },
      { x: "40%", y: "45%", size: 90, dur: 22, del: 3 },
      { x: "85%", y: "65%", size: 110, dur: 26, del: 0.5 },
      { x: "15%", y: "75%", size: 80, dur: 30, del: 2 },
      { x: "55%", y: "10%", size: 70, dur: 20, del: 4 },
      { x: "30%", y: "60%", size: 95, dur: 25, del: 1 },
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
      { w: 100, h: 100, x: "88%", y: "10%", dur: 32, del: 3 },
      { w: 70, h: 70, x: "30%", y: "40%", dur: 27, del: 1.5 },
    ].map((shape, i) => (
      <motion.div
        key={`shape-${i}`}
        className="absolute rounded-full border-2 border-primary/20"
        style={{
          width: shape.w,
          height: shape.h,
          left: shape.x,
          top: shape.y,
        }}
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

    {/* Connecting lines / circuit traces */}
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
          transition={{
            duration: line.dur,
            delay: line.del,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  </div>
);

export default FloatingTechBackground;
