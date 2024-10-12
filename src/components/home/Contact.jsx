import React from "react";
import { FaLinkedin, FaLine } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="flex flex-row justify-between items-center py-10 my-10 mt-20 "
      >
        <div className="contact-detail w-1/2">
          <h2 className="text-xl uppercase border-l-2 border-l-accent-content  ps-3 mb-5 font-bold">
            get in touch
          </h2>
          <a href="mailto:juthamas.ntk@gmail.com">
            <h6 className="text-lg">Juthamas.ntk@gmail.com</h6>
          </a>
          <a href="tel:0644520487">
            <h6 className="text-lg">064 452 0487</h6>
          </a>
        </div>
        <div className="grid grid-cols-3 justify-items-center items-center text-center contact-icon w-1/2">
          <div className="icon-link flex flex-col items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/%E0%B8%88%E0%B8%B8%E0%B8%91%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A8-%E0%B8%99%E0%B8%B2%E0%B8%84%E0%B8%95%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B9%E0%B8%A5-1134192b8/"
            >
              <FaLinkedin className="text-5xl mb-2" />
            </a>
            <h6 className="text-lg uppercase">LinkedIn</h6>
          </div>
          <div className="icon-link flex flex-col items-center">
            <a target="_blank" href="https://line.me/ti/p/89Sam-ZxYT">
              <FaLine className="text-5xl mb-2" />
            </a>
            <h6 className="text-lg uppercase">line</h6>
          </div>
          <div className="icon-link flex flex-col items-center ">
            <a target="_blank" href="https://line.me/ti/p/89Sam-ZxYT">
              <CiChat1 className="text-5xl mb-2" />
            </a>
            <h6 className="text-lg uppercase">chat me</h6>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Contact;
