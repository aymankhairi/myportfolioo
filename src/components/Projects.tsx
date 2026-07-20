"use client";

import { projects } from "@/src/data/projects";
import { motion, Variants } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const card: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
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
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-cyan-500/5
        blur-[220px]
        pointer-events-none
        "
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        "
      >
        {/* Header */}

        <motion.div
          variants={card}
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
            Portfolio
          </span>

          <h2
            className="
            mt-5
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
            max-w-2xl
            mx-auto
            text-gray-400
            text-lg
            leading-relaxed
            "
          >
            Selected applications and digital products built for businesses,
            startups, and real-world users.
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
          {featuredProjects.map((project) => (
            <motion.article
              key={project.slug}
              variants={card}
              whileHover={{
                y: -10,
              }}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              transition
              hover:border-cyan-400/40
              "
            >
              {/* Image */}

              <div
                className="
                relative
                h-64
                overflow-hidden
                bg-black/30
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-transparent
                  to-transparent
                  "
                />

                {project.featured && (
                  <span
                    className="
                    absolute
                    top-5
                    left-5
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-cyan-500/20
                    text-cyan-300
                    border
                    border-cyan-400/30
                    "
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}

              <div
                className="
                p-7
                "
              >
                <h3
                  className="
                  text-2xl
                  font-bold
                  mb-3
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

                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  mb-7
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      border
                      border-white/10
                      bg-black/20
                      text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  "
                >
                  {project.demo && (
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
                      bg-cyan-500
                      text-black
                      font-medium
                      hover:bg-cyan-400
                      transition
                      "
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.github && (
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
                      hover:text-white
                      transition
                      "
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  )}

                  <Link
                    href={`/gallery/${project.slug}`}
                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-cyan-400/20
                    text-cyan-400
                    hover:bg-cyan-500/10
                    transition
                    "
                  >
                    View
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
