"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="
  relative
  min-h-screen
  flex
  items-center
  overflow-hidden
  px-6
  pt-28
  pb-28
  md:pt-0
  md:pb-0
  "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-200px]
            left-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/20
            blur-[140px]
          "
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            right-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500/20
            blur-[140px]
          "
        />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto w-full relative z-10"
      >
        {/* Tag */}
        <motion.p
          variants={item}
          className="
            text-cyan-400
            uppercase
            tracking-[0.2em]
            text-sm
            mb-6
          "
        >
          Full Stack Software Developer
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-bold
            leading-[1.05]
            tracking-tight
          "
        >
          Building Digital
          <br />
          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-cyan-400
              bg-[length:200%]
              bg-clip-text
              text-transparent
              animate-gradient
            "
          >
            Solutions That Scale
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="
            mt-8
            text-gray-400
            max-w-2xl
            text-lg
            leading-relaxed
          "
        >
          I am Ayman Khairi, a Full Stack Developer specialized in building
          modern web applications, e-commerce platforms, business systems, and
          mobile applications with a focus on performance, scalability, and user
          experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          <motion.a
            href="#projects"
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-white
              text-black
              px-7
              py-3
              rounded-xl
              font-medium
              shadow-lg
            "
          >
            View Projects
            <motion.div
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              border
              border-white/20
              px-7
              py-3
              rounded-xl
              backdrop-blur-sm
              hover:bg-white/5
              transition
              flex
              items-center
              justify-center
            "
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
        "
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="
            w-6
            h-10
            border
            border-white/30
            rounded-full
            flex
            justify-center
            pt-2
          "
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
