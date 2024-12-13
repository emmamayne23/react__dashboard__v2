/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import tailwindcss from "../assets/tailwindcss.png";
import fontawesome from "../assets/fontawesome.png";
import vite from "/vite.svg";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import topleftbanner from "../assets/banner-top-left.svg";
import toprightbanner from "../assets/banner-top-right.svg";
import bottompart from "../assets/bottom-part.svg"

const Hero = () => {
  return (
    <div className="bg-primary_dark p-5 pb-3 py-16 text-center space-y-5 rounded-b-xl">
      <h1 className="text-4xl font-bold mt-20 mb-10 md:text-6xl md:mx-10 lg:text-6xl lg:p-10 lg:px-40">
        Most powerful &{" "}
        <span className="text-secondary">developer friendly</span> dashboard
      </h1>
      <div className="md:flex md:justify-center md:items-center md:gap-10 text-center">
        <div className="flex justify-center space-x-4">
          <img src={image1} alt="image1" className="w-12 h-12 rounded-full" />
          <img src={image2} alt="image2" className="w-12 h-12 rounded-full" />
          <img src={image3} alt="image3" className="w-12 h-12 rounded-full" />
        </div>
        <h1 className="mt-5 md:mt-0">
          52,589+ developers & agencies using our templates
        </h1>
      </div>
      <div className="lg:flex lg:justify-center lg:gap-5">
        <div className="hidden lg:flex">
          <img src={topleftbanner} alt="top-left-banner" className="" />
        </div>
        <div>
          <div className="sm_md:flex sm_md:justify-center sm_md:items-center sm_md:gap-10 text-center">
            <Link to="/get-started">
              <button className="bg-secondary my-3 px-4 text-white py-2 hover:bg-primary duration-300 rounded-lg">
                Log In
              </button>
            </Link>
            <div className="flex flex-col sm_md:flex-row justify-center items-center space-x-0 sm_md:space-x-2 mt-5 sm_md:mt-0">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-nintendo"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" />
                <path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" />
                <circle cx="17.5" cy="15.5" r="1" fill="currentColor" />
                <circle cx="6.5" cy="8.5" r="1" fill="currentColor" />
              </svg>
              <h1>Technologies used in this project</h1>
            </div>
          </div>

          <div className="flex justify-center gap-5 my-4 relative">
            <div className="relative group w-12 h-12">
              <img
                src={react}
                alt="react"
                className=" w-12 h-12 p-2 bg-overlay rounded-2xl"
              />
              <span className="absolute top-16 inset-0 flex duration-300 ease-in-out items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border px-5 py-4 bg-white text-black">
                React
              </span>
            </div>
            <div className="relative group w-12 h-12">
              <img
                src={tailwindcss}
                alt="tailwindcss"
                className=" w-12 h-12 p-2 bg-overlay rounded-2xl"
              />
              <span className="absolute top-16 inset-0 flex duration-300 ease-in-out items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border px-8 py-4 bg-white text-black">
                Tailwind
              </span>
            </div>
            <div className="relative group w-14 h-14">
              <img
                src={fontawesome}
                alt="tailwindcss"
                className=" w-12 h-12 p-2 bg-overlay rounded-2xl"
              />
              <span className="absolute top-16 inset-0 flex duration-300 ease-in-out items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border px-8 py-4 bg-white text-black">
                Awesome
              </span>
            </div>
            <div className="relative group w-12 h-12">
              <img
                src={vite}
                alt="tailwindcss"
                className=" w-12 h-12 p-3 bg-overlay rounded-2xl"
              />
              <span className="absolute top-16 inset-0 flex duration-300 ease-in-out items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border px-8 py-4 bg-white text-black">
                Vite
              </span>
            </div>
            <div className="relative group w-12 h-12">
              <img
                src={redux}
                alt="tailwindcss"
                className=" w-12 h-12 p-3 bg-overlay rounded-2xl"
              />
              <span className="absolute top-16 inset-0 flex duration-300 ease-in-out items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border px-8 py-4 bg-white text-black">
                Redux
              </span>
            </div>
          </div>
          
        </div>
        <div className="hidden lg:flex">
            <img src={toprightbanner} alt="top-right-banner" className="rounded-xl" />
          </div>
      </div>
      <div className="hidden lg:flex">
        <img src={bottompart} alt="bottom-banner" className="rounded-t-xl" />
      </div>

    </div>
  );
};

export default Hero;
