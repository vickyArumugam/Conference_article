import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-800 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#a5b4fc"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,245.3C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        {/* 404 Illustration */}
        <motion.h1
          className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600 mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, yoyo: Infinity, ease: "easeInOut" }}
        >
          404
        </motion.h1>

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-4 tracking-tight">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
          It looks like you’ve wandered off the map. The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-lg font-medium rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
        >
          Return to Home
        </Link>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 text-indigo-300"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-pink-300"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default NotFound;