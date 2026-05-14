import {
    motion,
  } from "framer-motion";
  
  import logo
    from "../assets/logo.png";
  
  export default function FloatingSymbol() {
  
    return (
  
      <motion.div
  
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
  
        animate={{
  
          opacity: 1,
  
          scale: [1, 1.08, 1],
  
          y: [0, -6, 0],
  
        }}
  
        transition={{
  
          duration: 3,
  
          repeat: Infinity,
  
          ease: "easeInOut",
  
        }}
  
        className="
          fixed
          bottom-5
          right-5
          z-[999]
        "
      >
  
        <div
          className="
            relative
            group
            cursor-pointer
          "
        >
  
          {/* GLOW EFFECT */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-yellow-400
              opacity-40
              blur-2xl
              scale-110
              group-hover:opacity-70
              transition
              duration-500
            "
          />
  
          {/* LOGO */}
          <img
  
            src={logo}
  
            alt="Election Symbol"
  
            className="
              relative
              w-20
              h-20
              md:w-24
              md:h-24
              rounded-full
              border-4
              border-yellow-400
              shadow-2xl
              object-cover
              bg-white
            "
          />
  
        </div>
  
      </motion.div>
  
    );
  
  }