import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1. Full Page Loader with Framer Motion
export const PageLoader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-gray-950/90 backdrop-blur-md"
    >
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 border-4 border-school-200 dark:border-school-900 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-20 h-20 border-4 border-transparent border-t-school-600 dark:border-t-school-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-12 h-12 border-4 border-transparent border-b-school-400 dark:border-b-school-300 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p 
          className="mt-6 text-school-700 dark:text-school-400 font-semibold tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          লোডিং হচ্ছে...
        </motion.p>
      </div>
    </motion.div>
  );
};

// 2. Inline Spinner with Framer Motion
export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg', className?: string }> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <motion.div 
      className={cn(`${sizeClasses[size]} border-gray-200 dark:border-gray-700 border-t-school-600 dark:border-t-school-500 rounded-full`, className)}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

// 3. Professional Skeleton Loader (Base)
interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-gray-200 dark:bg-gray-800 rounded",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent"
        animate={{ translateX: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// 4. Table Skeleton
export const TableSkeleton: React.FC<{ rows?: number, cols?: number }> = ({ rows = 5, cols = 5 }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20 flex gap-4 items-center">
         <Skeleton className="h-8 w-32 rounded-md" />
         <Skeleton className="h-8 w-24 ml-auto rounded-md" />
      </div>
      <div className="p-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex gap-4 mb-4 last:mb-0 items-center">
             {Array.from({ length: cols }).map((_, j) => (
               <Skeleton key={j} className="h-6 w-full rounded-md" />
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. Card Skeleton
export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
           <Skeleton className="h-48 w-full mb-5 rounded-lg" />
           <Skeleton className="h-6 w-3/4 mb-3 rounded-md" />
           <Skeleton className="h-4 w-1/2 mb-4 rounded-md" />
           <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
             <Skeleton className="h-8 w-24 rounded-full" />
             <Skeleton className="h-8 w-8 rounded-full" />
           </div>
        </div>
      ))}
    </div>
  );
};

// 6. List Skeleton
export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-800 flex gap-4 items-center">
          <Skeleton className="h-16 w-16 rounded-lg flex-shrink-0" />
          <div className="flex-grow">
            <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
            <Skeleton className="h-4 w-1/2 rounded-md" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full flex-shrink-0 hidden sm:block" />
        </div>
      ))}
    </div>
  );
};