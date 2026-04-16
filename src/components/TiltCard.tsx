import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function TiltCard({ children, className, ...props }: TiltCardProps) {
  return (
    <motion.div
      {...props}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative group shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-shadow duration-500",
        className
      )}
    >
      <div>
        {children}
      </div>
    </motion.div>
  );
}
