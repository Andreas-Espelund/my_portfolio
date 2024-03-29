'use client'
import { motion } from "framer-motion";

export default function Blob() {
  return (

      <motion.svg
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black stroke-primary h-[50vh] md:h-[80vh] hidden md:block"
      >
        <motion.path
        
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray="0 1"
          fill="none"
          d="M415,275Q422,310,417.5,354Q413,398,378,423Q343,448,299,423Q255,398,227.5,389.5Q200,381,151,401.5Q102,422,86,383.5Q70,345,65,309.5Q60,274,78.5,243.5Q97,213,87.5,176.5Q78,140,107.5,122Q137,104,160.5,74Q184,44,222,33Q260,22,293.5,43.5Q327,65,362,81Q397,97,386,142.5Q375,188,391.5,214Q408,240,415,275Z"
        />
      </motion.svg>
    
  );
}
