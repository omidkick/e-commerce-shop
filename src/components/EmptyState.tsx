"use client";

import { motion } from "framer-motion";

interface EmptyStateProps {
  message: string;
  icon?: React.ReactNode;
}

const EmptyState = ({ message, icon }: EmptyStateProps) => {
  return (
    <motion.div
      className="col-span-full text-center py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <p className="text-gray-500 text-lg">{message}</p>
    </motion.div>
  );
};

export default EmptyState;
