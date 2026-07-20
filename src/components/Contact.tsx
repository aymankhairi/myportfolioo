"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Send,
  Check,
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const [error, setError] = useState("");

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

  const socials = [
    {
      name: "Email",
      value: "aymanakh99@gmail.com",
      icon: <Mail size={22} />,
      link: "mailto:aymanakh99@gmail.com",
    },
    {
      name: "GitHub",
      value: "github.com/aymankhairi",
      icon: <FaGithub size={22} />,
      link: "https://github.com/aymankhairi",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/aymankhairi",
      icon: <FaLinkedin size={22} />,
      link: "https://linkedin.com/in/aymankhairi",
    },
    {
      name: "WhatsApp",
      value: "Start a conversation",
      icon: <MessageCircle size={22} />,
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

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please complete all fields.");
      return;
    }

    setStatus("sending");

    // connect your email service here
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");

    setTimeout(() => {
      setStatus("idle");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="
      relative
      py-32
      px-6
      overflow-hidden
      scroll-mt-24
      "
    >
      {/* Background */}

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
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/10
          blur-[220px]
          "
        />
      </div>

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
        max-w-6xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        "
      >
        {/* LEFT SIDE */}

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
            mt-6
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
            "
          >
            Let's build
            <span
              className="
              block
              text-gray-400
              "
            >
              something amazing
            </span>
          </h2>

          <p
            className="
            mt-8
            text-gray-400
            text-lg
            leading-8
            max-w-xl
            "
          >
            I'm available for freelance projects, collaborations, and software
            development opportunities. Whether you need a website, web
            application, or complete digital solution, I can help bring your
            idea to life.
          </p>

          {/* Availability */}

          <div
            className="
            mt-8
            inline-flex
            items-center
            gap-4
            px-5
            py-4
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/10
            "
          >
            <span
              className="
              w-3
              h-3
              rounded-full
              bg-green-400
              animate-pulse
              "
            />

            <div>
              <p
                className="
                text-green-400
                font-semibold
                "
              >
                Available for opportunities
              </p>

              <p
                className="
                text-gray-500
                text-sm
                "
              >
                Response within 24 hours
              </p>
            </div>
          </div>

          {/* Socials */}

          <div
            className="
            mt-10
            grid
            sm:grid-cols-2
            gap-4
            "
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                whileHover={{
                  y: -5,
                }}
                className="
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              hover:border-cyan-400/40
              transition
              "
              >
                <div
                  className="
                p-3
                rounded-xl
                bg-white/5
                text-cyan-400
                "
                >
                  {social.icon}
                </div>

                <div>
                  <p className="text-xs text-gray-500">{social.name}</p>

                  <p
                    className="
                text-sm
                text-gray-300
                "
                  >
                    {social.value}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="
                ml-auto
                text-gray-500
                "
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* FORM */}

        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="
          p-8
          rounded-3xl
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          "
        >
          <h3
            className="
            text-2xl
            font-bold
            mb-8
            "
          >
            Send a message
          </h3>

          <div className="space-y-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="
              w-full
              px-5
              py-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              focus:border-cyan-400
              "
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              className="
              w-full
              px-5
              py-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              focus:border-cyan-400
              "
            />

            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="
              w-full
              px-5
              py-4
              rounded-xl
              bg-black/40
              border
              border-white/10
              outline-none
              resize-none
              focus:border-cyan-400
              "
            />

            {error && (
              <p
                className="
              text-red-400
              text-sm
              "
              >
                {error}
              </p>
            )}

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              disabled={status === "sending"}
              className="
              w-full
              py-4
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
              flex
              justify-center
              items-center
              gap-2
              "
            >
              {status === "sending" && (
                <>
                  Sending
                  <Loader2 className="animate-spin" size={18} />
                </>
              )}

              {status === "success" && (
                <>
                  Sent Successfully
                  <Check size={18} />
                </>
              )}

              {status === "idle" && (
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
