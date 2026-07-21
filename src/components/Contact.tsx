"use client";

import { motion, Variants } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
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
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const contacts = [
    {
      title: "Email",
      value: "aymanakh99@gmail.com",
      icon: <Mail size={22} />,
      href: "mailto:aymanakh99@gmail.com",
    },
    {
      title: "WhatsApp",
      value: "+963 964 682 595",
      icon: <MessageCircle size={22} />,
      href: "https://wa.me/963964682595",
    },
    {
      title: "GitHub",
      value: "github.com/aymankhairi",
      icon: <FaGithub size={22} />,
      href: "https://github.com/aymankhairi",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/aymankhairi",
      icon: <FaLinkedin size={22} />,
      href: "https://linkedin.com/in/aymankhairi",
    },
  ];

  return (
    <section
      id="contact"
      className="
      relative
      py-8
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
        bg-cyan-500/10
        blur-[180px]
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
        relative
        z-10
        max-w-5xl
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
            Get In Touch
          </span>

          <h2
            className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
          "
          >
            Ready to Build Your Next Product?
          </h2>

          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-lg
            text-gray-400
            leading-relaxed
          "
          >
            Whether you're hiring a developer, building a startup, or scaling an
            existing platform, I'd love to hear about your project and explore
            how I can help.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
          variants={item}
          className="
          flex
          justify-center
          mb-12
        "
        >
          <div
            className="
  inline-flex
  items-center
  gap-3
  px-6
  py-4
  rounded-2xl
  bg-gradient-to-r
  from-green-500/10
  to-cyan-500/10
  border
  border-green-500/20
  backdrop-blur-xl
"
          >
            <span
              className="
    relative
    flex
    h-3
    w-3
  "
            >
              <span
                className="
      animate-ping
      absolute
      inline-flex
      h-full
      w-full
      rounded-full
      bg-green-400
      opacity-75
    "
              />
              <span
                className="
      relative
      inline-flex
      rounded-full
      h-3
      w-3
      bg-green-400
    "
              />
            </span>

            <span className="font-medium text-green-400">
              Open to New Opportunities
            </span>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={item}
          className="
          grid
          md:grid-cols-2
          gap-6
        "
        >
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-6
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:-translate-y-1
            "
            >
              <div className="flex items-center justify-between">
                <div
                  className="
                  p-3
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                "
                >
                  {contact.icon}
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                  text-gray-500
                  group-hover:text-cyan-400
                  transition
                "
                />
              </div>

              <h3
                className="
                mt-5
                text-xl
                font-semibold
              "
              >
                {contact.title}
              </h3>

              <p
                className="
                mt-2
                text-gray-400
                break-all
              "
              >
                {contact.value}
              </p>
            </a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={item}
          className="
  mt-20
  text-center
"
        >
          <a
            href="mailto:aymanakh99@gmail.com"
            className="
    inline-flex
    items-center
    gap-3
    px-10
    py-5
    rounded-2xl
    font-semibold
    text-lg
    bg-gradient-to-r
    from-cyan-500
    to-blue-500
    text-white
    shadow-lg
    hover:scale-105
    hover:shadow-[0_15px_60px_rgba(34,211,238,0.4)]
    transition-all
    duration-300
  "
          >
            Let's Connect
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
