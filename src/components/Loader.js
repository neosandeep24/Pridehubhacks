import { motion } from "framer-motion";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  );
};

export default Loader;