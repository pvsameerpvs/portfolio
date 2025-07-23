import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const Works = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [selectedStack, setSelectedStack] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullStack, setShowFullStack] = useState(false);
  const itemsPerPage = 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const allStacks = [
    "All",
    "React",
    "HTML",
    "Next.js",
    "WordPress",
    "Expo",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
  ];

  const works = [
    {
      institution: "MashTree",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "lead generation",
        "fast load speed",
      ],
      stack: "React, Tailwind CSS, JavaScript",
      url: "https://mashtree.com",
      imageUrl: "/MashTree.png", // Direct public folder path
    },
    {
      institution: "Ariflex",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "lead generation",
        "fast load speed",
      ],
      stack: "React, Tailwind CSS, JavaScript",
      url: "https://ariflex.co/?nocache=1753187198915",
      imageUrl: "/Ariflex.png", // Direct public folder path
    },
    {
      institution: "Alkaun Telecoms",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "lead generation",
        "fast load speed",
      ],
      stack: "HTML, CSS, JavaScript",
      url: "https://alkauntelecoms.com",
      imageUrl: "/AlkaunTelecoms.png", // Direct public folder path
    },
    {
      institution: "Leemify",
      highlights: [
        "Clean and responsive UI using Tailwind CSS and MUI",
        "Built with Next.js and TypeScript for scalable and maintainable code",
        "Form handling with React Hook Form for smooth user experience",
        "Supabase integration for authentication and real-time database",
        "Exported as a mobile app using Capacitor (iOS & Android ready)",
        "SEO optimization with Next.js for better search visibility",
        "Fast load speed and performance optimization",
        "Designed for UI Developer role with modern best practices",
        "Lead generation-ready with integrated backend and forms",
      ],

      stack:
        "Next.js, TypeScript, Tailwind CSS, capacitor (mobile export), mui, react hook form, supabase",
      url: "https://app.leemify.com/pages/login/",
      imageUrl: "/Leemify.png", // Direct public folder path
    },
    {
      institution: " Cydez Technologies",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "lead generation",
        "fast load speed",
      ],
      stack: "HTML, CSS, JavaScript",
      url: "https://cydeztechnologies.com",
      imageUrl: "/CydezTechnologies.png", // Direct public folder path
    },
    {
      institution: " Aspire IT Academy",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "lead generation",
        "fast load speed",
      ],
      stack: "WordPress, Custom CSS",
      url: "https://aspireitacademy.in",
      imageUrl: "/AspireITAcademy.png", // Direct public folder path
    },
    {
      institution: "Skygram",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "Lead generation",
        "Fast load speed",
        "Video Call & Meeting App",
        "Zoom-like experience",
        "Real-time video chat",
        "Responsive design",
      ],
      stack: "React,TypeScript, Bootstrap, LiveKit, Formik",
      url: "https://skygram.co",
      imageUrl: "/Skygram.png", // Direct public folder path
    },
    {
      institution: "The Diplomatic Club",
      highlights: [
        "Clean design",
        "UI Developer role",
        "SEO optimization",
        "Lead generation",
        "Fast load speed",
        "Video Call & Meeting App",
        "Zoom-like experience",
        "Real-time video chat",
        "Responsive design",
      ],
      stack: "HTML, CSS, JavaScript",
      url: "https://www.thediplomaticclub.com",
      imageUrl: "/TheDiplomaticClub.png", // Direct public folder path
    },
    {
      institution: "Audire Learning",
      highlights: [
        "Collaboratively built a learning platform with an admin dashboard for managing courses, users, and content",
        "Designed an intuitive admin dashboard for course and user management",
        "Developed using React, Express.js, and Supabase",
        "Integrated Cloudflare R2 for video storage and streaming",
        "Implemented authentication and data management",
        "Clean design with focus on UI development",
        "Lead generation strategies included",
        "Ensured fast load speed for smooth user experience",
        "Fully responsive design for mobile and desktop",
      ],
      stack:
        "Expo, GlueStack, Figma, React, Express.js, Supabase, Cloudflare R2 ,Figma",
      url: "https://www.figma.com/design/XVOInLoP8Nt2V2YFj7h0kN/AUDIRE---MOBILE?node-id=0-1&p=f&t=dE8stLSWCRIxFxtv-0",
      imageUrl: "/audire-learnig.png", // Direct public folder path
    },
    {
      institution: "Spicy-Home",
      highlights: ["Clean design", "UI Developer role", "SEO optimization"],
      stack: "React, Tailwind CSS, TypeScript, Figma",
      url: "https://www.figma.com/proto/jlBUgLeTU1FHpmViWIBBY7/Spicy-Home---Website-Design?node-id=2-2&starting-point-node-id=2%3A2",
      imageUrl: "/Spicy-Home.png", // Direct public folder path
    },

    {
      institution: "Ceycamax",
      highlights: ["Clean design", "UI Developer role", "SEO optimization"],
      stack: "HTML, CSS, JavaScript",
      url: "https://ceycamax.com/",
      imageUrl: "/Ceycamax.png", // Direct public folder path
    },
    {
      institution: "Lexusshipping",
      highlights: ["Clean design", "UI Developer role", "SEO optimization"],
      stack: "HTML, CSS, JavaScript",
      url: "https://lexusshipping.com/",
      imageUrl: "/lexusshipping.png", // Direct public folder path
    },
  ];

  const normalized = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]/g, "");

  const filteredWorks =
    selectedStack === "All"
      ? works
      : works.filter((work) =>
          work.stack
            .split(",")
            .some((s) => normalized(s).includes(normalized(selectedStack)))
        );

  // PAGINATION CALCULATIONS - MOVED AFTER filteredWorks DECLARATION
  const totalPages = Math.ceil(filteredWorks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWorks = filteredWorks.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStack]);

  return (
    <section
      id="works"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my creative and professional work, highlighting a
            range of projects I've designed and developed. Each project reflects
            my focus on user experience, functionality, and visual detail.
          </p>
          <div className="flex justify-center flex-wrap gap-2 mt-8">
            {allStacks.map((stack) => (
              <motion.button
                key={stack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedStack(stack)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors duration-200 ${
                  selectedStack === stack
                    ? "text-white border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    : "border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-white"
                }`}
              >
                {stack}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            key={`${selectedStack}-${currentPage}`} // Include page in key
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentWorks.map((work, index) => (
              <motion.div
                key={`${work.institution}-${index}`}
                variants={cardVariants}
                className="bg-gray-800/60 border border-gray-700/50 rounded-2xl 
                          overflow-hidden transform transition-all 
                          hover:scale-[1.03] hover:shadow-2xl hover:border-cyan-500/30"
              >
                <div className="p-6 relative">
                  <div className="absolute top-0 right-0 m-4 opacity-50">
                    <BookOpen className="w-12 h-12 text-cyan-500/30" />
                  </div>

                  {work.imageUrl && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={
                          work.imageUrl
                            ? `${
                                import.meta.env.BASE_URL
                              }${work.imageUrl.replace(/^\//, "")}`
                            : `${import.meta.env.BASE_URL}fallback-image.png`
                        }
                        alt={`${work.institution} project`}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `${
                            import.meta.env.BASE_URL
                          }fallback-image.png`;
                          (e.target as HTMLImageElement).alt =
                            "Image not available";
                        }}
                      />
                    </a>
                  )}

                  <div className="mb-4">
                    <div className="mb-2">
                      <div className="flex items-center mb-1">
                        <Award className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-gray-300 font-semibold">
                          Stack:
                        </span>
                      </div>

                      <div className="ml-7 text-gray-400 text-sm leading-5 space-y-1">
                        {work.stack
                          .split(",")
                          .map((item) => item.trim())
                          .slice(0, showFullStack ? undefined : 3)
                          .map((item, idx) => (
                            <div key={idx}>• {item}</div>
                          ))}

                        {work.stack.split(",").length > 3 && (
                          <button
                            onClick={() => setShowFullStack(!showFullStack)}
                            className="text-cyan-400 hover:underline mt-1 block"
                          >
                            {showFullStack ? "See less..." : "See more..."}
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdownIndex(
                            openDropdownIndex === index ? null : index
                          )
                        }
                        className="flex items-center text-cyan-400 text-sm font-semibold focus:outline-none mb-1"
                      >
                        <span className="mr-1">Highlights</span>
                        {openDropdownIndex === index ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {openDropdownIndex === index && (
                        <ul className="mt-2 space-y-2 text-gray-400 text-sm">
                          {work.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 mt-2" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-700/50 pt-3 flex justify-between items-center">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Visit Project
                    </a>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-sm text-gray-400 italic hover:text-white transition-colors duration-200">
                        {work.institution}
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredWorks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No projects found for "
              <span className="text-cyan-400">{selectedStack}</span>".
              <div className="mt-4">
                <button
                  onClick={() => setSelectedStack("All")}
                  className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                >
                  Show All Projects
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {filteredWorks.length > itemsPerPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12 space-x-2"
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === 1
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === page
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full ${
                currentPage === totalPages
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              Next
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;
