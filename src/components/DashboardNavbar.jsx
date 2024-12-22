import { useState } from "react";
import { Link } from "react-router-dom";

import ukFlag from "../assets/images/Flag_of_the_United_Kingdom_(1-2).svg.png";
import user from "../assets/images/user-7.jpg";
import logo from "../assets/logo.png";
const DashboardNavbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <nav>
        {/**mobile navbar view */}
        <div className="px-7 py-2 flex items-center text-gray-300 justify-between fixed top-0 bg-gray-700 w-full z-50">
          <div className="space-x-8 text-sm flex">
            <button onClick={() => setOpenSidebar((prevState) => !prevState)}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <i className="fa-solid fa-search hover:cursor-pointer"></i>
            <div className="space-x-5 hidden xl:flex">
                <p>Apps</p>
                <p>Chat</p>
                <p>Calender</p>
                <p>Email</p>
            </div>
          </div>
          <div className="flex items-center gap-8 relative">
            <img src={ukFlag} className="w-6 h-6 rounded-full hover:cursor-pointer" />
            <div className="flex items-center hover:cursor-pointer">
                <i className="fa-solid fa-shopping-cart"></i>
                <p className="bg-orange-500 text-white rounded-full px-1.5 absolute top-0 right-[200px]">0</p>
            </div>
            <i className="fa-solid fa-sun hover:cursor-pointer"></i>
            <i className="fa-solid fa-bell hover:cursor-pointer"></i>
            <div className="w-2 h-2 bg-primary rounded-full absolute top-1.5 right-[116px]"></div>
            <i className="fa-solid fa-list hover:cursor-pointer"></i>
            <img src={user} className="w-10 h-10 rounded-full hover:cursor-pointer" />
          </div>
        </div>

        {/**expanded navbar*/}
        <div
          className={`${
            openSidebar ? " translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 right-0 bottom-0 z-50 duration-200`}
        >
          <div
            onClick={() => setOpenSidebar((openSidebar) => !openSidebar)}
            className="bg-overlay absolute top-0 w-full h-full z-50 xl:opacity-0"
          ></div>
          <div className="sidebar absolute overflow-y-auto overflow-x-hidden flex flex-col gap-14 h-full z-50 top-0 bg-gray-700 p-6 w-mobile-width shadow-md">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="space-y-5 flex flex-col gap-1">
                <span className="text-sm ml-5 text-gray-400">HOME</span>
                <Link
                to="/"
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-solid fa-house mr-3"></i>Home Page
              </Link>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-solid fa-layer-group mr-3"></i>Modern
              </Link>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-brands fa-shopify mr-3"></i>
                eCommerce
              </Link>
              <span className="text-sm ml-5 text-gray-400">APPS</span>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-solid fa-ticket mr-3"></i>
                Tickets
              </Link>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-brands fa-codepen mr-3"></i>Pages
              </Link>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-solid fa-address-book mr-3"></i>Contacts
              </Link>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-brands fa-medium mr-3"></i>Blog
              </Link>
              <Link
                to=""
                className="rounded-lg py-1 pl-5 hover:bg-tertiary hover:text-secondary duration-300"
              >
              <i className="fa-solid fa-envelope mr-3"></i>Email
              </Link>
              
              <Link to="">
                <button className="bg-secondary py-1.5 hover:bg-primary duration-300 w-full rounded-xl">
                <i className="fa-solid fa-users mr-3"></i>Users
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNavbar;
