import React, { useEffect, useState } from 'react';

const ComingSoon = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount(prev => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] dark:bg-[#12161C]">
      <div className="text-center">
        <div className="mb-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#B08F43"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="none"
            className="w-16 h-16 mx-auto"
          >
            <path d="M11.17 10.8C11 11.53 10.59 12.22 10 12.72V19h4v-6.27c-.6-.5-1-.9-1.17-1.73l-.66-.66zm2.84-1.49c.35.34.77.68 1.25 1.06C16.88 11.92 19 13 19 13s-1.08-2.12-2.63-4.42c-.38-.48-.72-.9-1.06-1.25l-1.3 1.3zm-3.3-3.3c-.35.34-.77.68-1.25 1.06C7.12 8.08 5 10 5 10s2.12-1.08 4.42-2.63c.48-.38.9-.72 1.25-1.06l1.3 1.3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-[#B08F43] mb-4 dark:text-[#B68F40]">
          Coming Soon<span>{'.'.repeat(dotCount)}</span>
        </h1>

        <p className="text-lg text-neutral-800 max-w-md mx-auto dark:text-neutral-300">
          My portfolio is under construction. Stay tuned for updates as I
          showcase my latest projects and design works.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
