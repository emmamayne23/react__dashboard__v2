import { Link } from "react-router-dom";

import Card from "../components/Card";
import Feedbacks from "../components/Feedbacks";

import user from "../assets/image1.png";
import user1 from "../assets/image2.png";
import briefcase from "../assets/case.png";
import features from "../assets/feature-apps.png";
import favorites from "../assets/icon-favorites.svg";
import speechbubble from "../assets/icon-speech-bubble.svg";

const AboutPage = () => {
  return (
    <>
      <div>
        <div className="mt-16">
          <div className="flex flex-col gap-3 p-5 xl:grid xl:grid-cols-2 xl:items-center bg-primary_dark h-lvh xl:h-[440px]">
            <div className="mt-10">
              <h1 className="text-4xl font-semibold md:text-5xl mb-10">
                Get to know Modernize Dashboard Template
              </h1>
              <div className="flex flex-col gap-2 my-8 sm:flex-row">
                <Link to="login">
                  <button className="bg-secondary duration-200 hover:bg-primary w-full sm:w-48 rounded-md py-2">
                    Create an account
                  </button>
                </Link>
                <Link>
                  <button className="border border-secondary duration-200 hover:bg-secondary sm:w-48 hover:text-white text-primary w-full rounded-md py-1.5">
                    View Open Positions
                  </button>
                </Link>
              </div>
            </div>
            <div className="text-sm leading-6 xl:p-12">
              Do you need a highly customizable and developer friendly premium
              next.js admin template packed with numerous features? Modernize
              Next.js Admin Template has everything you need. This bootstrap
              based admin template is designed in accordance with industry
              standards and best practices to provide you.
            </div>
          </div>
          <div>
            <h1 className="text-4xl mt-20 font-bold text-center">The hassle-free setup process</h1>
            <div className="p-5">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
              <div className="grid place-items-center bg-amber-900 rounded-2xl gap-10 py-8">
                <img src={briefcase} alt="briefcase-icon" />
                <div>
                  <h1 className="text-center my-5 text-base font-semibold">
                    Light & Dark Color Schemes
                  </h1>
                  <p className="text-center px-10">
                    Choose your prferred visual style effortlessly.
                  </p>
                </div>
              </div>
              <div className="grid place-items-center bg-primary_dark rounded-2xl gap-10 py-8">
                <div>
                  <h1 className="text-center my-5 text-base font-semibold">
                    12+ Ready to Use Application Designs
                  </h1>
                  <p className="text-center px-10">
                    Instantly deployable designs for your applications.
                  </p>
                </div>
                <img src={features} alt="features icon" />
              </div>
              <div className="grid place-items-center bg-green-900 rounded-2xl gap-10 py-8">
                <img src={speechbubble} alt="speach bubble icon" />
                <div>
                  <h1 className="text-center my-5 text-base font-semibold">
                    Code Improvements
                  </h1>
                  <p className="text-center px-10">
                    Benefits from continuous improvements and optimizations.
                  </p>
                </div>
              </div>
              <div className="grid place-items-center bg-yellow-900 rounded-2xl gap-10 py-8">
                <img src={favorites} alt="favorites icon" />
                <div>
                  <h1 className="text-center my-5 text-base font-semibold">
                    50+ UI Components
                  </h1>
                  <p className="text-center px-10">
                    A rich collection for seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            </div>
            
            <hr className="mt-10"></hr>
            <div className="xl:grid xl:grid-cols-2 my-20 shadow-lg shadow-gray-600 py-20">
                <div className="p-5">
                    <h1 className="text-3xl font-bold mb-5 md:text-4xl">Key metric at a glance</h1>
                    <p className="leading-7">From the year we were founded to the impressive customer base we&apos;ve built, and the growth percentages that reflect our continuous improvement, these numbers tell our story at a glance. Explore the data that drives our mission and underscores our commitment to excellence.</p>
                </div>
                <div className="grid grid-cols-2 gap-5 p-5">
                    <div className="">
                        <h1 className=" uppercase text-sm text-primary font-medium mb-2">founded</h1>
                        <span className="text-4xl font-semibold md:text-6xl md:font-bold">2023</span>
                        <p className="text-sm">When we founded EMs</p>
                    </div>
                    <div className="">
                        <h1 className=" uppercase text-sm text-primary font-medium mb-2">growth</h1>
                        <span className="text-4xl font-semibold md:text-6xl md:font-bold">400%</span>
                        <p className="text-sm">Revenue growth in 2024</p>
                    </div>
                    <div className="">
                        <h1 className=" uppercase text-sm text-primary font-medium mb-2">customers</h1>
                        <span className="text-4xl font-semibold md:text-6xl md:font-bold">30k+</span>
                        <p className="text-sm">Customers on EMs</p>
                    </div>
                    <div className="">
                        <h1 className=" uppercase text-sm text-primary font-medium mb-2">dashboarders</h1>
                        <span className="text-4xl font-semibold md:text-6xl md:font-bold">25k+</span>
                        <p className="text-sm">Dashboards built using EMs</p>
                    </div>
                    
                </div>
            </div>
          </div>
          <div className="bg-secondary text-base flex flex-col text-center py-3 my-5 gap-3 md:flex-row md:items-center md:justify-around">
            <div className="flex justify-center">
              <img
                src={user}
                alt="user"
                className="w-12 h-12 border-black border rounded-full"
              />
              <img
                src={user1}
                alt="user"
                className="w-12 h-12 border-black border rounded-full"
              />
            </div>
            <span>
              Save valuable time and effort spent searching for a solution.
            </span>
            <Link to="/" className="underline font-semibold">
              Contact us now
            </Link>
          </div>
          <div className="my-10">
            <Feedbacks />
          </div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
