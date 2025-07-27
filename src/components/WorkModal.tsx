import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Work = {
  institution: string;
  highlights: string[];
  stack: string;
  url: string;
  imageUrl: string;
};

type WorkModalProps = {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
};

const WorkModal: React.FC<WorkModalProps> = ({ work, isOpen, onClose }) => {
  const [showFullStack, setShowFullStack] = useState(false);
  const [showFullHighlights, setShowFullHighlights] = useState(false);
  const maxItems = 4;

  const stackItems = work?.stack.split(",").map((t) => t.trim()) || [];
  const highlightItems = work?.highlights || [];

  const displayedStack = showFullStack
    ? stackItems
    : stackItems.slice(0, maxItems);
  const displayedHighlights = showFullHighlights
    ? highlightItems
    : highlightItems.slice(0, maxItems);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && work && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-gray-700 max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-800">
              <h3
                id="modal-title"
                className="text-xl font-semibold text-white truncate"
                title={work.institution}
              >
                {work.institution}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-gray-400 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 space-y-6 text-gray-300 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-800">
              {/* Image */}
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${work.imageUrl.replace(
                    /^\//,
                    ""
                  )}`}
                  alt={`${work.institution} project screenshot`}
                  className="w-full h-64 object-cover rounded-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `${
                      import.meta.env.BASE_URL
                    }fallback-image.png`;
                  }}
                />
              </a>

              {/* Two-column: Stack + Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                    Tech Stack
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {displayedStack.map((tech, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {stackItems.length > maxItems && (
                    <button
                      onClick={() => setShowFullStack((prev) => !prev)}
                      className="mt-2 text-cyan-400 hover:underline text-sm"
                    >
                      {showFullStack ? "See less..." : "See more..."}
                    </button>
                  )}
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-cyan-400 font-semibold text-lg mb-2">
                    Highlights
                  </h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {displayedHighlights.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {highlightItems.length > maxItems && (
                    <button
                      onClick={() => setShowFullHighlights((prev) => !prev)}
                      className="mt-2 text-cyan-400 hover:underline text-sm"
                    >
                      {showFullHighlights ? "See less..." : "See more..."}
                    </button>
                  )}
                </div>
              </div>

              {/* Project Link */}
              <div>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 underline font-medium hover:text-cyan-300 transition"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkModal;
