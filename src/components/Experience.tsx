// const experiences = [
//   {
//     role: "Freelance Full-Stack Developer",
//     company: "GIM UEMOA LTD",
//     location: "London, United Kingdom",
//     date: "Nov 2025 - Dec 2025",
//     description:
//       "Designed and developed a professional e-commerce website for footwear and clothing. Built a responsive user interface with modern frontend practices, focusing on usability and customer experience.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },

//   {
//     role: "Freelance Web Developer",
//     company: "AIMS Finance Services",
//     location: "London, United Kingdom",
//     date: "Aug 2025 - Sep 2025",
//     description:
//       "Created a responsive financial services website presenting strategic planning, budgeting, forecasting, investment analysis, and risk management services.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },

//   {
//     role: "Freelance Web Developer",
//     company: "EOS COINVST LTD",
//     location: "London, United Kingdom",
//     date: "Jun 2025 - Aug 2025",
//     description:
//       "Developed an IT services website highlighting cybersecurity, cloud computing, infrastructure management, and data analytics solutions.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//   },

//   {
//     role: "Management Assistant",
//     company: "Damascene Team",
//     location: "",
//     date: "2020 - 2023",
//     description:
//       "Managed training operations, organized schedules, maintained structured data archives, and supported technical team coordination.",
//   },
// ];

// export default function Experience() {
//   return (
//     <section id="experience" className="py-32 px-6">
//       <h2
//         className="
// text-4xl
// font-bold
// text-center
// mb-16
// "
//       >
//         Experience
//       </h2>

//       <div
//         className="
// max-w-5xl
// mx-auto
// space-y-10
// "
//       >
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="
// relative
// border-l
// border-white/20
// pl-8
// pb-8
// "
//           >
//             <div
//               className="
// absolute
// w-4
// h-4
// bg-cyan-400
// rounded-full
// -left-[9px]
// top-2
// "
//             />

//             <h3
//               className="
// text-2xl
// font-bold
// "
//             >
//               {exp.role}
//             </h3>

//             <p
//               className="
// text-cyan-400
// mt-1
// "
//             >
//               {exp.company}
//             </p>

//             <p
//               className="
// text-gray-500
// text-sm
// "
//             >
//               {exp.location} | {exp.date}
//             </p>

//             <p
//               className="
// text-gray-400
// mt-5
// leading-7
// "
//             >
//               {exp.description}
//             </p>

//             {exp.technologies && (
//               <div
//                 className="
// flex
// flex-wrap
// gap-3
// mt-5
// "
//               >
//                 {exp.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="
// px-3
// py-1
// rounded-full
// bg-white/5
// border
// border-white/10
// text-sm
// "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
