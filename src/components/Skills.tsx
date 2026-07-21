"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  {
    category: "Frontend Development",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
      "REST APIs",
      "PHP",
    ],
  },
  {
    category: "Database & Storage",
    items: ["SQL Server", "Database Design", "Data Modeling", "Firebase"],
  },
  {
    category: "Mobile Development",
    items: ["Flutter", "Dart", "Firebase", "Cross-platform Apps"],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Postman", "VS Code", "Netlify", "Vercel"],
  },
];

export default function Skills() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <section
      id="skills"
      className="
      relative
      py-10
      px-6
      overflow-hidden
      scroll-mt-24
    "
    >
      {/* Luxury Background */}
      <div
        className="
        absolute
        inset-0
        pointer-events-none
      "
      >
        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="max-w-7xl mx-auto relative z-10"
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
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/5
            text-cyan-400
            text-xs
            uppercase
            tracking-[4px]
          "
          >
            Technical Expertise
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
          "
          >
            My Technical Stack
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
            A versatile technology stack for building modern web applications,
            scalable backend systems, and production-ready digital products.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              group
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
                duration-300
                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-blue-500/10
              "
              />

              <div className="relative z-10">
                <h3
                  className="
                  text-xl
                  font-semibold
                  text-white
                  mb-6
                "
                >
                  {group.category}
                </h3>

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                "
                >
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.15,
                      }}
                      className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-black/20
                      text-sm
                      text-gray-300
                      hover:text-white
                      hover:border-cyan-400/40
                      transition-all
                      duration-200
                      cursor-default
                    "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
