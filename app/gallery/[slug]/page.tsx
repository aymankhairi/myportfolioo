import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";
import Navbar from "@/src/components/Navbar";

import Image from "next/image";

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

      <main className="min-h-screen bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <span
              className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
          "
            >
              Case Study
            </span>

            <h1
              className="
            mt-5
            text-5xl
            font-bold
          "
            >
              {project.title}
            </h1>

            <p
              className="
            mt-6
            text-gray-400
            text-lg
          "
            >
              {project.description}
            </p>
          </div>

          {/* Cover */}
          <div
            className="
          rounded-3xl
          overflow-hidden
          border
          border-white/10
        "
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={700}
              className="w-full"
            />
          </div>

          {/* Overview */}

          <section className="mt-20 grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-5">Technologies</h3>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  text-sm
                  "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery */}

          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Screenshots</h2>

            <div
              className="
            grid
            md:grid-cols-3
            gap-6
          "
            >
              {project.gallery.map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt=""
                  width={600}
                  height={400}
                  className="
                rounded-2xl
                border
                border-white/10
                "
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
