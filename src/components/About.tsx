"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const stats = [
    {
      value: "4+",
      label: "Years Experience",
    },
    {
      value: "10+",
      label: "Technologies Used",
    },
    {
      value: "100%",
      label: "Responsive Design",
    },
    {
      value: "Full Stack",
      label: "Frontend & Backend",
    },
  ];

  return (
    <section
      id="about"
      className="
      relative
      py-14
      px-6
      overflow-hidden
      scroll-mt-24
    "
    >
      {/* Background Effects */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        top-[-200px]
        left-[-150px]
        w-[550px]
        h-[550px]
        rounded-full
        bg-cyan-500/10
        blur-[160px]
      "
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-[-250px]
        right-[-150px]
        w-[600px]
        h-[600px]
        rounded-full
        bg-blue-500/10
        blur-[180px]
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
        max-w-7xl
        mx-auto
      "
      >
        {/* Heading */}

        <motion.div
          variants={item}
          className="
          max-w-4xl
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
            About Me
          </span>

          <h2
            className="
            mt-5
            text-5xl
            md:text-7xl
            font-bold
            leading-[1.05]
          "
          >
            Building Software That
            <br />
            <span
              className="
              bg-gradient-to-r
              from-white
              via-gray-300
              to-cyan-400
              bg-clip-text
              text-transparent
            "
            >
              Solves Real Problems
            </span>
          </h2>
        </motion.div>

        {/* Main Layout */}

        <div
          className="
          grid
          lg:grid-cols-[1.2fr_0.8fr]
          gap-16
          items-start
        "
        >
          {/* Content */}

          <motion.div
            variants={item}
            className="
            space-y-8
            text-lg
            leading-9
            text-gray-400
          "
          >
            <p>
              I'm <span className="font-semibold text-white">Ayman Khairi</span>
              , a Full-Stack Software Developer focused on building scalable web
              applications, business platforms, and mobile solutions that
              deliver measurable results.
              <br />
              My expertise spans frontend engineering, backend development,
              database architecture, cloud-ready systems, and modern software
              design patterns. I prioritize performance, maintainability, and
              exceptional user experiences.
              <br /> I believe successful software is built where business
              goals, elegant design, and engineering quality intersect.
            </p>
          </motion.div>

          {/* Stats Grid */}

          <motion.div
            variants={item}
            className="
            grid
            grid-cols-2
            gap-5
          "
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                p-7
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              "
              >
                {/* Hover Glow */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-cyan-500/5
                  to-transparent
                "
                />

                <div className="relative z-10">
                  <h3
                    className="
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-cyan-400
                  "
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-gray-400
                    text-sm
                    md:text-base
                  "
                  >
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Luxury Divider */}

        <motion.div
          variants={item}
          className="
          mt-24
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-500/40
          to-transparent
        "
        />
      </motion.div>
    </section>
  );
}
