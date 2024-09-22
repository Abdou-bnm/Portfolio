import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      <motion.div
        variants={{
          offscreen: { y: 150 },
          onscreen: {
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-200 dark:bg-[#2A2E38] p-8 rounded-3xl h-full shadow-md relative transition duration-100 ease-in-out"
      >
        <h6 className="text-2xl font-bold text-[#B68F40] mb-2 dark:text-white">
          Graphic Design & UI/UX
        </h6>
        <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          Freelance Designer
        </span>
        <span className="mt-1 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          Present
        </span>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-200 dark:bg-[#2A2E38] text-sm text-gray-500 dark:text-gray-400">
              Duties & Responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-[#B68F40] list-inside list-disc dark:text-neutral-200 space-y-2">
          <li>Created visually appealing branding and marketing materials.</li>
          <li>Designed user interfaces for web and mobile applications.</li>
          <li>Conducted user research and usability testing.</li>
        </ul>
      </motion.div>

      <motion.div
        variants={{
          offscreen: { y: 150 },
          onscreen: {
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-200 dark:bg-[#2A2E38] p-8 rounded-3xl h-full shadow-md relative transition duration-100 ease-in-out"
      >
        <h6 className="text-2xl font-bold text-[#B68F40] mb-2 dark:text-white">
          Front-End Development
        </h6>
        <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          Freelance Developer
        </span>
        <span className="mt-1 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          Present
        </span>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300 dark:border-gray-600" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-200 dark:bg-[#2A2E38] text-sm text-gray-500 dark:text-gray-400">
              Duties & Responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-[#B68F40] list-inside list-disc dark:text-neutral-200 space-y-2">
          <li>Developed web applications using JavaScript, React, and Tailwind.</li>
          <li>Created and maintained user-friendly websites and landing pages.</li>
          <li>Troubleshot client issues for smooth website performance.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TwoColumnCard;
