import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#12161C] py-16 dark:bg-[#1F2536]">
      <div className="text-center">
        <p className="text-[#B68F40] font-normal text-base mb-2 dark:text-white">
          © {currentYear} Abderaouf Benamirouche. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
