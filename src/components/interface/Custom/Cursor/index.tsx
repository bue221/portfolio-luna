// Context
import { CursorContext } from "context/cursorContext";
import { useContext } from "react";
// import motion
import { motion } from "framer-motion";

const CustomCursor = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBG}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
    />
  );
};

export default CustomCursor;
