"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Education",
      href: "#education",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");

    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        fixed
        top-0
        w-full
        z-50
        bg-black/40
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}
        <div className="cursor-pointer">
          <h1
            className="
              font-bold
              text-xl
              tracking-wide
            "
          >
            Ayman Khairi
          </h1>

          <p
            className="
              text-xs
              text-gray-400
              hidden
              sm:block
            "
          >
            Full Stack Developer
          </p>
        </div>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-gray-300
          "
        >
          {links.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative
                cursor-pointer
                hover:text-cyan-400
                hover:scale-105
                transition-all
                duration-300
                group
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-[2px]
                  bg-cyan-400
                  group-hover:w-full
                  transition-all
                  duration-300
                "
              />
            </motion.button>
          ))}

          {/* Resume */}
          <motion.a
            href="/AymanKhairiCv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-cyan-500
              text-white
              font-medium
              cursor-pointer
              shadow-lg
              shadow-cyan-500/20
              hover:bg-cyan-400
              transition-all
              duration-300
            "
          >
            <FileText size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            p-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            cursor-pointer
            hover:bg-white/10
            transition
          "
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              md:hidden
              overflow-hidden
              border-t
              border-white/10
              bg-black/70
              backdrop-blur-xl
            "
          >
            <div
              className="
                flex
                flex-col
                px-6
                py-6
                gap-5
              "
            >
              {links.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    setOpen(false);

                    setTimeout(() => {
                      scrollToSection(link.href);
                    }, 250);
                  }}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    text-left
                    text-lg
                    text-gray-300
                    cursor-pointer
                    hover:text-cyan-400
                    hover:translate-x-2
                    transition-all
                    duration-300
                  "
                >
                  {link.name}
                </motion.button>
              ))}

              {/* Mobile Resume */}
              <motion.a
                href="/AymanKhairiCv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-2
                  px-4
                  py-3
                  rounded-xl
                  bg-cyan-500
                  text-white
                  font-medium
                  cursor-pointer
                  hover:bg-cyan-400
                  transition-all
                "
              >
                <FileText size={16} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
