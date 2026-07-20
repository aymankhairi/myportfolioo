"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

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
    "Software Engineering",
    "Web Development",
    "Database Design",
    "Application Architecture",
    "Programming",
    "System Analysis",
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
        rounded-full
        bg-cyan-500/5
        blur-[200px]
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
        relative
        z-10
        max-w-6xl
        mx-auto
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
            "
          >
            Education & Foundation
          </span>

          <h2
            className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
            "
          >
            Academic Background
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            A strong foundation in software engineering, programming principles,
            and building reliable technology solutions.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          variants={item}
          whileHover={{
            y: -8,
          }}
          className="
          max-w-4xl
          mx-auto
          group
          relative
          "
        >
          <div
            className="
            absolute
            inset-0
            rounded-3xl
            bg-gradient-to-r
            from-cyan-500/20
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
            "
          >
            {/* Icon */}

            <div
              className="
              flex
              items-start
              justify-between
              gap-6
              flex-wrap
              "
            >
              <div
                className="
                flex
                gap-4
                items-center
                "
              >
                <div
                  className="
                  p-3
                  rounded-2xl
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  "
                >
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>

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
                    mt-2
                    text-cyan-400
                    font-medium
                    "
                  >
                    Damascus University
                  </p>
                </div>
              </div>

              <span
                className="
                px-4
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
                text-sm
                "
              >
                Computer Engineering
              </span>
            </div>

            <p
              className="
              mt-8
              text-gray-400
              leading-8
              text-lg
              "
            >
              Developed a strong foundation in software development, database
              systems, programming concepts, and application design. The program
              strengthened my ability to analyze problems, design solutions, and
              build practical software systems.
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
                  border
                  border-white/10
                  bg-black/30
                  text-sm
                  text-gray-300
                  hover:text-white
                  hover:border-cyan-400/40
                  transition
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
