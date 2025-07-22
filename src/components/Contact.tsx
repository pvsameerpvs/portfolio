import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, ExternalLink, MessageSquare, Check } from "lucide-react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [, setEmailError] = useState("");

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

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const inputFocusStyle =
    "focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10";

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email.");
      alert("Invalid email address");
      return;
    }

    setEmailError("");
    setShowPopup(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Success Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative max-w-md w-full p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-xl z-10"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
                <Check className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-300 mb-6">
                Thanks for reaching out! I'll get back to you soon.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowPopup(false)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/30"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            Let's work together
          </span>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-lg text-gray-300">
            I'm currently open for freelance opportunities and interesting
            projects. Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10" />
          <motion.form
            onSubmit={handleSubmit}
            className="relative max-w-md mx-auto space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 ${inputFocusStyle}`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 ${inputFocusStyle}`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Your Message</label>
              <textarea
                rows={5}
                placeholder="Hi, I'd like to talk about..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none resize-none transition-all duration-300 ${inputFocusStyle}`}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </motion.form>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-gray-400 mb-3">Or reach me directly at:</p>
          <a
            href="mailto:pvsameerpvs@gmail.com"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 group-hover:text-white transition-colors">
              pvsameerpvs@gmail.com
            </span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {[...Array(20)].map((_, i) => (
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

export default Contact;
