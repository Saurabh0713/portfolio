import React from "react";
import image from "../Image/i7.png";
import { IoLogoLinkedin, IoLogoGithub, IoMailSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="text-center text-neutral-800  bg-gradient-to-r from-stone-600 to-red-500  h-screen flex items-center justify-around max-md:flex-col max-md:h-max max-md:py-4 max-md:bg-gradient-to-b from-stone-600 to-red-500 mt-14" id="home">
      <div className="w-1/2 max-md:w-11/12 flex flex-col items-end max-md:items-center">
        <h1 className="mb-6 max-md:my-4 w-2/3 text-5xl font-bold">
          Hello! I Am
        </h1>
        <h3 className="mb-6 max-md:my-4 w-2/3 text-4xl font-bold">
          Saurabh Upadhyay
        </h3>
        <h3 className="mb-8 max-md:my-4 w-2/3 text-3xl">
          Frontend Web Developer
        </h3>
        <div className="text-3xl w-2/3  max-md:my-4 flex justify-center">
          <a className="hover:text-neutral-700" href="https://www.linkedin.com/in/saurabh-upadhyay-227b14247/" target="_blank">
            <IoLogoLinkedin />
          </a>
          <a className="hover:text-neutral-700 mx-8" href="https://github.com/Saurabh0713" target="_blank">
            <IoLogoGithub />
          </a>
          <a className="hover:text-neutral-700" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTHWDDzdhGDvpbhQSlBFWTPsFWPNQKfCzcGDSwkJZCMmZmLdKBfJwMXwfSVxrBZsPDMqNB" target="_blank">
            <IoMailSharp />
          </a>
        </div>
      </div>
      <div className="w-1/2 max-md:w-11/12 h-full flex items-center justify-end max-md:justify-center">
        <img src={image} className="h-full myHome-div-img max-md:h-80" alt="profile pic"></img>
      </div>
    </div>
  );
}
