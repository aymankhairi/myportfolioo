"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Mail, MessageCircle, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

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
        ease: "easeOut",
      },
    },
  };

  const socials = [
    {
      name: "Email",
      value: "aymanakh99@gmail.com",
      icon: <Mail size={20} />,
      link: "mailto:aymanakh99@gmail.com",
    },
    {
      name: "GitHub",
      value: "github.com/aymankhairi",
      icon: <FaGithub size={20} />,
      link: "https://github.com/aymankhairi",
    },
    {
      name: "LinkedIn",
      value: "LinkedIn Profile",
      icon: <FaLinkedin size={20} />,
      link: "linkedin.com/in/aymankhairi",
    },
    {
      name: "WhatsApp",
      value: "Chat with me",
      icon: <MessageCircle size={20} />,
      link: "https://wa.me/963964682595",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="
      relative
      py-28
      px-6
      overflow-hidden
      scroll-mt-24
      "
    >
      {/* Background */}
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
        max-w-6xl
        mx-auto
        relative
        z-10
        grid
        lg:grid-cols-2
        gap-14
        "
      >
        {/* LEFT */}
        <motion.div variants={item}>
          <span
            className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
            "
          >
            Contact
          </span>

          <h2
            className="
            mt-5
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            "
          >
            Let's Create
            <span
              className="
              block
              text-gray-400
              "
            >
              Something Great
            </span>
          </h2>

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
            mt-8
            inline-flex
            items-center
            gap-4
            px-5
            py-3
            rounded-2xl
            bg-green-500/10
            border
            border-green-500/20
            "
          >
            <span
              className="
              w-3
              h-3
              bg-green-400
              rounded-full
              animate-pulse
              "
            />

            <div>
              <p className="text-green-400 font-semibold">
                Available for freelance
              </p>

              <p className="text-gray-500 text-sm">
                Usually replies within 24 hours
              </p>
            </div>
          </motion.div>

          <p
            className="
            mt-8
            text-gray-400
            text-lg
            leading-8
            "
          >
            Have a website, application, or business idea? Let's transform it
            into a modern digital solution.
          </p>

          <div className="mt-10 space-y-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                flex
                items-center
                gap-4
                group
                "
              >
                <div
                  className="
                  p-3
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  group-hover:border-cyan-400/50
                  group-hover:text-cyan-400
                  transition
                  "
                >
                  {social.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-500">{social.name}</p>

                  <p
                    className="
                  text-gray-300
                  group-hover:text-cyan-400
                  transition
                  "
                  >
                    {social.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* FORM */}

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="
          relative
          h-fit
          p-6
          rounded-3xl
          bg-white/[0.04]
          border
          border-white/10
          backdrop-blur-xl
          shadow-2xl
          "
        >
          <div
            className="
            absolute
            top-0
            left-10
            right-10
            h-px
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            "
          />

          <h3
            className="
            text-2xl
            font-bold
            mb-6
            "
          >
            Send Message
          </h3>

          <div className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-black/40
              border
              border-white/10
              focus:border-cyan-400
              outline-none
              transition
              "
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-black/40
              border
              border-white/10
              focus:border-cyan-400
              outline-none
              transition
              "
            />

            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-black/40
              border
              border-white/10
              focus:border-cyan-400
              outline-none
              resize-none
              transition
              "
            />

            <motion.button
              disabled={!isValid}
              whileHover={isValid ? { scale: 1.03 } : {}}
              whileTap={isValid ? { scale: 0.97 } : {}}
              className={`
              w-full
              py-3
              rounded-xl
              flex
              justify-center
              items-center
              gap-2
              font-semibold
              transition

              ${
                isValid
                  ? "bg-white text-black"
                  : "bg-white/20 text-gray-500 cursor-not-allowed"
              }

              `}
            >
              {sent ? (
                <>
                  Sent
                  <Check size={18} />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
