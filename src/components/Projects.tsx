"use client";
import { projects } from "@/src/data/projects";

import { assetPath } from "@/src/lib/path";
import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const card: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
      },
    },
  };

  return (
    <section
      id="projects"
      className="
      relative
      py-8
      px-6
      overflow-hidden
      scroll-mt-24
      
    "
    >
      {/* Luxury Background Glow */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-cyan-500/5
        blur-[220px]
        rounded-full
        pointer-events-none
      "
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={card} className="text-center mb-20">
          <span
            className="
            uppercase
            tracking-[5px]
            text-cyan-400
            text-sm
            font-medium
          "
          >
            Portfolio
          </span>

          <h2
            className="
            mt-4
            text-4xl
            md:text-6xl
            font-bold
          "
          >
            Featured Projects
          </h2>

          <p
            className="
            mt-6
            text-gray-400
            max-w-2xl
            mx-auto
            text-lg
          "
          >
            Selected work showcasing modern web applications, business
            platforms, enterprise systems, and mobile solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={card}
              whileHover={{
                y: -10,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
            "
            >
              {/* Image */}
              <div className="relative h-64 bg-black/20 flex items-center justify-center p-3">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="
  max-w-full
  max-h-full
  object-contain
  transition-transform
  duration-700
  ease-out
  group-hover:scale-105
"
                />
                {/* Overlay */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                "
                />
                {/* Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-cyan-500/0
                  group-hover:bg-cyan-500/10
                  transition-all
                  duration-500
                "
                />
              </div>

              {/* Content */}
              <div className="p-7">
                {project.type && (
                  <div
                    className="
                    inline-flex
                    px-3
                    py-1
                    mb-4
                    rounded-full
                    text-xs
                    uppercase
                    tracking-wider
                    bg-cyan-500/10
                    text-cyan-400
                    border
                    border-cyan-500/20
                  "
                  >
                    {project.type}
                  </div>
                )}

                <h3
                  className="
                  text-2xl
                  font-bold
                  mb-4
                "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  text-gray-400
                  leading-7
                  mb-6
                "
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3
                      py-1.5
                      rounded-full
                      text-xs
                      border
                      border-white/10
                      bg-black/20
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:text-white
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    text-cyan-400
                    hover:bg-cyan-500/20
                    transition-all
                    duration-300
                  "
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  {project.type !== "Client Project" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
    flex
    items-center
    gap-2
    px-4
    py-2
    rounded-xl
    border
    border-white/10
    text-gray-300
    hover:border-white/20
    hover:text-white
    transition-all
    duration-300
  "
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  )}
                  <a
                    href={`/gallery/${project.slug}`}
                    className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-cyan-500/10
border
border-cyan-500/20
text-cyan-400
hover:bg-cyan-500/20
transition-all
"
                  >
                    Gallery
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
