"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  // Hide navbar + prevent scrolling
  useEffect(() => {
    if (selected !== null) {
      document.body.classList.add("gallery-open");
    } else {
      document.body.classList.remove("gallery-open");
    }

    return () => {
      document.body.classList.remove("gallery-open");
    };
  }, [selected]);
  const nextImage = () => {
    if (selected === null) return;

    setSelected((selected + 1) % images.length);
  };

  const previousImage = () => {
    if (selected === null) return;

    setSelected(selected === 0 ? images.length - 1 : selected - 1);
  };

  return (
    <>
      {/* Gallery */}
      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >
        {images.map((img, index) => (
          <button
            key={`${img}-${index}`}
            onClick={() => setSelected(index)}
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            h-[280px]
            md:h-[320px]
            cursor-pointer
            "
          >
            <Image
              src={img}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-black/40
              opacity-0
              group-hover:opacity-100
              transition
              "
            />

            <span
              className="
              absolute
              bottom-5
              left-5
              px-3
              py-1
              rounded-full
              bg-black/50
              backdrop-blur
              text-sm
              opacity-0
              group-hover:opacity-100
              transition
              "
            >
              Screenshot {index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="
      fixed
      inset-0
      z-[9999]
      bg-black/95
      backdrop-blur-xl
      flex
      items-center
      justify-center
      p-6
    "
        >
          {/* Close Button */}
          <button
            onClick={() => setSelected(null)}
            className="
        absolute
        top-6
        right-6
        z-[10000]
        w-14
        h-14
        rounded-full
        bg-white/10
        border
        border-white/20
        backdrop-blur-md
        flex
        items-center
        justify-center
        text-white
        hover:bg-cyan-500
        hover:scale-110
        transition-all
        duration-300
        cursor-pointer
      "
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={previousImage}
            className="
        absolute
        left-5
        md:left-12
        z-[10000]
        w-14
        h-14
        rounded-full
        bg-white/10
        border
        border-white/20
        flex
        items-center
        justify-center
        text-white
        hover:bg-cyan-500
        transition
      "
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="
        relative
        w-full
        max-w-6xl
        h-[85vh]
        z-[9999]
      "
          >
            <Image
              src={images[selected]}
              alt={`${title} preview`}
              fill
              priority
              className="
          object-contain
          rounded-2xl
        "
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="
        absolute
        right-5
        md:right-12
        z-[10000]
        w-14
        h-14
        rounded-full
        bg-white/10
        border
        border-white/20
        flex
        items-center
        justify-center
        text-white
        hover:bg-cyan-500
        transition
      "
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
