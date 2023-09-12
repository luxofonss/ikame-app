"use client";

import { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
}
const TopDownAnimation: FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default TopDownAnimation;
