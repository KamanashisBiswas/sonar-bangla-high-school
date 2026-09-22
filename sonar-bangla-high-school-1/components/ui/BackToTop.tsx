import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-white dark:bg-school-600 text-school-600 dark:text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:shadow-school-500/40 hover:bg-school-600 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 group border border-gray-100 dark:border-school-500 overflow-hidden animate-fade-in"
      aria-label="Back to top"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      <ChevronUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

export default BackToTop;