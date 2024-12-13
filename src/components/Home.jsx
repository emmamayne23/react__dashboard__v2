import Tabs from "./Tabs";

import briefcase from "../assets/case.png";
import speechbubble from "../assets/icon-speech-bubble.svg";
import favorites from "../assets/icon-favorites.svg";
import features from "../assets/feature-apps.png";
import iconlogo from "../assets/logoIcon.svg";
import screen1 from "../assets/screen1.png";

const Home = () => {
  return (
    <>
      <div className="text-sm ">
        <div>
          <div className="p-5">
            <div className="px-10 pt-24 pb-10 sm:px-40 md:px-60 lg:px-80 mb-5">
              <h1 className=" text-center">
                Introducing Modernize&apos;s Light & Dark Skins, Exceptional
                Dashboards, and Dynamic Pages - Stay Updated on What&apos;s New!
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid place-items-center bg-amber-900 rounded-2xl gap-10 py-8">
                <img src={briefcase} alt="briefcase-icon" />
                <div>
                  <h1 className="text-center my-5 text-base font-semibold">
                    Light & Dark Color Schemes
                  </h1>
                  <p className="text-center px-10">Choose your prferred visual style effortlessly.</p>
                </div>
              </div>
              <div className="grid place-items-center bg-primary_dark rounded-2xl gap-10 py-8">
                <div>
                  <h1 className="text-center my-5 text-base font-semibold">
                    12+ Ready to Use Application Designs
                  </h1>
                  <p className="text-center px-10">Instantly deployable designs for your applications.</p>
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
                  <p className="text-center px-10">A rich collection for seamless user experiences.</p>
                </div>
              </div>
              <div className="grid place-items-center bg-primary_dark rounded-2xl gap-7 py-20 sm:col-span-2 lg:col-span-1 lg:row-start-1 lg:row-span-2">
                <img src={iconlogo} alt="icon logo" className="w-12 h-12" />
                <div>
                  <h1 className="text-center my-5 text-4xl font-semibold">
                    New Demos
                  </h1>
                  <p className="text-center px-10">
                    Brand new demos to help you build the perfect dashboard:
                    Dark and Right-to-Left.
                  </p>
                </div>
                <img src={screen1} alt="screen icon" className="max-w-full max-h-80" />
              </div>
            </div>
          </div>
          
          <div className="tabs-section shadow-md rounded shadow-slate-600 my-5">
            <Tabs />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
