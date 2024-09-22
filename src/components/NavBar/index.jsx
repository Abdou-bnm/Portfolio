import React, { useState, useEffect } from "react";
import images from "../../constants/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useDarkMode from "../../hooks/useDarkMode";
import { motion } from "framer-motion";

const navlinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMode = () => setDarkTheme(!darkTheme);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Popover
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent/10 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="container mx-auto flex justify-between items-center py-6 px-6"
      >
        {/* Left side logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src={darkTheme ? images.brandLogoDark : images.brandLogoLight}
            alt="Logo"
            className="h-8"
          />
        </a>

        {/* Centered nav links */}
        <div className="hidden lg:flex space-x-8">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-base font-medium ${darkTheme ? 'text-white' : 'text-[#212529]'} after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] ${darkTheme ? 'after:bg-white' : 'after:bg-[#212529]'} after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Dark mode toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
            scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 },
          }}
          whileTap={{ y: -5 }}
          onClick={handleMode}
          className="cursor-pointer"
        >
          {darkTheme ? <SunIcon className="h-6 w-6 text-white" /> : <MoonIcon className="h-6 w-6 text-[#212529]" />}
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg bg-primary-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    default: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
                    scale: { type: "spring", damping: 5, stiffness: 100, restDelta: 0.001 },
                  }}
                  whileTap={{ y: -5 }}
                  onClick={handleMode}
                  className="cursor-pointer"
                >
                  {darkTheme ? (
                    <SunIcon className="h-6 w-6 cursor-pointer opacity-100 text-white" />
                  ) : (
                    <MoonIcon className="h-6 w-6 cursor-pointer opacity-100 text-[#212529]" />
                  )}
                </motion.div>
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-7">
                  {navlinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-base font-medium ${darkTheme ? 'text-white' : 'text-[#212529]'} hover:text-gray-400`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
