import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        openSidebar &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".fa-bars")
      ) {
        setOpenSidebar(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [openSidebar]);

  return (
    <nav className="bg-primary_dark fixed top-0 left-0 right-0">
      <div className="flex justify-between items-center p-5 lg:hidden">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from propagating to the document
            setOpenSidebar((prevState) => !prevState);
          }}
          className="text-xl hover:text-primary lg:hidden"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/** nav links for mobile devices */}
      <div className={`${openSidebar ? "flex" : "hidden"} fixed top-0 left-0 right-0 bottom-0 z-50`}>
        <div className="bg-overlay absolute top-0 w-full h-full z-50">
          <div className="sidebar absolute flex flex-col gap-14 h-full z-50 top-0 bg-gray-700 p-6 w-mobile-width shadow-md">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="space-y-5 flex flex-col gap-1">
              <Link
                to="/about"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
                Blog
              </Link>
              <Link
                to="/portfolio"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/dashboard"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/contact"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
                Contact
              </Link>
              <Link
                to="/support"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
                Support
              </Link>
              <Link to="/get-started">
                <button className="bg-secondary py-1.5 hover:bg-primary duration-300 w-full rounded-xl">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/** nav links for desktop devices */}
      <div className="hidden items-center bg-primary_dark h-24 text-gray-400 px-5 justify-between fixed top-0 right-0 left-0 gap-14 z-50 lg:flex">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="space-x-5 flex items-center  gap-1">
          <Link to="/about" className="rounded-lg py-1 pl-5 duration-300">
            About Us
          </Link>
          <Link to="/blog" className="rounded-lg py-1 pl-5 duration-300">
            Blog
          </Link>
          <Link to="/portfolio" className="rounded-lg py-1 pl-5 duration-300">
            Portfolio
          </Link>
          <Link to="/dashboard" className="rounded-lg py-1 pl-5 duration-300">
            Dashboard
          </Link>
          <Link to="/contact" className="rounded-lg py-1 pl-5 duration-300">
            Contact
          </Link>
          <Link to="/support" className="rounded-lg py-1 pl-5 duration-300">
            Support
          </Link>
        </div>
        <Link to="/get-started">
          <button className="bg-secondary px-3 text-white py-1.5 hover:bg-primary duration-300 w-full rounded-lg">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
