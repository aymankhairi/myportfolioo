import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import ImageGallery from "@/src/components/ImageGallery";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers, Images } from "lucide-react";
import { FaGithub } from "react-icons/fa";
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function GalleryProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Glow */}
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="
      absolute
      top-20
      left-20
      w-80
      h-80
      bg-cyan-500/10
      rounded-full
      blur-[160px]
      animate-pulse
    "
          />
          <div
            className="
  absolute
  top-20
  left-20
  w-72
  h-72
  bg-cyan-500/10
  rounded-full
  blur-[120px]
  animate-pulse
"
          />

          <div
            className="
  absolute
  bottom-20
  right-20
  w-80
  h-80
  bg-blue-500/10
  rounded-full
  blur-[150px]
  animate-pulse
"
          />
          <div
            className="
      absolute
      bottom-20
      right-20
      w-[500px]
      h-[500px]
      bg-blue-500/10
      rounded-full
      blur-[220px]
      animate-pulse
    "
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="
            inline-flex
            items-center
            gap-2
            text-cyan-400
            hover:text-cyan-300
            transition
            mb-10
          "
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="text-center max-w-5xl mx-auto">
            <span
              className="
      uppercase
      tracking-[6px]
      text-cyan-400
      text-sm
    "
            >
              Case Study
            </span>

            <h1
              className="
      mt-6
      text-5xl
      md:text-7xl
      font-black
      leading-tight
      bg-gradient-to-r
      from-white
      via-cyan-200
      to-cyan-500
      bg-clip-text
      text-transparent
    "
            >
              {project.title}
            </h1>

            <p
              className="
      mt-8
      text-lg
      md:text-xl
      text-gray-400
      leading-relaxed
      max-w-3xl
      mx-auto
    "
            >
              {project.description}
            </p>

            <div className="flex justify-center gap-4 mt-12 flex-wrap">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          flex
          items-center
          gap-2
          px-7
          py-3
          rounded-2xl
          bg-cyan-500
          hover:bg-cyan-400
          transition-all
          duration-300
          hover:scale-105
        "
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}

              {project.github && project.type !== "Client Project" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
          flex
          items-center
          gap-2
          px-7
          py-3
          rounded-2xl
          border
          border-white/10
          hover:border-cyan-400/40
          hover:text-cyan-400
          hover:bg-white/[0.03]
          transition-all
          duration-300
        "
                >
                  <FaGithub />
                  Source Code
                </a>
              )}
            </div>
          </div>
          {/* Stats Section */}
          <section className="mt-20">
            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
              >
                <Layers className="text-cyan-400 mb-4" />
                <h3 className="font-semibold text-lg">Technologies</h3>
                <p className="text-gray-400 mt-2">
                  {project.tech.length} Technologies Used
                </p>
              </div>

              <div
                className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
              >
                <Images className="text-cyan-400 mb-4" />
                <h3 className="font-semibold text-lg">Gallery</h3>
                <p className="text-gray-400 mt-2">
                  {project.gallery.length} Screenshots
                </p>
              </div>

              <div
                className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
      "
              >
                <ExternalLink className="text-cyan-400 mb-4" />
                <h3 className="font-semibold text-lg">Project Type</h3>
                <p className="text-gray-400 mt-2">{project.type}</p>
              </div>
            </div>
          </section>
          {/* Cover Image */}
          <div
            className="
    mt-20
    group
    rounded-3xl
    overflow-hidden
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    shadow-[0_20px_80px_rgba(34,211,238,0.12)]
  "
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={800}
              priority
              className="
      w-full
      transition-transform
      duration-1000
      group-hover:scale-105
    "
            />
          </div>

          {/* Project Overview */}
          <section className="mt-20">
            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              md:p-10
            "
            >
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>

              <p
                className="
                text-gray-400
                leading-8
                text-lg
              "
              >
                {project.description}
              </p>
            </div>
          </section>

          {/* Technologies */}
          <section className="mt-24">
            <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>

            <div className="flex flex-wrap gap-4">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
        px-5
        py-3
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500/10
        to-blue-500/10
        border
        border-cyan-500/20
        hover:border-cyan-400
        hover:scale-105
        transition-all
        duration-300
      "
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section className="mt-24">
            <h2 className="text-4xl font-bold mb-10">Project Gallery</h2>

            <ImageGallery images={project.gallery} title={project.title} />
          </section>
          <section className="mt-32 text-center">
            <div
              className="
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    backdrop-blur-xl
    p-12
  "
            >
              <h2 className="text-4xl font-bold">
                Interested in Similar Work?
              </h2>

              <p
                className="
      mt-5
      text-gray-400
      max-w-2xl
      mx-auto
    "
              >
                I'm available for full-stack development, web applications,
                business systems, and modern digital solutions.
              </p>

              <Link
                href="/#contact"
                className="
      inline-flex
      mt-8
      px-8
      py-4
      rounded-2xl
      bg-cyan-500
      hover:bg-cyan-400
      transition
    "
              >
                Contact Me
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
