"use client";

import { motion, Variants } from "framer-motion";

export default function Education() {
  const container: Variants = {
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
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const skills = [
    "Software Development",
    "Programming",
    "Database Systems",
    "Application Design",
    "Web Development",
  ];

  return (
    <section
      id="education"
      className="
      relative
      py-32
      px-6
      overflow-hidden
      scroll-mt-24
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[800px]
        h-[800px]
        bg-cyan-500/5
        blur-[200px]
        rounded-full
        pointer-events-none
        "
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
        max-w-6xl
        mx-auto
        relative
        z-10
        "
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="
          text-center
          mb-20
          "
        >
          <span
            className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
            font-medium
            "
          >
            Academic Background
          </span>

          <h2
            className="
            mt-4
            text-4xl
            md:text-6xl
            font-bold
            "
          >
            Education
          </h2>

          <p
            className="
            mt-5
            text-gray-400
            max-w-2xl
            mx-auto
            text-lg
            "
          >
            Academic foundation in software engineering, programming, and modern
            technology solutions.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={item}
          whileHover={{
            y: -8,
          }}
          className="
          relative
          max-w-4xl
          mx-auto
          group
          "
        >
          {/* Glow Border */}
          <div
            className="
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-r
            from-cyan-500/20
            via-transparent
            to-blue-500/20
            blur-xl
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            "
          />

          <div
            className="
            relative
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-8
            md:p-10
            overflow-hidden
            "
          >
            {/* Top Shine Effect */}
            <div
              className="
              absolute
              top-0
              left-0
              w-full
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
              opacity-60
              "
            />

            <div
              className="
              flex
              justify-between
              flex-wrap
              gap-6
              "
            >
              <div>
                <h3
                  className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  "
                >
                  Technical Diploma in Computer Engineering
                </h3>

                <p
                  className="
                  text-cyan-400
                  mt-3
                  text-lg
                  font-medium
                  "
                >
                  Damascus University
                </p>
              </div>

              <div
                className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                text-sm
                h-fit
                "
              >
                Software Engineering
              </div>
            </div>

            <p
              className="
              text-gray-400
              mt-8
              leading-8
              text-lg
              "
            >
              Specialized in software engineering, software development,
              database systems, application architecture, and analysis of
              information and communication technology solutions.
            </p>

            {/* Skills */}
            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-8
              "
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-black/40
                  border
                  border-white/10
                  text-sm
                  text-gray-300
                  hover:text-white
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
