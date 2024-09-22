import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/image";

// Social media links
const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/abderaouf-benamirouche-b7166b256/",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/Abdou-bnm",
  },
  {
    logo: images.upworkIcon,
    alt: "Upwork Icon",
    link: "https://www.upwork.com/freelancers/~018db70d471787df2a",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-[#F9F9FB] dark:bg-[#12161C] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <motion.div
          className="absolute bg-[#3A3D52] w-24 h-24 rounded-full opacity-20"
          animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bg-[#3A3D52] w-40 h-40 rounded-full opacity-20 right-0"
          animate={{ x: [0, -150, 150, 0], y: [0, 150, -150, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#3A3D52] dark:text-[#B68F40] text-5xl font-bold text-center"
            >
              Abderaouf B.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-[#3A3D52] dark:text-[#B68F40] text-2xl text-center"
            >
              Front-end Developer & Designer
            </motion.h2>
          </div>
        </div>

        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.25 }}
                className="bg-[#FFFFFF] dark:bg-[#2A2E38] w-max rounded-full hover:bg-[#B68F40] dark:hover:bg-[#3A3D52]"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-12 w-12 p-3 transition-all dark:invert"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
