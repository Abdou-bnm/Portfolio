import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const logos = [
  {
    image: images.htmlLogo,
    title: "HTML5",
  },
  {
    image: images.cssLogo,
    title: "CSS3",
  },
  {
    image: images.javascriptLogo,
    title: "JavaScript",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
  {
    image: images.githubLogo,
    title: "Github",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  {
    image: images.nextLogo,
    title: "NextJS",
  },
  {
    image: images.tailwindLogo,
    title: "Tailwind",
  },
];

const certifications = [
  {
    title: "Adobe Illustrator",
    link: "https://www.udemy.com/certificate/UC-729d0f53-6485-4b75-a4f1-bc3a28ac23c9/",
  },
  {
    title: "Introduction to AI",
    link: "https://www.linkedin.com/learning/certificates/8c0cebf209a3b18d86874bea6080d0f0865b45a6144931621f679f1da674360e?trk=share_certificate",
  },
  {
    title: "React",
    link: "https://ude.my/UC-66b1342f-7a13-4af3-8fab-85c905d30524/",
  },
];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="px-6 py-12 bg-gray-100 dark:bg-[#2A2E38] rounded-xl">
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="flex justify-center items-center rounded-xl mb-12 bg-gradient-to-r from-gold-600 to-gold-800 p-1">
            <Tab className="w-full text-center text-[#2A2E38] dark:text-white font-semibold py-4 cursor-pointer rounded-lg focus:outline-none transition-all duration-300 hover:bg-white hover:bg-opacity-20">
              Know me more
            </Tab>
            <Tab className="w-full text-center text-[#2A2E38] dark:text-white font-semibold py-4 cursor-pointer rounded-lg focus:outline-none transition-all duration-300 hover:bg-white hover:bg-opacity-20">
              Technical Skills
            </Tab>
          </TabList>
        </motion.div>

        <TabPanel className="flex flex-col-reverse center md:flex-row gap-10 transition-all">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-primary dark:text-white"
          >
            <h2 className="text-4xl font-bold mb-2">Passionate Software Developer & Designer</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I'm Abderaouf Benamirouche, a Software Developer, Graphic Designer, and 3rd-year Computer Science Engineer. I combine my technical and creative skills to build innovative digital solutions.
              When I'm not coding or designing, you'll find me exploring the latest tech trends and honing my skills.
            </p>
            <h3 className="font-semibold text-xl mb-2">Certifications 📝:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {certifications.map((certification, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="mb-1 transition-transform duration-300"
                >
                  <a
                    href={certification.link}
                    className="underline text-gold-600 hover:text-gold-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {certification.title}
                  </a>
                  <span className="ml-1 inline-flex align-middle">
                    <ExternalLinkIcon className="h-5 w-5" />
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-gold-400 animate-pulse w-full md:h-[450px]" />
            )}
            <img
              src={images.abdouImage}
              className="h-full w-full z-10 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              alt="Image Felix"
              loading="lazy"
              width={664}
              height={450}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </TabPanel>

        <TabPanel className="flex flex-col md:flex-row gap-10">
          <div className="w-full text-center max-w-3xl mx-auto">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-4"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center py-8 px-4 bg-gray-50 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 dark:bg-primary-400"
                >
                  <img
                    className="h-16 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-lg font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </div>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;
