import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ArrowUpRight,
  Users,
  Target,
  Trophy,
} from "lucide-react";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const experiences = [
    {
      company: "Coducer Technologies Private Limited , Bengaluru, Karnataka",
      role: "FrontEnd Developer",
      period: " February 2024 - April 2025",
      description:
        "Built Skygram, a co-browsing and screen takeover platform enabling one-click in-app video calls using Next.js, Bootstrap, Formik, SWR, and LiveKit, with support for website and SaaS embedding. Also developed Prime CLM, a contract lifecycle management tool with Next.js, Chakra UI, and CK Editor, ensuring secure, fast, and compliant contract handling with enhanced UI and rich text editing features.",
      achievements: [
        {
          text: "Built Skygram with screen takeover and in-app video calls",
          icon: Target,
        },
        {
          text: "Developed Prime CLM with secure contract handling and rich editing",
          icon: ArrowUpRight,
        },
        {
          text: "Collaborated in cross-functional teams for product delivery",
          icon: Users,
        },
      ],

      tech: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Chakra UI",
        "Formik",
        "LiveKit",
        "CKEditor",
      ],
    },
    {
      company: "LEAM Technology Systems, Abu Dhabi, UAE",
      role: "FrontEnd Developer",
      period: "May 2021 - December 2023",
      description:
        "Developed a links management system for restaurants in the Middle East with advanced analytics. Contributed to a POS system using XState for robust state management. Built and integrated frontend modules in the Leemify Dashboard with a Supabase backend using SWR.",
      achievements: [
        { text: "Improved code coverage to 90%", icon: Target },
        // { text: "Mentored junior developers", icon: Users },
        {
          text: "Implemented key frontend modules in Leemify Dashboard with Supabase integration",
          icon: ArrowUpRight,
        },
      ],

      tech: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Material UI (MUI)",
        "Formik",
        "SWR",
        "Supabase",
        "AWS",
      ],
    },
    {
      company: "Vestido nation E-commerce - Project",
      role: "Full Stack Developer",
      period: "2020",
      description:
        "Collaborated with a team of four to build a full-featured e-commerce platform, focusing on backend development with Node.js, TypeScript, React, and PostgreSQL. Developed RESTful APIs for order, payment, and shipping workflows, integrating Razorpay and Shiprocket. Used Prisma ORM with PostgreSQL and managed the database environment via Docker for scalability.",
      achievements: [
        {
          text: "Collaborated in a team to build fullstack projects using React and Capacitor",
          icon: Users,
        },
        {
          text: "Integrated Razorpay for smooth payment processing",
          icon: Target,
        },
        {
          text: "Contributed to frontend and backend modules with Supabase integration",
          icon: ArrowUpRight,
        },
        {
          text: "Helped improve code quality and mentor teammates",
          icon: Trophy,
        },
      ],

      tech: [
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Material UI (MUI)",
        "React Hook Form",
        "SWR",
        "Supabase",
      ],
    },
    {
      company: "Vismayam Art and Media Calicut Intern ",
      role: "Full Stack Developer",
      period: "2020",
      description:
        "Collaboratively built Audire Learning App with an admin dashboard for managing courses and users. Developed using React, Express.js, and Supabase, integrating Cloudflare R2 for video storage. Implemented authentication and data management with Supabase. Also worked with Nest.js and PostgreSQL, solving medium-level JavaScript challenges on HackerRank and LeetCode.",
      achievements: [
        {
          text: "Built and launched Audire Learning platform with admin dashboard",
          icon: Trophy,
        },
        { text: "Built 12 client websites", icon: Trophy },
        {
          text: "Integrated Cloudflare R2 for efficient video storage and streaming",
          icon: Target,
        },
        {
          text: "Implemented secure authentication and data management using Supabase",
          icon: Users,
        },
        {
          text: "Solved medium-level JavaScript challenges on HackerRank and LeetCode",
          icon: ArrowUpRight,
        },
      ],

      tech: [
        // Frontend & Mobile
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Material UI (MUI)",
        "Chakra UI",
        "Bootstrap",
        "React Hook Form",
        "SWR",
        "Supabase",
        "AWS",

        // Backend & Databases
        "Node.js",
        "Express.js",
        "NestJS",
        "MongoDB",
        "PostgreSQL",
        "SQL",
        "Prisma ORM",
        "Docker",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative pl-12"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-5px] top-0">
                <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-gray-900" />
                <div className="absolute inset-0 w-[10px] h-[10px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm 
                         hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      <span>{exp.company}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map(({ text, icon: Icon }) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 text-gray-300 group"
                    >
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="pt-1">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 
                               text-gray-300 hover:text-white hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse ${2 + Math.random() * 4}s infinite ${
              Math.random() * 2
            }s`,
          }}
        />
      ))}
    </section>
  );
};

export default Experience;
