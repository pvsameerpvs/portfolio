import { useState } from "react";
import {
  Download,
  EyeOff,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ResumePage = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  const nextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      id="resume"
      className="min-h-screen bg-[#030014] text-white flex items-center justify-center px-4 py-16 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.08),transparent_50%)]" />
      </div>

      <div
        className="relative z-10 max-w-4xl w-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
                      backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/20"
      >
        <div className="flex justify-between items-center mb-8">
          <h2
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         text-transparent bg-clip-text"
          >
            My Resume
          </h2>

          <div className="flex space-x-4">
            <button
              onClick={() => setIsBlurred(!isBlurred)}
              className="group relative p-3 rounded-full 
                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                         hover:bg-white/10 border border-white/10 transition-all duration-300
                         hover:border-white/20 shadow-lg shadow-purple-500/5"
            >
              {isBlurred ? (
                <EyeOff className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              ) : (
                <FileText className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              )}
            </button>

            <button
              onClick={handleDownload}
              className="group relative p-3 rounded-full 
                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                         hover:bg-white/10 border border-white/10 transition-all duration-300
                         hover:border-white/20 shadow-lg shadow-purple-500/5"
            >
              <Download className="w-6 h-6 text-pink-400 group-hover:text-pink-300" />
            </button>
          </div>
        </div>

        <div
          className={`relative w-full bg-white/5 rounded-xl overflow-hidden 
              aspect-[794/1123] sm:aspect-[794/1123] 
              ${isBlurred ? "backdrop-blur-xl" : "backdrop-blur-none"}`}
        >
          <img
            src={currentPage === 1 ? "/resume-one.png" : "/resume-two.png"}
            className={`absolute inset-0 w-full h-full object-contain 
                ${isBlurred ? "filter blur-lg" : ""}`}
            alt={`Resume Page ${currentPage}`}
          />

          {isBlurred && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p
                  className="text-2xl font-semibold mb-4 
                              bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                              text-transparent bg-clip-text"
                >
                  Resume Preview Blurred
                </p>
                <p className="text-gray-400 mb-6">
                  Click the eye icon to reveal or download
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`group relative p-3 rounded-full 
                       bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                       hover:bg-white/10 border border-white/10 transition-all duration-300
                       hover:border-white/20 shadow-lg shadow-purple-500/5
                       ${
                         currentPage === 1
                           ? "opacity-50 cursor-not-allowed"
                           : ""
                       }`}
          >
            <ChevronLeft className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </button>

          <div className="text-lg font-medium">
            Page <span className="text-purple-400">{currentPage}</span> of 2
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === 2}
            className={`group relative p-3 rounded-full 
                       bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                       hover:bg-white/10 border border-white/10 transition-all duration-300
                       hover:border-white/20 shadow-lg shadow-purple-500/5
                       ${
                         currentPage === 2
                           ? "opacity-50 cursor-not-allowed"
                           : ""
                       }`}
          >
            <ChevronRight className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
